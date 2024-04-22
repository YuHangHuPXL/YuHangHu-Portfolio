<script setup lang="ts">
import { AppIcon, AppText } from '@wisemen/vue-core'

import AppPage from '@/components/app/AppPage.vue'
</script>

<template>
	<AppPage title="Wie ben ik?">
		<div class="flex w-full flex-col gap-y-5">
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
				>Dit is wat ik altijd tegen mezelf zeg als het moeilijk wordt. Dit gezegde betekent dat moeilijke tijden noodzakelijk kunnen zijn voor groei en dat je deze uitdagingen rechtstreeks moet aangaan. Mijn naam is Yu Hang Hu, en ik ben een laatstejaarsstudent Toegepaste Informatica aan    de Hogeschool PXL. Tijdens mijn middelbare schooltijd wist ik nog niet wat ik later wilde worden, maar ik had altijd al interesse in het menselijk lichaam en informatica. Omdat ik geen keuze kon maken, heb ik het advies van mijn leraren opgevolgd om iets wetenschappelijks te doen. Daarom begon ik aan de opleiding Medische Laboratoriumtechnologie aan Hogeschool UCLL. Omdat deze opleiding mij niet genoeg voldoening gaf, heb ik ook het schakelprogramma naar een master in Biomedische Wetenschappen aan de Universiteit Hasselt gevolgd. Uiteindelijk realiseerde ik me dat wetenschap niet mijn passie was en was ik hiermee ook gestopt.
			</AppText>
			<br />
			<div class="mx-auto flex items-center gap-x-9 py-4">
				<img
					alt="ucll"
					class="w-40 object-contain"
					src="@/assets/images/images.png"
				/>
				<img
					alt="uhasselt"
          class="w-40 object-contain"
					src="@/assets/images/uhasselt-standaard.png"
				/>
				<img
					alt="pxl"
          class="w-40 object-contain"
					src="@/assets/images/1314_logo_pxl_bol.png"
				/>
			</div>

			<AppText
				class="leading-loose"
				variant="body"
			>
        Vervolgens ben ik terechtgekomen aan Hogeschool PXL, waar mijn passie voor programmeren begon. Vanaf de eerste lessen wist ik dat dit iets was waar ik de rest van mijn leven mee bezig wilde zijn. Het concept van het hebben van een idee en dit uit het niets creëren fascineert me enorm. Dit geldt ook voor het schrijven van algoritmen en het zoeken naar oplossingen voor bepaalde problemen. Mijn ambitie is om mijn technische vaardigheden verder te ontwikkelen tot een hoog niveau. Later in mijn carrière wil ik bekend staan als een 'goede' developer.
			</AppText>
      <AppText
          class="leading-loose"
          variant="body">
        Mijn sterke punten zijn onder andere hardwerkend zijn, geduld hebben, zelfstandig zijn en stressbestendig zijn. Deze kwaliteiten heb ik leren kennen door na te denken over mijn kernkwaliteiten. Via een Thalento Scan heb ik geleerd dat ik meer een doener ben dan een denker. Dit werd duidelijk tijdens het onderzoeksproject, waarbij ik direct met de uitvoering begon. Vervolgens heb ik gewerkt aan het verbeteren van mijn andere punten zoals beschreven in de onderstaande figuur.
      </AppText>

			<img
				alt="kern-kwadranten"
				class="object-contain w-96 mx-auto"
				src="@/assets/images/kern-kwadranten.png"
			/>

			<AppText
				class="pt-4 leading-loose"
				variant="body"
				>Dit was eveneens duidelijk tijdens het IT-project. Ik heb meer tijd besteed aan het brainstormen en uit de daaropvolgende analyse bleek dat ik meer een denker ben geworden. Uit dit project heb ik ook ontdekt dat ik een effectieve leider kan zijn en een samenwerking succesvol kan afronden.
        Natuurlijk heb ik ook nog verbeterpunten. Zo merk ik dat ik soms te geïsoleerd werk wanneer ik hard bezig ben, wat dan leidt tot verminderde communicatie met mijn collega’s. Dit is iets waar ik aan kan werken om mijn teamvaardigheden en algehele professionele skills te verbeteren.
      </AppText>
		</div>
	</AppPage>
</template>
