<script setup lang="ts">
import type { BreadcrumbItem } from '@wisemen/vue-core'
import { AppBreadcrumbs, AppContainer, AppText } from '@wisemen/vue-core'

const props = withDefaults(
	defineProps<{
		breadcrumbs?: BreadcrumbItem[] | null
		subtitle?: string | null
		title: string
	}>(),
	{
		breadcrumbs: null,
		subtitle: null,
	}
)
</script>

<template>
	<div class="flex w-full flex-1 flex-col bg-background">
		<AppContainer class="py-10">
			<AppBreadcrumbs
				v-if="props.breadcrumbs !== null"
				class="mb-1"
				:items="props.breadcrumbs"
			/>

			<div class="flex items-center justify-between">
				<div class="mx-auto space-y-2">
					<AppText
						class="text-6xl underline underline-offset-8"
						variant="title"
					>
						{{ props.title }}
					</AppText>

					<AppText
						v-if="props.subtitle !== null"
						variant="subtitle"
					>
						{{ props.subtitle }}
					</AppText>
				</div>

				<div
					id="header-actions"
					class="flex items-center justify-end gap-4"
				>
					<slot name="header-actions" />
				</div>
			</div>
		</AppContainer>
		<AppContainer class="flex flex-1 flex-col content-center overflow-hidden pb-8 pt-6">
			<slot />
		</AppContainer>
	</div>
</template>
