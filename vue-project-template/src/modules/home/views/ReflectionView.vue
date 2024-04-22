<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

import AppGrid from '@/components/app/AppGrid.vue'
import AppPage from '@/components/app/AppPage.vue'
</script>

<template>
	<AppPage title="Eindreflectie">
		<AppGrid
			class="gap-y-5"
			:cols="1"
		>
			<AppText class="leading-loose">
        Als beginnende student aan Hogeschool PXL had ik geen specifiek doel voor ogen, behalve afstuderen. In de loop der jaren heb ik echter mijn passie voor applicatieontwikkeling ontdekt. Mijn doel is verschoven van enkel afstuderen naar het worden van een bekwame developer.
			</AppText>

			<AppText class="leading-loose">
        Ik ben over het algemeen erg tevreden met mijn vooruitgang door de jaren heen. Door lessen en projecten zijn mijn ontwikkelingsvaardigheden aanzienlijk verbeterd. De Codebash hackathon bevestigde dat ik op de goede weg ben. Dankzij verschillende seminars en de innovatieroute heb ik ook veel geleerd buiten wat we op school hebben gezien. De interessantste seminars in mijn ogen waren:
			</AppText>

			<ul class="mx-auto list-disc">
				<li>Application Observability</li>
				<li>Dark launches and gradual releases</li>
				<li>Social Engineering</li>
			</ul>

			<AppText class="leading-loose"
				>De eerste twee waren vooral interessant omdat ze veel toegevoegde waarde bieden voor een ontwikkelaar. Het observeren van je applicatie is cruciaal om het gebruik te monitoren en fouten makkelijker te detecteren met logging. Feature toggles zijn een nuttige tool om nieuwe features te testen zonder het bestaande systeem te verstoren. De kennis uit deze twee seminars zal ik zeker toepassen in mijn toekomstige projecten. Het laatste seminar had weliswaar niets te maken met applicatieontwikkeling, maar is een onderwerp dat ik persoonlijk zeer boeiend vind.
			</AppText>

			<AppText class="leading-loose">
        Op het gebied van persoonlijke ontwikkeling heb ik een aanzienlijke groei doorgemaakt dankzij de verschillende POP-sessies en andere activiteiten. Door deze sessies en de projectweek heb ik mezelf beter leren kennen en mijn sterke en zwakke punten ontdekt. Van nature ben ik een uitvoerend en doelgericht persoon, maar door verschillende projecten uit te voeren met diverse teamgenoten, ben ik geëvolueerd tot een meer gebalanceerde persoon. Tegenwoordig besteed ik ook meer aandacht aan andere hoofdpersoonlijkheden zoals denken, samenwerken en communiceren. Na de projecten op school is het ook aanbod gekomen dat ik vrij deftig leider kan zijn. Mijn team kan op mij rekenen om het project tot een goed einde te brengen. Ik neem graag de initiatief en probeer iedereen op dezelfde niveau te brengen.
      </AppText>

			<AppText class="leading-loose">
        Echter, ik ben niet perfect en communicatie blijft een zwak punt waar ik aan moet werken. Het probleem is niet dat ik niet wil communiceren, maar dat ik soms vergeet te communiceren. Soms ben ik zo verdiept in het programmeren dat ik vergeet om met mijn collega’s te communiceren. Een ander voorbeeld is dat ik soms aan een taak begin zonder eerst te overleggen met de rest van mijn team. Dit zal zeker een aandachtspunt blijven, ook na mijn opleiding.
      </AppText>
      <img alt="x-factor" class="w-[500px] mx-auto" src="@/assets/images/x-factor.png"/>
			<AppText class="leading-loose">
				Mijn eigenschappen kunnen dan ook gevonden in de X-factor. Zoals vernomen heb ik een grote passie voor
				applicatieontwikkeling die tijdens de opleiding tot stand is gekomen. Naast deze passie heb ik ook empathie. Een
				project met meerdere mensen is alleen mogelijk indien iedereen met elkaar kan werken. Als teamleider probeer ik
				dit zo goed mogelijk te hanteren. Als iemand een interne probleem heeft, luister ik graag naar het probleem om
				samen een antwoord te vinden.
			</AppText>
			<AppText class="leading-loose">
				Ondernemend zijn ligt ook in mijn bloed. Als de oudste zoon van een familiebedrijf wordt het van mij verwacht om
				de zaak over te nemen. Helaas ligt mijn interesse in een andere sector. Nadat ik mijn hebt behaalt van een goede
				developer te zijn, ligt het idee van een eigen zaak te starten niet ver weg. Ik ben ook niet bang voor
				veranderingen vanwege het feit dat je niet weet of iets voor jou is totdat je het probeert.
			</AppText>
			<AppText class="leading-loose">
				Vanwege corona moesten wij geen internationale activiteit doen voor ons portfolio. Dit betekent echter niet dat
				ik deze pijler van de X-factor niet hebt. Vanwege mijn buitenlandse roots heb ik geen schrik om met andere
				culturen samen te werken. Voor een project met meerdere mensen is de samenwerking het belangrijkste om de
				project succesvol te kunnen afronden. Ik kan met verschillende soorten persoonlijkheden werken wegens mijn
				flexibiliteit. Hierdoor zal ik ook altijd de beste optie kiezen zodat de samenwerking van het team optimaal is.
			</AppText>
			<AppText class="leading-loose">
				Ten laatste verwacht de hogeschool PXL dat hun studenten disciplinair en multidisciplinair zijn. Zoals eerder
				vernomen had de Codebash me een inzicht gegeven dat ik op de juiste pad ben om een expert te zijn binnen mijn
				domein. Dit kan ook worden overgedragen naar andere disciplines. Door mijn vorige studies in de wetenschap lijkt
				het me ook een interessante idee om deze twee te combineren naar één geheel.</AppText class=leading-loose
			>
			<AppText class="leading-loose">
				In het algemeen moet ik dankbaar zijn aan de hogeschool PXL om mij tot de persoon te vormen die ik nu ben.
				Indien ik niet deze richting koos had ik mijn passie voor programmeren niet ontdekt en zou ik momenteel ook geen
				duidelijke doel hebben. Ik wil ook graag een extra appreciatie geven aan de taallectoren en hun lessen. Als
				iemand met ervaring aan de UHasselt, hogeschool UCLL en hogeschool PXL, kan ik eerlijk zeggen dat de lessen
				'Communication Skills' aan de hogeschool PXL ver uitsteken boven de vergelijkbare vakken bij de andere
				instellingen. Ik zal de lesmateriaal zeker nog eens opnieuw doornemen in de toekomst.
			</AppText>

			<AppText class="leading-loose"
				>Zoals eerder besproken zijn mijn doelen nog niet bereikt maar mijn ik ben op de goede pad. Mijn ambitie is er
				nog steeds en zal waarschijnlijk alsmaar groeien doorheen mijn carrière als ontwikkelaar. Ik weet nog niet wat
				de toekomst zal inhouden nadat ik mijn doel hebt bereikt. Het idee om een eigen zaak te starten klinkt
				verleidelijk maar misschien liggen mijn ambities dan ergens anders Ik ben iemand die liever in het moment leeft
				en niet te ver vooruit kijkt naar de toekomst. Eén ding is wel zeker en dat is dat ik iets zal doen waarin ik
				gepassioneerd in ben en waarin ik de X-factor kan tonen.
			</AppText>
		</AppGrid>
	</AppPage>
</template>
