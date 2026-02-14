<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center space-x-2 group">
        <div class="flex items-center gap-3">
          <!-- IMAGE depuis public -->
          <img src="/francprix_logo_.png" alt="Franc Prix logo" class="h-24 w-auto" />
          <!-- TEXTE -->
          <!-- <div
            class="text-3xl font-display font-bold bg-gradient-to-r from-ice-500 to-ice-700 bg-clip-text text-transparent transition-all group-hover:scale-105"
          >FRANCPRIX</div> -->
        </div>
      </NuxtLink>

      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden text-frost-700 hover:text-ice-600 transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!mobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <ul class="hidden md:flex items-center space-x-8">
        <li v-for="item in menuItems" :key="item.path">
          <NuxtLink
            :to="item.path"
            class="relative text-frost-700 hover:text-ice-600 font-medium transition-colors duration-300 group"
            :class="isScrolled ? '' : 'text-white'"
          >
            {{ item.label }}
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-ice-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg animate-slide-down">
      <ul class="flex flex-col space-y-4 p-6">
        <li v-for="item in menuItems" :key="item.path">
          <NuxtLink
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="block text-frost-700 hover:text-ice-600 font-medium transition-colors duration-300"
          >{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useScroll } from "@vueuse/core";

const mobileMenuOpen = ref(false);
const { y } = useScroll(typeof window !== "undefined" ? window : null);
const isScrolled = computed(() => y.value > 50);

const menuItems = [
  { label: "Accueil", path: "/" },
  { label: "Nos produits", path: "/products" },
  { label: "À propos", path: "/about" },
  { label: "Contact", path: "/contact" }
];
</script>
