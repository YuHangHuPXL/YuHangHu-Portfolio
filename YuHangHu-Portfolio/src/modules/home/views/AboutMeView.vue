<script setup lang="ts">
import { AppIcon, AppText } from '@wisemen/vue-core'

import AppPage from '@/components/app/AppPage.vue'
</script>

<template>
	<AppPage title="Wie ben ik?">
		<div class="flex h-screen w-full flex-col">
			<div class="mx-auto w-1/2 pb-5">
				<AppIcon
					icon="quotes"
					size="xxl"
				/>
				<AppText class="text-4xl">Embrace the suck </AppText>
				<AppText
					class="opacity-80"
					variant="subtext"
					>"Embrace the suck” means that while the current situation sucks, you have to accept it and work toward
					changing it. It’s not about being in-denial, as much as accepting present discomfort for future success. To
					embrace the suck means to confront things that make you uncomfortable so that you can surmount it"</AppText
				>
				<AppIcon
					class="ml-auto"
					icon="quotes"
					size="xxl"
				/>
			</div>

			<AppText
				class="leading-loose"
				variant="body"
				>Dit is wat ik altijd tegen mezelf vertel als het te moeilijk wordt. Een gezegde met een betekenis dat moeilijke
				tijden nodig kunnen zijn voor groei en dat je deze uitdagingen rechtstreeks aangaat. Ik ben Yu Hang Hu, een
				laatstejaars student van de richting Toegepaste Informatica aan de Hogeschool PXL. In het middelbaar had ik nog
				geen besef wat ik later wil worden maar ik had altijd een interesse in de menselijke lichaam en informatica.
				Omdat ik niet kon kiezen heb ik dus de advies van mijn leerkrachten gevolgd om iets wetenschappelijks te doen.
				Ik ben hierna begonnen aan de opleiding Medische laboratoriumtechnologie aan de Hogeschool UCLL. Omdat ik niet
				genoeg voldoening had na deze opleiding heb ik ook het schakelprogramma gedaan naar een master Biomedische
				wetenschappen aan de Hasselt. Uiteindelijk kreeg ik een grote besef dat wetenschap uiteindelijk niet mijn passie
				was.
			</AppText>
			<br />

			<div class="mx-auto flex items-center gap-x-9 py-4">
				<img
					alt="ucll"
					class="w-32"
					src="@/assets/images/images.png"
				/>
				<img
					alt="uhasselt"
					class="w-32"
					src="@/assets/images/uhasselt-standaard.png"
				/>
				<img
					alt="pxl"
					class="w-32"
					src="@/assets/images/1314_logo_pxl_bol.png"
				/>
			</div>

			<AppText
				class="leading-loose"
				variant="body"
			>
				Hierna ben ik geland op de Hogeschool PXL waar mijn passie voor programmeren is gestart. Vanaf de eerste lessen
				had ik door dat dit iets is waarin ik de rest ik mijn leven wil aan spenderen. Het concept van een idee te
				hebben en dit te maken van niks intrigeert mij enorm. Hetzelfde voor het schrijven van algoritmes en oplossingen
				zoeken van problemen. Mijn ambities later is om mijn hard skills verder te ontwikkelen tot een hoog niveau.
				Later in het werkveld wil ik gezien worden als een ‘goede’ meeloper. Mijn sterke punten zijn o.a. hardwerkend,
				geduld, zelfstandigheid en stressbestendigheid. Deze heb ik leren kennen door na te denken over mijn
				kernkwadranten. Via een scan van Talent heb ik geleerd dat ik meer een doen persoon ben dan een denk persoon.
				Dit was tijdens het Research project vrij duidelijk toen ik direct bezig was met de uitvoering. Hierna heb ik
				dan ook gewerkt aan mijn andere punten zoals beschreven in de onderstaande figuur.
			</AppText>

			<img
				alt="kern-kwadranten"
				class="mx-auto w-[500px]"
				src="@/assets/images/kern-kwadranten.png"
			/>

			<AppText
				class="pt-4 leading-loose"
				variant="body"
				>Dit was ook duidelijk in de IT-project. Ik heb meer tijd gespendeerd aan het brainstormen en in de volgende
				analyse kwam ik meer uit als een denker. Uit dit project heb ik ook ontdekt dat ik ook deftig een leider kan
				zijn en een samenwerking tot een goede eind kan brengen. Natuurlijk heb ik ook nog punten waaraan ik kan werken.
				Een voorbeeld hiervan is dat ik soms te geïsoleerd ben wanneer ik hard aan het werken. Dit leidt dan tot een
				verminderde communicatie tegenover mijn collega’s.
			</AppText>
		</div>
	</AppPage>
</template>
