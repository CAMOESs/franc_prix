<template>
  <div class="min-h-screen">
    <section class="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Contact"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-frost-900/80 to-frost-900/60"></div>
      </div>

      <div class="relative z-10 text-center px-4">
        <h1
          class="text-5xl md:text-7xl font-display font-bold text-white mb-4 animate-fade-in"
        >Contactez-nous</h1>
        <p class="text-xl text-frost-100 animate-slide-up">Nous sommes à votre écoute</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div class="space-y-8">
            <div>
              <h2
                class="text-3xl md:text-4xl font-display font-bold text-frost-900 mb-6"
              >Envoyez-nous un message</h2>
              <p
                class="text-frost-600 mb-8"
              >Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <label for="name" class="block text-sm font-medium text-frost-700">Nom complet</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-frost-300 focus:border-ice-500 focus:ring-2 focus:ring-ice-200 transition-all outline-none"
                  placeholder="Jean Dupont"
                />
              </div>

              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-frost-700">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-frost-300 focus:border-ice-500 focus:ring-2 focus:ring-ice-200 transition-all outline-none"
                  placeholder="jean.dupont@example.com"
                />
              </div>

              <div class="space-y-2">
                <label for="phone" class="block text-sm font-medium text-frost-700">Téléphone</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg border border-frost-300 focus:border-ice-500 focus:ring-2 focus:ring-ice-200 transition-all outline-none"
                  placeholder="2290194961604"
                />
              </div>

              <div class="space-y-2">
                <label for="subject" class="block text-sm font-medium text-frost-700">Sujet</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-frost-300 focus:border-ice-500 focus:ring-2 focus:ring-ice-200 transition-all outline-none"
                  placeholder="Demande d'information"
                />
              </div>

              <div class="space-y-2">
                <label for="message" class="block text-sm font-medium text-frost-700">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 rounded-lg border border-frost-300 focus:border-ice-500 focus:ring-2 focus:ring-ice-200 transition-all outline-none resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-8 py-4 bg-gradient-to-r from-ice-500 to-ice-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >Envoyer le message</button>

              <p
                v-if="submitted"
                class="text-green-600 text-center font-medium"
              >Merci ! Votre message a été envoyé avec succès.</p>
            </form>
          </div>

          <div class="space-y-8">
            <div>
              <h3
                class="text-2xl font-display font-bold text-frost-900 mb-6"
              >Informations de contact</h3>

              <div class="space-y-6">
                <div
                  v-for="(info, index) in contactInfo"
                  :key="index"
                  class="flex items-start space-x-4 p-4 rounded-lg hover:bg-frost-50 transition-colors"
                >
                  <div
                    class="w-12 h-12 rounded-full bg-gradient-to-br from-ice-400 to-ice-600 flex items-center justify-center text-white flex-shrink-0"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        :d="info.icon"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-frost-900 mb-1">{{ info.title }}</h4>
                    <p class="text-frost-600">{{ info.content }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-frost-50 to-frost-100 rounded-2xl p-8">
              <h3 class="text-2xl font-display font-bold text-frost-900 mb-4">Horaires d'ouverture</h3>
              <div class="space-y-3">
                <div
                  v-for="(schedule, index) in openingHours"
                  :key="index"
                  class="flex justify-between items-center"
                >
                  <span class="text-frost-700 font-medium">{{ schedule.day }}</span>
                  <span class="text-frost-600">{{ schedule.hours }}</span>
                </div>
              </div>
            </div>

            <div class="rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps?q=Cotonou,Benin&output=embed"
                width="100%"
                height="100%"
                style="border:0;"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-b from-frost-50 to-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="text-3xl md:text-4xl font-display font-bold text-frost-900 mb-6"
          >Besoin d'aide immédiate ?</h2>
          <p
            class="text-lg text-frost-600 mb-8"
          >Notre équipe est disponible pour répondre à toutes vos questions</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2290194961604"
              class="px-8 py-4 bg-gradient-to-r from-ice-500 to-ice-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            >Appelez-nous</a>
            <a
              href="mailto:contact@francprix.fr"
              class="px-8 py-4 bg-white text-ice-600 border-2 border-ice-500 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-ice-50 hover:scale-105"
            >Envoyez un email</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
});

const submitted = ref(false);

const contactInfo = [
  {
    title: "Adresse",
    content: "123 Avenue des Glaces, 75001 Cotonou, Benin",
    icon:
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    title: "Téléphone",
    content: "2290194961604",
    icon:
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
  },
  {
    title: "Email",
    content: "contact@francprix.fr",
    icon:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  }
];

const openingHours = [
  { day: "Lundi - Dimanche", hours: "8h00 - 23h00" },
  // { day: "Samedi", hours: "9h00 - 21h00" },
  // { day: "Dimanche", hours: "10h00 - 19h00" }
];

const handleSubmit = () => {
  submitted.value = true;
  setTimeout(() => {
    form.value = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    };
    submitted.value = false;
  }, 3000);
};

useHead({
  title: "Contact - FREEZE",
  meta: [
    {
      name: "description",
      content:
        "Contactez FREEZE pour toutes vos questions. Notre équipe est à votre écoute."
    }
  ]
});
</script>
