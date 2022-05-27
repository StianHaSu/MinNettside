<script lang="ts">
        export default {
        methods: {
            visMobilMeny() {
                const dropD = Array.from(document.getElementsByClassName('MobilValg') as HTMLCollectionOf<HTMLElement>)[0];
                if (window.getComputedStyle(dropD).display === "none") {
                    dropD.setAttribute("style", "visibility: visible");
                    dropD.setAttribute("style", "display: inline");
                } else {
                    dropD.setAttribute("style", "visibility: invisible");
                    dropD.setAttribute("style", "display: none");
                }
            },
        },
    };
</script>
<template>
    <div class="sticky top-0">
      <div class="mx-3 bg-gradient-to-tr from-emerald-400 to-hoved rounded-b-3xl shadow-lg">
        <div class="BannerH">
          <div class="flex justify-between">
            <div>
              <button @click="$router.push({ name: 'Hjemskjerm' })"><h1 class="text-left font-mono text-4xl text-white py-2 hover:scale-105 transition ease-in-out">Stian Sundkvist</h1></button>
            </div>
            <div class="MenyKnapper">
              <ul class="flex space-x-6 text-white font-mono text-4xl py-2">
                <li><button @click="$router.push({ name: 'Prosjektskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out">prosjekter</button></li>
                <li><button @click="$router.push({ name: 'Omskjerm' })" class="hover:underline hover:scale-110 transition ease-in-out">om</button></li>
                <li><button @click="$router.push({ name: 'CvSkjerm' })" class="hover:underline hover:scale-110 transition ease-in-out">cv</button></li>
                <li><button @click="$router.push({ name: 'Kontaktskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out">kontakt</button></li>
              </ul>
            </div>
            <div class="MobilMeny">
                <div>
                    <button @click="visMobilMeny()"><h1 class="KnappTest">|||</h1></button>
                </div>
            </div>
          </div>
          <div class="MobilValg">
              <ul class="grid grid-rows-4 text-white text-bold font-mono text-lg py-2">
                <li><button @click="$router.push({ name: 'Prosjektskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out">prosjekter</button></li>
                <li><button @click="$router.push({ name: 'Omskjerm' })" class="hover:underline hover:scale-110 transition ease-in-out">om</button></li>
                <li><button @click="$router.push({ name: 'CvSkjerm' })" class="hover:underline hover:scale-110 transition ease-in-out">cv</button></li>
                <li><button @click="$router.push({ name: 'Kontaktskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out">kontakt</button></li>
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

.BannerH {
    @apply
    max-w-6xl mx-auto px-3 py-8
}

.MobilValg {
    @apply
    hidden
    bg-gradient-to-b
    from-emerald-400
    to-hoved
    shadow-md
    rounded-3xl
    float-right
    py-32
    w-3/4
    text-center


}

.MobilMeny {
    @apply
    text-3xl
    font-sans
    font-bold
    text-white
    mx-20 rotate-[90deg]
    hover:scale-110
}

.DropDown {
    @apply
    grid grid-rows-4

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

    .MobilMeny {
        @apply
        visible
    }
}



@media only screen and (min-width: 1000px) {
    .MenyKnapper {
        @apply
        visible
    }

    .MobilMeny {
        @apply
        hidden
    }
}

@media only screen and (min-width: 800px) {
    .MobilMeny {
        @apply
        hidden
    }
    
}

</style>
