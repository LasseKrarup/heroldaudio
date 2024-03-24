<template>
  <NuxtLink
    activeClass="navbarActive"
    :class="'font-medium dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ' 
    + (props.isHome ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-400')"
    :to="props.to"
    >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps(["isHome", "to"])
</script>

<style>
  .navbarActive {
    @apply font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
  }
</style>