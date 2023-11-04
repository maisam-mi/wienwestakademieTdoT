<template>
  <div class="text-white">
    <!-- <NavbarComp></NavbarComp> -->
    <RouterView />
  </div>
</template>
<script setup>
import NavbarComp from '@/components/NavbarComp.vue';
import { RouterView } from 'vue-router';
</script>
<style>
@font-face {
  font-family: jetbrainsMono-regular;
  src: url(./assets/fonts/jetbrainsMonoFont/JetbrainsMonoRegular-RpvmM.ttf);
}
@font-face {
  font-family: jetbrainsMono-bold;
  src: url(./assets/fonts/jetbrainsMonoFont/JetbrainsMonoBold-51Xez.ttf);
}
</style>