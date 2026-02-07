<template>
  <div>
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="FRANC-PRIX Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-frost-900/70 via-frost-900/50 to-frost-900/70"></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 class="text-6xl md:text-8xl font-display font-bold text-white mb-6 animate-fade-in">
          Bienvenue chez <span class="bg-gradient-to-r from-ice-300 to-ice-500 bg-clip-text text-transparent">FRANC-PRIX</span>
        </h1>
        <p class="text-xl md:text-2xl text-frost-100 mb-8 animate-slide-up font-light">
          Explorez nos produits frais et nos boissons rafraîchissantes
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <NuxtLink
            to="/products"
            class="px-8 py-4 bg-gradient-to-r from-ice-500 to-ice-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Découvrir nos produits
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            En savoir plus
          </NuxtLink>
        </div>
      </div>

      <ScrollIndicator />
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-frost-900 mb-4">
            Pourquoi choisir <span class="text-ice-600">FRANC-PRIX</span> ?
          </h2>
          <p class="text-frost-600 text-lg max-w-2xl mx-auto">
            Une expérience d'achat unique dans un environnement moderne et rafraîchissant
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="text-center p-8 rounded-2xl bg-gradient-to-b from-frost-50 to-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center text-white text-3xl">
              {{ feature.icon }}
            </div>
            <h3 class="text-xl font-display font-semibold text-frost-900 mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-frost-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-b from-frost-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-frost-900 mb-4">
            Nos catégories phares
          </h2>
          <p class="text-frost-600 text-lg">
            Découvrez notre sélection de produits premium
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            v-for="category in categories"
            :key="category.id"
            :category="category"
            @select="navigateToProducts"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-ice-500 to-ice-700 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
            Restez au frais avec FRANC-PRIX
          </h2>
          <p class="text-xl text-ice-100 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives et les dernières nouveautés
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              class="flex-1 px-6 py-4 rounded-full text-frost-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button class="px-8 py-4 bg-white text-ice-600 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { categories } = useProducts()

const features = [
  {
    icon: '❄️',
    title: 'Fraîcheur Garantie',
    description: 'Tous nos produits sont conservés dans des conditions optimales pour préserver leur fraîcheur'
  },
  {
    icon: '⭐',
    title: 'Qualité Premium',
    description: 'Une sélection rigoureuse de produits haut de gamme pour votre satisfaction'
  },
  {
    icon: '🚀',
    title: 'Service Rapide',
    description: 'Une expérience d\'achat fluide et efficace pour gagner du temps'
  }
]

const navigateToProducts = (categoryId) => {
  navigateTo(`/products?category=${categoryId}`)
}

useHead({
  title: 'FRANC-PRIX - Centre Commercial Premium',
  meta: [
    { name: 'description', content: 'Explorez nos produits frais et nos boissons rafraîchissantes chez FRANC-PRIX, votre centre commercial premium.' }
  ]
})
</script>
