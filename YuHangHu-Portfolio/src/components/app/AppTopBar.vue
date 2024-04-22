<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'
import { AppIconButton } from '@wisemen/vue-core'

import AppTypedRouterLink from '@/components/app/link/AppTypedRouterLink.vue'
import type { Routes } from '@/routes/routes.ts'
import type { RouteLocationTyped } from '@/types/router/router.type.ts'

interface TabWithRoutes {
	label: string
	to: RouteLocationTyped<keyof Routes>
}

const tabs: TabWithRoutes[] = [
	{
		label: 'Home',
		to: { name: 'home' },
	},
	{
		label: 'Activiteiten',
		to: { name: 'activities' },
	},
	{
		label: 'Over mij',
		to: { name: 'about' },
	},
	{
		label: 'DDD',
		to: { name: 'ddd' },
	},
	{
		label: 'Info Support Student Event',
		to: { name: 'infosupport-event' },
	},
	{
		label: 'CodeBash',
		to: { name: 'codebash' },
	},
	{
		label: 'Projectweek 2TIN',
		to: { name: 'project-week' },
	},
]

function onLinkedInClick(): void {
	window.location.replace('https://www.linkedin.com/in/yuhanghupxl/')
}
</script>

<template>
	<div class="flex items-center justify-between px-5">
		<AppText class="text-white">Yu Hang</AppText>
		<div class="flex items-center justify-center gap-x-3">
			<AppTypedRouterLink
				:to="{
					name: 'home',
				}"
			/>
			<AppTypedRouterLink
				v-for="tab in tabs"
				:key="tab.label"
				v-slot="{ isActive }"
				:to="tab.to"
			>
				<AppText
					class="text-white"
					variant="body"
				>
					{{ tab.label }}
				</AppText>
			</AppTypedRouterLink>
		</div>
		<AppIconButton
			:icon="'linkedIn'"
			variant="default"
			@click="onLinkedInClick"
		/>
	</div>
</template>
