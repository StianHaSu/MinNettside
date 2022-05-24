<script setup lang="ts">
</script>

<template>
    <div class="CvHoved">
        <h1 class="OverskriftCv">CV</h1>
        <div class="Logoer">
            <div class="Sector">
                <img src="../../public/secto-logo.webp" alt="Sector Alarm logo">
                <p class="my-8">
                    august 2021 <br> - nå
                </p>
                <p class="text-sm">
                    Jeg jobber for tiden som alarmoperatør for Sector Alarm, hvor
                    jeg ringer ut på alarmsignaler som vi får inn på alarmsentralen
                    fra kunder overalt i Norge.
                </p> 
            </div>
            <div class="Forsvaret">   
                <img src="../../public/forsvaret-logo.png" alt="Forsvarets logo"> 
                <p class="my-8">
                    januar 2020 <br> - juni 2021 
                </p>
                <p class="text-sm">
                    Jeg gjennomførte 18 mnd. førstegangstjeneste i hæren, som 
                    hundefører i militærpolitikompaniet, stasjoner i Bardufoss.
                    Under tjenesteperioden gjennomførte jeg en rekke oppdrag med 
                    tjenestehunden min på øvelser i Indre Troms. Mye av den daglige
                    tjenesten gikk ut på hundetrening og patruljetjeneste. Jeg ble 
                    også sammen med tjenestehunden min godkjent som lavineekvipasje.
                </p>
            </div>
            <div class="Kiwi">
                <img src="../../public/logo-kiwi.png" alt="KIWI minipris logo"> 
                <p class="my-8">
                    september 2015 <br> - januar 2020
                </p>
                <p class="text-sm">
                    Jeg begynte å jobbe i KIWI da jeg var 15 år gammel, hvor jeg begynte
                    med å arbeide med varepåfylling og kundehåndtering. Da jeg fylte 18 år
                    fikk jeg også kasseansvar. Noen måneder senere fikk jeg låseansvarlig 
                    og hadde da ansvar for butikken i butikksjef og assisterende butikksjefs
                    fravær. Jeg fikk her viktig erfaring fra både oppgavedelegering og kundehåndtering. 

                </p>
            </div>
        </div>
    </div>
</template>

<style>

.OverskriftCv {
    @apply
    text-8xl font-mono font-extrabold
    text-transparent bg-clip-text
    bg-gradient-to-tr from-gray-500 via-emerald-400 to-hoved
}

.CvHoved{
    @apply
    text-center my-20
}

.Logoer {
    @apply
    space-y-24 mx-72
    py-10 bg-gradient-to-r from-emerald-300 to-hoved
    rounded-2xl w-3/5
    
}

.Sector {
    @apply
    my-8 font-mono font-bold
    text-2xl mx-72
}

.Forsvaret {
    @apply
    my-20 font-mono font-bold
    text-2xl mx-72
    
}

.Kiwi {
    @apply
    mx-72 my-8 
    font-mono font-bold
    text-2xl

}

</style>