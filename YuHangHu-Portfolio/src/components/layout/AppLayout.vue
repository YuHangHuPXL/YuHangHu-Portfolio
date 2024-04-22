<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppTopBar from '@/components/app/AppTopBar.vue'
</script>

<template>
	<AppTopBar class="h-20 w-full bg-primary" />
	<RouterView />
</template>
