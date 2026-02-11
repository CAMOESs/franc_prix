<template>
  <div class="min-h-screen">
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 z-0"
        :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
      >
        <img
          src="/banner.png"
          alt="About FRANC-PRIX"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-frost-900/70 via-frost-900/50 to-white"></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in">
          À propos de <span class="bg-gradient-to-r from-ice-300 to-ice-500 bg-clip-text text-transparent whitespace-nowrap mt-5">FRANC-PRIX</span>
        </h1>
        <p class="text-xl md:text-2xl text-frost-100 animate-slide-up">
          L'excellence au service de votre quotidien
        </p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto space-y-12">
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="opacity-1 translate-y-8 transition-all duration-1000"
            :class="{ 'animate-slide-up': true }"
            :style="{ transitionDelay: `${index * 200}ms` }"
          >
            <h2 class="text-3xl md:text-4xl font-display font-bold text-frost-900 mb-6">
              {{ section.title }}
            </h2>
            <p class="text-lg text-frost-600 leading-relaxed mb-4">
              {{ section.content }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-b from-frost-50 to-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-frost-900 mb-4">
            Nos valeurs
          </h2>
          <p class="text-frost-600 text-lg">
            Ce qui guide notre engagement quotidien
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="text-6xl mb-6">{{ value.icon }}</div>
            <h3 class="text-2xl font-display font-bold text-frost-900 mb-4">
              {{ value.title }}
            </h3>
            <p class="text-frost-600">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-4xl md:text-5xl font-display font-bold text-frost-900">
                Notre engagement
              </h2>
              <p class="text-lg text-frost-600 leading-relaxed">
                Depuis notre création, FRANC-PRIX s'engage à offrir une expérience d'achat exceptionnelle. Chaque jour, nous sélectionnons avec soin les meilleurs produits pour répondre à vos attentes.
              </p>
              <p class="text-lg text-frost-600 leading-relaxed">
                Notre équipe passionnée travaille sans relâche pour maintenir les standards les plus élevés en matière de qualité, de fraîcheur et de service client.
              </p>
              <NuxtLink
                to="/contact"
                class="inline-block px-8 py-4 bg-gradient-to-r from-ice-500 to-ice-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Rejoignez l'aventure
              </NuxtLink>
            </div>

            <div class="relative">
              <img
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="FRANC-PRIX Store"
                class="rounded-2xl shadow-2xl"
              />
              <div class="absolute -bottom-6 -right-6 bg-ice-500 text-white p-8 rounded-2xl shadow-xl">
                <div class="text-4xl font-bold">10+</div>
                <div class="text-sm">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-ice-500 to-ice-700 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
            Rejoignez la communauté FRANC-PRIX
          </h2>
          <p class="text-xl text-ice-100 mb-8">
            Découvrez nos offres exclusives et restez informé de nos nouveautés
          </p>
          <NuxtLink
            to="/products"
            class="inline-block px-8 py-4 bg-white text-ice-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Découvrir nos produits
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'

const { y: scrollY } = useScroll(typeof window !== 'undefined' ? window : null)
const isVisible = ref(false)

const sections = [
  {
    title: 'Notre histoire',
    content: 'FRANC-PRIX est né d\'une passion pour l\'excellence et la qualité. Fondé par des experts du commerce de détail, notre centre commercial  s\'est rapidement imposé comme une référence dans le secteur. Notre mission : offrir à nos clients une expérience d\'achat unique, alliant fraîcheur, qualité et modernité.'
  },
  {
    title: 'Notre vision',
    content: 'Nous croyons fermement que faire ses courses ne devrait pas être une corvée, mais un moment agréable. C\'est pourquoi nous avons créé un espace moderne, épuré et accueillant où chaque détail compte. De la température ambiante à l\'agencement des produits, tout est pensé pour votre confort.'
  },
  {
    title: 'Notre différence',
    content: 'Ce qui nous distingue, c\'est notre engagement envers la qualité. Chaque produit est soigneusement sélectionné selon des critères stricts. Nous privilégions les producteurs locaux, les produits frais et les marques  qui partagent nos valeurs d\'excellence et de durabilité.'
  }
]

const values = [
  {
    icon: '🌟',
    title: 'Excellence',
    description: 'Nous ne transigeons jamais sur la qualité de nos produits et de nos services.'
  },
  {
    icon: '💚',
    title: 'Durabilité',
    description: 'Nous privilégions les produits locaux et éco-responsables pour un avenir meilleur.'
  },
  {
    icon: '🤝',
    title: 'Confiance',
    description: 'Nous construisons des relations durables basées sur la transparence et l\'honnêteté.'
  }
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})

useHead({
  title: 'À propos - FRANC-PRIX',
  meta: [
    { name: 'description', content: 'Découvrez l\'histoire et les valeurs de FRANC-PRIX, votre centre commercial .' }
  ]
})
</script>
