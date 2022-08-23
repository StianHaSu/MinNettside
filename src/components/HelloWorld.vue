<script setup lang="ts">
import router from '../router/index'
import Banner from './Banner.vue'

methods: {
  var bildeArray = ["en","to","tre"];
  var counter = 0;

  function nesteBilde () {
    var bilde = bildeArray[counter];
    if (counter === 0) {
      var forrige = bildeArray[2];
    } else {var forrige = bildeArray[counter-1];}

    var skalFjernes = document.getElementById(forrige) as HTMLDivElement;
    var skalVises = document.getElementById(bilde) as HTMLDivElement;
    
    skalFjernes.setAttribute("style", "display: none; ");

    skalVises.setAttribute("style", "display: inline;");
    
    if (counter < 2) counter++;
    else counter = 0;
    
  }
    
  var theRunner = setInterval( function(){
    nesteBilde();
  }, 5000);

  theRunner
}


</script>

<template>
  <link rel="stylesheet" href=".src/index.css">
<div>
  <div class="info">
    <div class="Bilde"><img src="../../public/Slange.png" alt=""></div>
    <div class="PosisjonTo">
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
    </div>
  </div>
</div>
</template>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;


.Bilde{
  @apply
  mx-auto
  h-3/5
  w-3/5
}

.Karusell {
  @apply
  w-8
  my-20
  mx-auto
}


.BoksEn {
  @apply
  mb-8
  py-8 mx-32 my-14 max-w-xl text-center
  bg-boksFargeEn
  shadow-black rounded-2xl
  bg-opacity-60 
  
}

.BoksTo {
  @apply

  my-12 mx-32 max-w-xl 
  py-6
  bg-boksFargeTo
  bg-opacity-50
  px-4
  rounded-2xl text-center
  font-mono text-xl 
 shadow-black

}



@media only screen and (max-width: 1100px){
    .info {
      @apply
      grid-cols-11
      grid-rows-5
      w-screen
      mx-0 px-2
      mt-8
    }

    .PosisjonTo {
      @apply
      row-start-3
      row-span-2
      col-start-2
      col-span-9

    }

    .BoksEn {
      @apply
      w-auto mx-8 
      float-none
      px-2 my-2
    }
    .BoksTo {
      @apply
      float-none
      mx-8 my-2
      px-2 w-auto
    }

    .Karusell {
      @apply
      col-span-6
      row-span-1
      col-start-3
      row-start-1
      py-1 px-1
      my-0
      mx-0
      w-full
      ml-8
    }

    #bildeEn {
      @apply
      w-3/6
      h-4/6

    }

    #bildeTo {
      @apply
      w-3/6
      h-4/6

    }

    #bildeTre {
      @apply
      w-3/6
      h-4/6
      

    }
     
}

</style>
