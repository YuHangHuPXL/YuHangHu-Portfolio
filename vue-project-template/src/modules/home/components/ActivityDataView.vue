<script setup lang="ts">
import { AppIcon, AppText } from '@wisemen/vue-core'

const props = defineProps<{
	title: string
	description: string
	date: string
	location: string
}>()
</script>

<template>
	<div class="flex flex-col gap-y-2 p-4 shadow-2xl">
		<AppText
			class="text-center"
			variant="title"
			>{{ props.title }}</AppText
		>
		<div class="flex items-start gap-x-1">
			<AppIcon icon="info" />

			<AppText variant="subtext">{{ props.description }}</AppText>
		</div>

		<div class="flex items-center gap-x-1">
			<AppIcon icon="calendar" />
			<AppText variant="caption">{{ props.date }}</AppText>
		</div>
		<div class="flex items-center gap-x-1">
			<AppIcon icon="building" />
			<AppText variant="caption">{{ props.location }}</AppText>
		</div>
	</div>
</template>
