<script setup lang="ts">
</script>

<template>
    <div class="CvHoved">
        <h1 class="OverskriftCv">CV</h1>
        <div class="Innhold">  
            <div class="Logoer">
                <div class="Sector">
                    <div id ="SectorBilde"><img src="../../public/secto-logo.webp" alt="Sector Alarm logo"></div>
                    <div class="SectorTekst">
                        <p class="my-8">
                            august 2021 <br> - nå
                        </p>
                        <p class="text-sm">
                            Jeg jobber for tiden som alarmoperatør for Sector Alarm, hvor
                            jeg ringer ut på alarmsignaler som vi får inn på alarmsentralen
                            fra kunder overalt i Norge.
                        </p>
                    </div> 
                </div>
                <div class="Forsvaret">   
                    <img id="ForsvarBilde" src="../../public/forsvaret-logo.png" alt="Forsvarets logo"> 
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
                    <img id="KiwiBilde" src="../../public/logo-kiwi.png" alt="KIWI minipris logo"> 
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

.Innhold {
    @apply
    flex justify-center
}

.Logoer {
    @apply
    grid grid-rows-1 mx-72
    grid-cols-1
    py-2 bg-gradient-to-r from-emerald-300 to-hoved
    rounded-2xl
    
}

.Sector {
    @apply
    my-2 font-mono font-bold
    text-2xl mx-72
}

.Forsvaret {
    @apply
    my-2 font-mono font-bold
    text-2xl mx-72
    
}

.Kiwi {
    @apply
    mx-72 my-8 
    font-mono font-bold
    text-2xl

}

@media only screen and (max-width: 1000px) {
    .Logoer {
        @apply
        w-screen
        mx-2
        px-8
        py-2
        my-8
    }

    .Sector {
        @apply
        px-4
        mx-8
        my-5
        py-2
    }

    .Kiwi {
        @apply
        mx-8
        px-4
        my-5
        py-2

    }

    .Forsvaret {
        @apply
        mx-8
        px-4
        my-5
        py-2
    }

    #SectorBilde {
        @apply
        w-1/2
        flex self-center
    }

    #ForsvarBilde {
        @apply
        w-1/2
    }

    #KiwiBilde {
        @apply
        w-1/2
    }

}

</style>