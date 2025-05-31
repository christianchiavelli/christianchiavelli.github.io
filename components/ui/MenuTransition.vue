<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="fixed inset-0 z-30 pointer-events-none">
    <div class="absolute top-0 left-0 w-full h-16 bg-transparent transition-opacity duration-300"
      :class="isOpen ? 'opacity-100' : 'opacity-0'"></div>
  </div>
</template>
