<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

const props = defineProps<{
	title: string
	description: string
	date: string
	location: string
}>()
</script>

<template>
	<AppText variant="title">{{ props.title }}</AppText>
	<AppText variant="subtext">{{ props.description }}</AppText>
	<AppText variant="caption">{{ props.date }}</AppText>
	<AppText variant="caption">{{ props.location }}</AppText>
</template>
