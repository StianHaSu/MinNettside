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
<div class ="">
    <div><banner class="sticky"></banner></div>
    <div class="kontaktInfo">
        <div>
            <ul class="flex justify-center space-x-12 my-36">
                <li class="my-10"><button @click="goToLinkedIn()"><img class="linkedIn" src="../../public/linkedin_logo.png" alt="Lenke til linkedIn profil"/></button></li>
                <li class="my-2"><button @click="goToGithub()"><img class="GitHub" src="../../public/GitHub-Logo.png" alt="Lenke til Github profil"></button></li>
            </ul>
        </div>
        <div>
             <ul class="py-12"> 
                <li>tlf: 94181370</li>
                <li>e-post: stian.sundkv@gmail.com</li>
            </ul>
        </div>
    </div>
 </div> 

</template>

<style>
.kontaktInfo {
    @apply
    font-mono text-5xl 
    bg-gradient-to-b from-emerald-300 to-hoved mx-40 
    py-8 px-28 my-6 
    rounded-2xl border-emerald-200
    shadow-lg shadow-black
    space-y-4 text-center
    ;
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


</style>
