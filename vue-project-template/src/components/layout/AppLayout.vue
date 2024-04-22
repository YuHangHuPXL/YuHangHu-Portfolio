<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppTopBar from '@/components/app/AppTopBar.vue'
</script>

<template>
  <div class="h-screen">
    <AppTopBar class="h-20 w-full bg-primary" />
    <div class="pb-10">
      <RouterView />

    </div>
  </div>


</template>
