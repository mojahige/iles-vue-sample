import type { DefineComponent, FunctionalComponent, VNode } from "vue";

export interface Post extends Record<string, unknown> {
  title: string;
  href: string;
  date: Date;
  content: DefineComponent;
  render: () => VNode;
}

function byDate(a: Post, b: Post) {
  return Number(new Date(b.date)) - Number(new Date(a.date));
}

function isArray<T>(val: unknown): val is T[] {
  return Array.isArray(val);
}

const ExcerptOnly = (post: Post) => {
  const mdxDoc = post.render();

  if (!mdxDoc) return null;

  const mdElements = mdxDoc.children;

  if (!isArray(mdElements)) return mdElements;

  const excerptIndex = mdElements.findIndex((el) => (el as any).type === "hr");

  return excerptIndex ? mdElements.slice(0, excerptIndex) : mdElements;
};

function withExcerpt(post: Post) {
  const excerpt: FunctionalComponent = () => ExcerptOnly(post);
  return { ...post, excerpt };
}

interface ImportMetaA extends ImportMeta {
  globEagerDefault: (glob: string) => { [key: string]: unknown };
}

export function getPosts() {
  const posts = Object.values(
    (import.meta as ImportMetaA).globEagerDefault("../pages/posts/*.{md,mdx}")
  ) as Post[];

  return posts.sort(byDate).map(withExcerpt);
}
