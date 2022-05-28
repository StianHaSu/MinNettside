<script setup lang="ts">
import { ref } from 'vue'
import Banner from './Banner.vue'
function goToLinkedIn() {
    window.open("https://www.linkedin.com/in/stian-sundkvist", "_blank");
}
function goToGithub(){
    window.open("https://github.com/StianHaSu", "_blank");
}

</script>
<template>
<div>
    <div><banner class="sticky"></banner></div>
    <div class="kontaktInfo">
        <div class="flex justify-center">
            <ul class="SosialeMedier">
                <li class="my-8"><button @click="goToLinkedIn()"><img class="linkedIn" src="../../public/linkedin_logo.png" alt="Lenke til linkedIn profil"/></button></li>
                <li class="my-2"><button @click="goToGithub()"><img class="GitHub" src="../../public/GitHub-Logo.png" alt="Lenke til Github profil"></button></li>
            </ul>
        </div>
        <div class="Kontakt">
             <ul> 
                <li>tlf: 94181370</li>
                <li>e-post: stian.sundkv@gmail.com</li>
            </ul>
        </div>
    </div>
 </div> 

</template>

<style>

.Kontakt {
    @apply
    text-center
}

.kontaktInfo {
    @apply
    font-mono text-5xl 
    bg-testFarge bg-opacity-70
     mx-40 
    py-8 px-12 my-6 
    rounded-2xl
    shadow-sm shadow-black
    text-center
    ;
}

.SosialeMedier {
    @apply
    grid grid-cols-2
    grid-rows-1
    my-12
}

.linkedIn{
    @apply
    w-64
    hover:rotate-2
    ;
}

.GitHub {
    @apply
    w-44
    hover:-rotate-2
    ;
}

@media only screen and (max-width: 1050px) {
    .kontaktInfo {
        @apply
        w-screen
        mx-auto
        my-2 py-2
        
    }

    .Kontakt {
        @apply
        text-xl
    }

    .linkedIn {
        @apply
        my-4 py-4
        mx-4 px-4
    }

    .GitHub {
        @apply
        my-4 py-4
        mx-4 px-4
    }
}


</style>
