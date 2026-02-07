<template>
  <div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-float">
    <div class="flex flex-col items-center space-y-2 cursor-pointer group" @click="scrollDown">
      <span class="text-white text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
        Découvrir
      </span>
      <div class="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
        <div class="w-1 h-2 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scrollDown = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }
}
</script>
