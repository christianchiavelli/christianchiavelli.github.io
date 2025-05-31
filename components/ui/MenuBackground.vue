<script setup>
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute inset-0 bg-white" :class="isVisible ? 'opacity-100' : 'opacity-0'"></div>
    <div
      class="absolute -left-[75%] top-[60%] transform -translate-y-1/2 aspect-square w-[200vw] h-[200vw] md:w-[1700px] md:h-[1700px] lg:w-[2000px] lg:h-[2000px] rounded-full"
      style="background-color: #F1F2F4; will-change: transform, opacity; transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);"
      :class="isVisible ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-0'"></div>
  </div>
</template>
