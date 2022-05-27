<script setup lang="ts">
function goToGithub(){
    window.open("https://github.com/StianHaSu/MinNettside", "_blank");
}
</script>
<template>
    <div class="Prosjekter">
        <ul class="Pictures">
            <div class="KrukkeDiv">
                <li id ="BildeKrukke" class="w-1/3 my-10"><img class="rounded-2xl ring-hoved shadow-lg shadow-black" src="../../public/prosjektTo.png" alt="Prosjekt to"></li>
                <li id="InfoKrukke" class="float-right -my-72 mx-30 bg-gradient-to-b from-emerald-400 to-hoved rounded-lg px-8 py-8 shadow-md shadow-black">
                    <h1 class="flex justify-center font-mono font-bold text-3xl text-white underline ">Tell pins i krukken</h1>
                    <p class=" font-mono text-lg font-bold text-white">
                        Dette prosjektet utviklet jeg for ettermiddagen@ifi, som er en karrieredag<br>
                        som gjennomføres hvert år på høstsemesteret. Jeg lagde et svarprogram for å<br>
                        avgi svar til konkurransene vi avholdt på standen vår. Prosjektet er laget <br>
                        utelukkende i java, med pruk av Swing og awt, og er designet i Canva.
                    </p>
                </li>
            </div>
            <div class="GraaDiv">
                <li id="GraaBilde" class="w-1/3 float-right my-14"><img class="rounded-2xl ring-2 ring-hoved shadow-lg shadow-black" src="../../public/prosjektEn.png" alt="Prosjekt en"></li>
                <li id="GraaInfo" class="float-left my-28 mx-30 bg-gradient-to-t from-emerald-400 to-hoved rounded-lg px-8 py-8 shadow-md shadow-black">
                     <h1 class=" flex justify-center font-mono font-bold text-3xl text-white underline ">Finn de grå</h1>
                     <p class="font-mono text-lg font-bold text-white">
                        Dette prosjektet er nesten en kopi av prosjektet over, og ble også laget for<br>
                        konkurransene vi avholdt på karrieredagen ettermiddagen@ifi. <br>
                        Begge disse ble tatt i bruk under karrierredagen og dette er i likhet med <br>
                        det forrige også utviklet i java.
                     </p>
                 </li>
            </div>
            <div class="ZombieDiv">
                <li id="BildeZombie" class="w-1/3"> <img class="rounded-2xl ring-2 ring-hoved shadow-lg shadow-black" src="../../public/prosjektTre.png"> </li>
                <li id="InfoZombie" class="float-right -my-[375px] mx-30 bg-gradient-to-t from-emerald-400 to-hoved rounded-lg px-8 py-8 shadow-md shadow-black">
                    <h1 class="flex justify-center font-mono font-bold text-3xl text-white underline ">Zombie Rows</h1>
                    <p class="font-mono text-lg font-bold text-white">
                        Dette er en pågående prosjekt jeg jobber med i java. Zombie Rows er et spill <br>
                        hvor man bruker tastene 1,2,3,4 og 5 for å skyte rutene som kommer mot deg. <br>
                        Man kan bruke opp og ned tastene for å bytte mellom å bruke "kanon" og <br>
                        "shotgun". Våpnene kan oppgraderes for å gjøre mer skade, og det er <br>
                        "zombier" med forskjellige egenskaper: noen raske, noen kraftige og noen <br>
                        som splittes til flere zombier når de dør.
                    </p>
                </li>
            </div>
            <li class ="Nettside">
                <h1 class="text-4xl static text-center underline">Denne nettsiden!</h1>
                <p class="text-lg static text-center">
                    Denne nettsiden er et pågående prosjekt jeg påstartet 23.mai 2022 for å
                    lære meg rammeverket Vue 3 og tailwind. Verktøyene som blir tatt i bruk
                    for å lage denne nettsiden er: <br> <br>
                    <scoped class="text-black my-8">
                    Vue js 3 <br>
                    tailwindcss <br>
                    Vite <br>
                    Typescript <br>
                    Github <br>
                    </scoped> <br>

                    Besøk gjern <button class="KnappGH" @click="goToGithub()">Github</button> profilen min for å se kildekoden til denne
                    nettsiden!
                </p>
            </li>
            <li>
                <APPLET 
                    archive="./Spill_java.jar"
                    code="Spill_java.MainSpill.class">
                </APPLET>
            </li>
        </ul>
    </div>
</template>

<style>
.Pictures {
    @apply
    px-6
    py-20
    ;
}

.Nettside {
    @apply
    space-y-10
    font-mono font-bold text-white
    my-32 bg-gradient-to-b from-emerald-400 to-hoved rounded-lg 
    px-8 py-8 shadow-md shadow-black
    mx-6
}

.KnappGH {
    @apply
    font-bold font-mono text-lg
    hover:scale-105 

}

@media only screen and (max-width: 1400px) {
    .Prosjekter {
        @apply
        flex justify-center
        overflow-x-hidden
    }

    .Pictures {
        @apply
        grid-rows-6
        grid-cols-1
    }

    #BildeKrukke {
        @apply
        my-0 mx-0
        w-screen
        py-0

    }

    #InfoKrukke {
        @apply
        my-0 mx-0
        py-2 
        w-screen
        text-center

    }

    .KrukkeDiv {
        @apply
        grid grid-rows-1
        my-8
    }

    #GraaBilde {
        @apply
        flex-none
        my-0 mx-0
        w-screen

    }

    #GraaInfo {
        @apply
        float-none
        my-0 mx-0
        py-2 
        w-screen
        text-center

    }

    .GraaDiv {
        @apply
        grid grid-rows-1
        grid-flow-row-dense
        my-8
    }

    #BildeZombie {
        @apply
        flex-none
        my-0 mx-0
        w-screen
    }

    #InfoZombie {
        @apply
        float-none
        my-0 mx-0
        py-2 
        w-screen
        text-center
    }

    .ZombieDiv {
        @apply
        grid grid-rows-1
        grid-flow-row-dense
        my-8
    }

}

</style>