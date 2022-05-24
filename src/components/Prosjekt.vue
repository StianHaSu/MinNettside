<script setup lang="ts">

</script>
<template>
    <div>
        <ul class="Pictures">
            <li class="w-1/3 my-10"><img class="rounded-2xl ring-2 ring-hoved shadow-lg shadow-black" src="../../public/prosjektTo.png" alt="Prosjekt to"></li>
            <li class="float-right -my-72 mx-30 bg-gradient-to-b from-emerald-400 to-hoved rounded-lg px-8 py-8 shadow-md shadow-black">
                <h1 class="flex justify-center font-mono font-bold text-3xl text-white underline ">Tell pins i krukken</h1>
                <p class=" font-mono text-lg font-bold text-white">
                    Dette prosjektet utviklet jeg for ettermiddagen@ifi, som er en karrieredag<br>
                    som gjennomføres hvert år på høstsemesteret. Jeg lagde et svarprogram for å<br>
                    avgi svar til konkurransene vi avholdt på standen vår. Prosjektet er laget <br>
                    utelukkende i java, med pruk av Swing og awt, og er designet i Canva.
                </p>
            </li>
            <li class="w-1/3 float-right my-14"><img class="rounded-2xl ring-2 ring-hoved shadow-lg shadow-black" src="../../public/prosjektEn.png" alt="Prosjekt en"></li>
             <li class="float-left my-28 mx-30 bg-gradient-to-t from-emerald-400 to-hoved rounded-lg px-8 py-8 shadow-md shadow-black">
                 <h1 class=" flex justify-center font-mono font-bold text-3xl text-white underline ">Finn de grå</h1>
                 <p class="font-mono text-lg font-bold text-white">
                    Dette prosjektet er nesten en kopi av prosjektet over, og ble også laget for<br>
                    konkurransene vi avholdt på karrieredagen ettermiddagen@ifi. <br>
                    Begge disse ble tatt i bruk under karrierredagen og dette er i likhet med <br>
                    det forrige også utviklet i java.
                 </p>
             </li>
            <li class="w-1/3"> <img class="rounded-2xl ring-2 ring-hoved shadow-lg shadow-black" src="../../public/prosjektTre.png"> </li>
            <li class="float-right -my-[375px] mx-30 bg-gradient-to-t from-emerald-400 to-hoved rounded-lg px-8 py-8 shadow-md shadow-black">
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
</style>