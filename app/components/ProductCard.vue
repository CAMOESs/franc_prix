<template>
  <div class="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div class="aspect-square overflow-hidden bg-frost-100">
      <img
        :src="product.image"
        :alt="product.nom"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div class="p-6">
      <h3 class="text-xl font-display font-semibold text-frost-900 mb-2">
        {{ product.nom }}
      </h3>
      <p class="text-frost-600 text-sm mb-4">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between">
        <span class="text-2xl font-bold text-ice-600">
          {{ product.prix }}
        </span>
        <button class="px-6 py-2 bg-gradient-to-r from-ice-500 to-ice-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
          Voir plus
        </button>
      </div>
    </div>

    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-ice-600">
      {{ product.categorie }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
