<script lang="ts">
        export default {
        methods: {
            visMobilMeny() {
                var dropD = Array.from(document.getElementsByClassName('MobilValg') as HTMLCollectionOf<HTMLElement>)[0];
                var hoved = Array.from(document.getElementsByClassName('HovedBanner') as HTMLCollectionOf<HTMLElement>)[0];
                if (window.getComputedStyle(dropD).display === "none") {
                    dropD.setAttribute("style", "visibility: visible");
                    dropD.setAttribute("style", "display: inline");
                    hoved.setAttribute("style", "border-bottom-width: 1px");
                    
                } else {
                    dropD.setAttribute("style", "visibility: invisible");
                    dropD.setAttribute("style", "display: none");
                    hoved.setAttribute("style", "border-bottom-width: 0px");
                }
            },
        },
    };
</script>
<template>
    <div class="sticky top-0 mb-2">
      <div class="mx-3 bg-bannerFarge rounded-b-3xl shadow-lg">
        <div class="BannerH">
          <div class="HovedBanner">
            <div>
              <button @click="$router.push({ name: 'Hjemskjerm' })"><h1 class=" ml-6 text-left font-mono text-4xl py-2  hover:scale-105 transition ease-in-out">Stian Sundkvist</h1></button>
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
              <ul class="text-white text-bold font-mono text-lg py-2">
                <div class="border-b-2 w-4/5 mx-auto py-2 pt-8"><li><button @click="$router.push({ name: 'Prosjektskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out text-2xl">prosjekter</button></li></div>
                <div class="border-b-2 w-4/5 mx-auto py-2"><li><button @click="$router.push({ name: 'Kontaktskjerm' })" class="hover:underline hover:scale-105 transition ease-in-out text-2xl">kontakt</button></li></div>
                <div class="border-b-2 w-4/5 mx-auto py-2"><li><button @click="$router.push({ name: 'Omskjerm' })" class="hover:underline hover:scale-110 transition ease-in-out text-2xl">om</button></li></div>
                <div class="border-b-2 w-4/5 mx-auto py-2"><li><button @click="$router.push({ name: 'CvSkjerm' })" class="hover:underline hover:scale-110 transition ease-in-out text-2xl">cv</button></li></div>
                <div class="pb-4"></div>
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
    text-white
}

.MobilValg {
    @apply
    hidden
    bg-bannerFarge
    shadow-md
    rounded-3xl
    py-12
    text-center
    mr-6
}

.HovedBanner {
    @apply
    flex justify-between
}

.MobilMeny {
    @apply
    text-3xl
    font-sans
    font-bold
    text-white
    mr-12
    rotate-[90deg]
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
