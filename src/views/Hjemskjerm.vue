<script setup lang="ts">
    import HelloWorld from '../components/HelloWorld.vue'
</script>
<template>
    <div>
        <HelloWorld></HelloWorld>
    </div>
    <div class="Bilde">
        <div class="Portrett">
            <img src="../../public/meg.jpeg">
        </div>
        <div>
            <div class="RundingEn"></div>
        </div>
    </div>

</template>

<style>

.Portrett {
    @apply 
    float-right mx-32 -my-44
    bg-gradient-to-r from-blue-400 via-emerald-300 to-hoved
    py-2 px-2 rounded-lg border-separate border-4 border-emerald-200
    hover:scale-150 transition hover:rotate-[10800deg] duration-[800ms]
}

</style>