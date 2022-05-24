<script setup lang="ts">
</script>

<template>
    <div class="hoved">
        <h1 class="Overskrift">Om meg</h1>
        <div class ="Text">
            <div class="Avsnitt">
                <p class="flex justify-center">
                    Mitt navn er Stian Hallerud Sundkvist, jeg er 22 år gammel, og bor i Lillestrøm.
                    Jeg studerer Informatikk: programmering og systemarkitektur på Universitetet i Oslo,
                    hvor jeg påbegynte graden min august 2021. Ved siden av studiene, jobber jeg deltid 
                    som alarmoperatør for Sector Alarm.
                </p>
                <p class="flex justify-center my-6">
                    På fritiden er jeg veldig glad i friluftsliv, og trives veldig godt på telttur og fisketurer.
                    Jeg liker å bruke tid med venner og familie, og selvfølgelig å bruke tid på programmering.
                </p>
                <p class="flex justify-end my-6">
                    Videre har jeg forenings-verv i linjeforeningen ProgSys, hvor jeg er arrangementansvarlig, samt 
                    et internverv som promoteringsintern for dagen@ifi - som avholder karrieredager på Instituttet
                    for informatikk. 
                </p>
            </div>
        </div>
    </div>
</template>

<style>

.Overskrift{
    @apply
    font-mono font-bold
    text-white text-4xl
    flex justify-center
    py-12 my-12 mx-24
    bg-gradient-to-b from-emerald-400 to-hoved
    rounded-md shadow-sm shadow-black

    ;
}

.Text{
    @apply
    flex justify-center
    text-white
    py-14 px-14
    text-2xl mx-72
    font-mono
   
}

.hoved {
    @apply
    bg-gradient-to-r from-emerald-400 to-hoved
    rounded-md py-8 mx-32
}

</style>