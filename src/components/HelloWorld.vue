<script setup lang="ts">
import router from '../router/index'
import BannerVue from './Banner.vue';
import Banner from './Banner.vue'
</script>

<template>
  <link rel="stylesheet" href=".src/index.css">
<div>
    <Banner></Banner>
  <div class="info">
    <div >
      <div class="py-2 mx-32 my-14 max-w-xl bg-gradient-to-r from-emerald-300 to-hoved shadow-md shadow-black rounded-2xl">
        <ul>
          <li>
            <h2 class="text-white font-mono py-2 text-3xl underline">Velkommen til min nettside!</h2>
            <ul class="text-xl font-mono">
              <li>
                <h2>1. Bli kjent med prosjektene mine</h2>
                <h2>2. Kontakt meg gjerne for spørsmål</h2>
                <h2>3. Ansett meg</h2>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="BoksTo">
        <ul>
          <li class="my-6"><h1 class="text-white text-3xl font-mono underline">Dette er et pågående prosjekt</h1></li>
          <li ><h2>Dette prosjektet blå påbegynt 23.mai 2022</h2></li>
          <li><h2>Hensikten med denne nettsiden er både å lære <br>
            vue + tailwind, og å vise frem ferdigheter jeg innehar
            innen programmering.
          </h2></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;


.BoksTo {
  @apply
  my-12 mx-32 max-w-xl bg-gradient-to-r
  from-emerald-300 to-hoved
  rounded-2xl text-center
  font-mono text-xl py-2
  shadow-md shadow-black

}

.info {
  @apply
  text-center
}



</style>
