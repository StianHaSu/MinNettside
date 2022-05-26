<script setup lang="ts">
    import router from '../router';
</script>
<template>
    <div class="sticky top-0">
      <div class="mx-3 bg-gradient-to-tr from-emerald-400 to-hoved rounded-b-3xl shadow-lg">
        <div class="BannerH">
          <div class="flex justify-between">
            <div>
              <button @click="router.push({ name: 'Hjemskjerm' })"><h1 class="text-left font-mono text-4xl text-white py-2 hover:scale-105 transition ease-in-out">Stian Sundkvist</h1></button>
            </div>
            <div class="MenyKnapper">
              <ul class="flex space-x-6 text-white font-mono text-4xl py-2">
                <li><button @click="router.push({ name: 'Prosjektskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out">prosjekter</button></li>
                <li><button @click="router.push({ name: 'Omskjerm' })" class="hover:underline hover:scale-110 transition ease-in-out">om</button></li>
                <li><button @click="router.push({ name: 'CvSkjerm' })" class="hover:underline hover:scale-110 transition ease-in-out">cv</button></li>
                <li><button @click="router.push({ name: 'Kontaktskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out">kontakt</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.BannerH {
    @apply
    max-w-6xl mx-auto px-3 py-8
}

@media only screen and (max-width: 900px){
    .BannerH {
        @apply
        py-0
    }
}

@media only screen and (max-width: 800px) {
    .MenyKnapper {
        @apply
        hidden
    }
}

@media only screen and (min-width: 1000px) {
    .MenyKnapper {
        @apply
        visible
    }
}
</style>