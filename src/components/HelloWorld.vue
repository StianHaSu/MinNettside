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
    <div class=" mx-32 my-32 w-2/5 h-56 bg-gradient-to-r from-emerald-200 to-hoved shadow-xl shadow-emerald-700 rounded-2xl">
      <div>
        <ul>
          <li>
            <h2 class="text-white text-center font-mono py-8 text-2xl underline">Velkommen til min nettside!</h2>
            <ul class="text-center text-white text-xl font-mono">
              <li>
                <h2>Bli kjent med prosjektene mine</h2>
                <h2>Kontakt meg gjerne for spørsmål</h2>
                <h2>Ansett meg</h2>
              </li>
            </ul>
          </li>
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


label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
