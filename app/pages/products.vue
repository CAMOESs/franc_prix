<template>
  <div class="min-h-screen">
    <section class="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Products"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-frost-900/80 to-frost-900/60"></div>
      </div>

      <div class="relative z-10 text-center px-4">
        <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-4 animate-fade-in">
          Nos Produits
        </h1>
        <p class="text-xl text-frost-100 animate-slide-up">
          Découvrez notre sélection premium
        </p>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div v-if="!selectedCategory" class="space-y-12">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-display font-bold text-frost-900 mb-4">
              Choisissez une catégorie
            </h2>
            <p class="text-frost-600">
              Explorez nos différentes gammes de produits
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              v-for="category in categories"
              :key="category.id"
              :category="category"
              @select="selectCategory"
            />
          </div>
        </div>

        <div v-else class="space-y-8">
          <div class="flex items-center justify-between">
            <div>
              <button
                @click="selectedCategory = null"
                class="flex items-center text-ice-600 hover:text-ice-700 font-medium mb-4 transition-colors"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Retour aux catégories
              </button>
              <h2 class="text-3xl md:text-4xl font-display font-bold text-frost-900">
                {{ currentCategoryName }}
              </h2>
              <p class="text-frost-600 mt-2">
                {{ filteredProducts.length }} produits disponibles
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-b from-frost-50 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto bg-gradient-to-br from-ice-500 to-ice-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            Une question sur nos produits ?
          </h2>
          <p class="text-xl text-ice-100 mb-8">
            Notre équipe est là pour vous conseiller
          </p>
          <NuxtLink
            to="/contact"
            class="inline-block px-8 py-4 bg-white text-ice-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const { categories, products, getProductsByCategory } = useProducts()

const selectedCategory = ref(null)

const currentCategoryName = computed(() => {
  if (!selectedCategory.value) return ''
  const category = categories.find(c => c.id === selectedCategory.value)
  return category ? category.nom : ''
})

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products
  return getProductsByCategory(selectedCategory.value)
})

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  if (route.query.category) {
    selectedCategory.value = route.query.category
  }
})

useHead({
  title: 'Nos Produits - FREEZE',
  meta: [
    { name: 'description', content: 'Découvrez notre sélection de produits chez FRANCPRIX.' }
  ]
})
</script>
