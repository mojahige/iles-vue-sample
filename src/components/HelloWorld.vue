<script setup lang="ts">
import { withDefaults } from "vue";

type Props = {
  message: string;
};

withDefaults(defineProps<Props>(), {
  message: "Vue3",
});
</script>

<template>
  <p class="text-xl font-bold text-center">Hello {{ message }}</p>
</template>
