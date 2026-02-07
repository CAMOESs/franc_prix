<template>
  <div
    @click="$emit('select', category.id)"
    class="group relative h-64 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
  >
    <img
      :src="category.image"
      :alt="category.nom"
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div class="absolute inset-0 bg-gradient-to-t from-frost-900/90 via-frost-900/40 to-transparent"></div>

    <div class="absolute inset-0 flex flex-col justify-end p-6">
      <h3 class="text-2xl font-display font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
        {{ category.nom }}
      </h3>
      <p class="text-frost-200 text-sm mb-3">
        {{ category.count }} produits
      </p>
      <div class="flex items-center text-ice-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Découvrir</span>
        <svg class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
})

defineEmits(['select'])
</script>
