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
    <div class="Posisjon">
      <div class="BoksEn">
        <ul>
          <li>
            <h2 class="font-mono text-center font-bold py-2 text-3xl underline">Velkommen til min nettside!</h2>
            <ul class="text-xl text-center font-mono font bold">
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
          <li class="my-6"><h1 class="text-3xl font-bold font-mono underline">Dette er et pågående prosjekt</h1></li>
          <li ><h2>Dette prosjektet ble påbegynt 23.mai 2022</h2></li>
          <li><h2>Hensikten med denne nettsiden er både å lære <br>
            vue + tailwind, og å vise frem ferdigheter jeg innehar
            innen programmering.
          </h2></li>
        </ul>
      </div>
      <div class="Portrett">
          <img class="BildeSrc" src="../../public/meg.jpeg">
      </div>
    </div>
  </div>
</div>
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;


.BoksEn {
  @apply
  py-8 mx-32 my-14 max-w-xl text-center
  bg-green-200
  shadow-sm shadow-black rounded-2xl
  bg-opacity-70
}

.BoksTo {
  @apply
  my-12 mx-32 max-w-xl 
  py-6
  bg-testFarge
  bg-opacity-75
  px-4
  rounded-2xl text-center
  font-mono text-xl 
  shadow-sm shadow-black

}

.Portrett {
    @apply 
    float-right mx-32 -my-72 
    py-2 px-2 rounded-lg 
    bg-green-200
    hover:animate-pulse shadow-2xl shadow-emerald-600
    
}

.info {
  @apply
  text-center
}

@media only screen and (max-width: 1100px){
    .info {
      @apply
      flex justify-center w-screen
      mx-0 px-2
    }
  
    .BoksEn {
      @apply
      w-screen mx-8 
      flex justify-start
      px-2 
    }
    .BoksTo {
      @apply
      flex justify-center
      mx-8
      px-2 w-screen
    }

    .Portrett {
      @apply
      py-1 px-1
      my-0 
    }
     
}

</style>
