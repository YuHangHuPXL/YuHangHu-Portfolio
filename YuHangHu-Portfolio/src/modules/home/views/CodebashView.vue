<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

import AppGrid from '@/components/app/AppGrid.vue'
import AppPage from '@/components/app/AppPage.vue'
</script>

<template>
	<AppPage title="Info Support CodeBash">
		class="gap-y-5"
		<AppGrid :cols="1">
			<AppText
				class="leading-loose"
				:cols="1"
			>
				Google hield jaarlijks een programmeerwedstrijd voor enthousiaste programmeurs. Het kantoor van Info Support
				diende hiervoor als een offline hub voor personen die hiervoor wouden samenkomen. Vanaf 2023 had Google helaas
				de beslissing genomen om dit niet meer te organiseren. Info Support kwam dan op het idee om zelf eentje te
				organiseren voor jong talenten. Het doel van deze activiteit was om te ervaren hoe een programmeerwedstrijd
				verloopt. Deze activiteit werd uitgevoerd met 2 andere medestudenten van de hogeschool PXL.
			</AppText>
			<AppText class="leading-loose">
				Wij zijn rond 13:00 aangekomen op de kantoor van Info Support voor de aanvang van de hackaton. We werden warm
				verwelkomd en kregen onze naamkaarten met de gegevens nodig om op het website te kunnen inloggen.
			</AppText>
			<img
				alt="codebash-information"
				class="mx-auto w-[65%]"
				src="@/assets/images/codebash-information.png"
			/>
			<AppText class="leading-loose">
				Bij het rondkijken en met het praten met de andere deelnemers bleek dat wij de enige studenten waren van de
				hogeschool PXL. Hierna hebben we een plaats uitgezocht in het kantoor. De officiële startijd van de competitie
				was om 14:00 en was ook de tijd wanneer de opdracht zal worden bekend gemaakt. In de tussentijd hadden we met
				het team een lichtje brainstorming gedaan over hoe we de opdracht gingen aanpakken. Rond 13:45 was iedereen
				verzameld voor een korte introductie over de codebash zelf. Hierin werd het bekend gemaakt dat de opdracht iets
				gelijkaardigs zou zijn met wat de medewerkers zelf dagelijks ondervinden. Geen enkele tool was verboden en er
				mocht dus ook AI gebruikt worden tijdens het programmeren. De gebruikte taal was ook naar keuze van de team. Bij
				de opdracht kregen we input files die we moesten omvormen naar een output file. Deze files konden we dan
				uploaden op de site van de Codebash waarmee we punten konden scoren op basis van de oplossing. Hiervoor kregen
				we 4 uur de tijd voor. Tenslotte werd ook verteld dat de hoofdprijs tikketen waren voor het Nerdland festival
				maar dat plezier te hebben de belangrijkste doel was van het event.
			</AppText>
			<img
				alt="codebash-office"
				class="mx-auto w-[65%]"
				src="@/assets/images/codebash-office.png"
			/>
			<AppText class="leading-loose">
				Na 14:00 zijn we gestart met de opdracht. De opdracht was om een geautomatiseerde magazijn te simuleren. Een
				magazijn heeft een lengte, breedte en hoogte. Elk magazijn heeft ook een x aantal transportmachines die
				verantwoordelijk zijn voor de transport van de magazijnitems. Er zijn orders om nieuwe items in de magazijn in
				te laden of items uit de magazijn te brengen. Dit is gelijkaardig aan een webshop waarbij items uit de magazijn
				worden gehaald bij een bestelling. Bij de startfiles kregen we input files dat de eigenschappen van het magazijn
				voorstelde. Hierin stonden ook de aantal transportmachines, welke items er al in het magazijn aanwezig waren,
				welke orders er zijn en hoelang de simulatie zal duren in ticks. De bedoeling was om de inputfile te lezen via
				het geschreven programma en een output te generen met instructies voor de machines. Er waren 8 files in totaal
				met telkens een moeilijkere graad.
			</AppText>
			<img
				alt="codebash-description"
				class="mx-auto w-[65%]"
				src="@/assets/images/codebash-description.png"
			/>
			<AppText class="leading-loose">
				Na de start hebben we eerst de opdracht gelezen om een algemeen beeld te krijgen. Hierna hebben we besloten om
				Java te gebruiken voor de opdracht. Dit omdat Java al een simpele ingebouwde I/O bevat om de input files te
				lezen. We zijn eerst begonnen met de input parser te schrijven. We hadden besloten om iedereen eentje te laten
				schrijven en wie de beste of eerste had, die gingen we dan gebruiken. Omdat AI is toegelaten hebben we dit ook
				gebruikt om eentje te laten generen. Hierna zijn we gestart om de entiteiten te maken van het magazijn. Na dit
				zijn we gestart met het schrijven van de logica. Wegens de grootte van de opdracht hadden we besloten om aan
				pair programming te doen. Iemand zal dus de code schrijven terwijl de rest van het team zijn input meegeeft. Na
				4 uur lang hard nadenken hadden we onze oplossing geüpload en kregen we pizza erna.
			</AppText>
			<AppText class="leading-loose">
				Na het eten werd de resultaten bekend gemaakt. We waren als tweede geëindigd met een totale score van 84. De
				eerste plaats had een abnormaal score van meer dan 9 cijfers. Dit kwam omdat ze een loophole hadden gevonden in
				de applicatie. De oplossing functie gaf per tijdseenheid een punt voor elk item in het magazijn. In elk opgave
				waren er al paar items in het magazijn. De programmeurs van de eerste team hadden een programma geschreven die
				de machines niks liet doen voor alle ticks. Dit gepaard met het feit dat de latere files heel veel ticks
				bevatte, resulteerde tot hun eerste plaats. Hierna kregen we nog een dankwoord voor ons deelname en gingen we
				naar huis.
			</AppText>
			<div class="mx-auto flex w-[65%] flex-col">
				<img
					alt="code-bash-results"
					src="@/assets/images/code-bash-results.png"
				/>
				<img
					alt="code-bash-group"
					src="@/assets/images/code-bash-group.png"
				/>
			</div>

			<div>
				<AppText
					class="leading-loose"
					variant="subtitle"
					>Reflectie
				</AppText>

				<AppText class="leading-loose">
					Ik ben blij dat ik deze activiteiten heb gedaan met mijn medestudenten. Indien ik alleen was gegaan zou ik dit
					te serieus hebben genomen waardoor de plezier zou verminderen. De algemene ervaring van de hackaton was ook
					zeer positief. De opdracht was zeer interessant en niet iets dat we al gedaan hadden op school. Het niveau
					voldeed aan onze verwachtingen en het gaf een zeer goed gevoel toen we progressie hadden.
				</AppText>
				<AppText class="leading-loose">
					Een minder leuke aspect van de hackaton was dat de tijd te krap was. We kregen 4 uur de tijd om de opdracht te
					maken maar we vonden dit persoonlijk iets te weinig. Dit had ook met de opdracht zelf te maken. De
					moeilijkheidsgraad was iets te hoog omdat ze hadden verwacht dat AI veel zou helpen. Ook was de opdracht niet
					altijd even duidelijk omdat het concept van een geautomatiseerde magazijn vrij vreemd voor ons is. De
					concepten en details kende wij niet helemaal waardoor dat we de code vaak moesten herschrijven. Hiervoor
					moesten we ook constant medewerkers vragen om dit uit te leggen waardoor we ook tijd mee verloren. Om dit op
					te lossen hadden we dan voorgesteld om eerst een visualisatie te tonen van de opdracht zodat het duidelijker
					is.
				</AppText>
				<AppText class="leading-loose">
					Deze hackaton gaf mij de inzicht dat ik goed op weg ben om een volwaardige ontwikkelaar te worden. De opdracht
					is aan een gelijkaardig niveau die de medewerkers van Info Support zelf dagelijks ondervinden. Door het feit
					dat we de applicatie konden maken met resultaat betekent dit dat we de nodige basis hebben.
				</AppText>
				<AppText class="leading-loose">
					Hiervoor ben ik de hogeschool PXL ook dankbaar voor. De lessen gaf ons de nodige kennis om deze opdracht tot
					een goede einde te brengen. Ik ben ook zeer dankbaar aan Info Support om zoiets te organiseren.
					Programmeerwedstrijden worden niet vaak georganiseerd maar het is een zeer goede ervaring voor enthousiaste
					ontwikkelaars. Daardoor heb ik dit ook opgenomen in mijn portfolio. Ik vind persoonlijk dat iedereen die
					ambitie heeft om een softwareontwikkelaar te worden, minstens aan een moet meedoen.
				</AppText>
			</div>
		</AppGrid>
	</AppPage>
</template>
