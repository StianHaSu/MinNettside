<script setup lang="ts">
</script>

<template>
    <div class="hoved">
        <h1 class="Overskrift">Om meg</h1>
        <div class ="Text">
            <div class="Avsnitt">
                <p class="flex justify-center">
                    Mitt navn er Stian Hallerud Sundkvist, jeg er 22 år gammel, og bor i Oslo.
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
    font-mono font-extrabold
    text-center
    text-white text-8xl
    mx-24 my-4
    text-transparent bg-clip-text
    bg-gradient-to-tr
    from-gray-500 via-emerald-400 to-hoved
    
}

.Text{
    @apply
    flex justify-center
    py-14 px-14
    text-2xl 
    font-mono
    bg-gradient-to-r from-emerald-300 to-hoved
    rounded-md mx-72 
   
}

.Avsnitt {
    @apply
    mx-32
}

.hoved {
    @apply
    my-20
}

@media only screen and (max-width: 1100px) {
    .Hoved {
        @apply
        flex 
        justify-center
        mx-2
    }
    .Text {
        @apply
        text-center
        my-2 mx-2
        rounded-3xl
        w-screen
    }
}

@media only screen and (max-width: 850px) {
    .Avsnitt {
        @apply
        text-sm
        px-4
        mx-2
        my-2
    }
    
    .Text {
        @apply
        py-4
        my-2
        px-2
    }

    .Overskrift {
        @apply
        text-3xl
        mx-2
        my-4
    }
}

</style>