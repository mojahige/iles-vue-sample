<script lang="ts">
export default {
  name: "DefaultLayout",
};
</script>

<template>
  <header class="grid grid-cols-1 gap-2">
    <h1 class="flex justify-center">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="64"
        height="64"
      />
    </h1>

    <nav
      class="bg-gradient-to-r from-green-300 to-blue-300 flex flex-wrap gap-2 justify-center"
    >
      <router-link to="/" class="p-2">Home</router-link>
      <router-link to="/about" class="p-2">About</router-link>
    </nav>
  </header>

  <main class="p-8">
    <slot />
  </main>
</template>

<style>
@import "~/assets/base.css";
</style>
