<script setup lang="ts">
import { AppRouterLinkButton, AppText } from '@wisemen/vue-core'
</script>

<template>
	<div class="flex h-full flex-col items-center text-center">
    <img src="" alt="">
		<AppText variant="title">Hey! Ik ben Yu Hang Hu</AppText>
		<AppText variant="subtext">Een gepassioneerde developer in wording en dit is mijn portfolio voor I-talent</AppText>
		<AppRouterLinkButton
			class="w-fit"
			:to="{ name: 'about' }"
			variant="outline"
			>About me</AppRouterLinkButton
		>
	</div>
</template>
