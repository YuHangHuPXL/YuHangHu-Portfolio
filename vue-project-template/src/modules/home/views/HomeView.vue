<script setup lang="ts">
import { AppRouterLinkButton, AppText } from '@wisemen/vue-core'
</script>

<template>
	<div class="flex flex-col items-center  text-center mt-32 gap-y-5">
    <img class="h-[250px] w-[250px] rounded-full" src="@/assets/images/avatar-picture.jpg" alt="avatar-picture">
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
