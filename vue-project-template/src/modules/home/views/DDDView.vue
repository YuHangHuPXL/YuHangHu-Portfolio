<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

import AppGrid from '@/components/app/AppGrid.vue'
import AppPage from '@/components/app/AppPage.vue'
</script>

<template>
	<AppPage title="Domain Driven Design">
		<AppGrid
			class="gap-y-5"
			:cols="1"
		>
			<AppText class="leading-loose">
				Deze innovatieroute werd georganiseerd door de Hogeschool PXL zelf. Het onderwerp van deze route is
				Domain-Driven-Design, een collectie van principes en patronen om een architectuur op te stellen voor complexe
				problemen. Het doel van deze innovatieroute is om te leren wat DDD precies is en hoe we dit kunnen toepassen op
				onze eigen projecten. De workshops werden verspreid over 3 dagen en werd gegeven aan een groep van PXL
				studenten.
			</AppText>
			<AppText class="leading-loose">
				Dag 1 werd gegeven door 2 werknemers van Cegeka. Zij begonnen met een introductie over de basisprincipes van DDD
				en waarom je DDD zou willen gebruiken in projecten. Het doel van DDD is om het domein zo goed mogelijk te
				modeleren in de code. Dit betekent wat in het business model aanwezig is ook aanwezig moet zijn in de code. Een
				belangrijk techniek om dit beter te realiseren is ubiquitous language. Dit betekent dat het vakjargon wordt
				overgenomen naar de code. Hierdoor blijven de developers en het business team op dezelfde niveau. Het DDD
				verhaal kan worden onderverdeeld in twee grote stukken, een tactical en een strategic deel.
			</AppText>
			<img
				alt="strategic-tactical"
				class="mx-auto w-[65%]"
				src="@/assets/images/tactical-strategic.png"
			/>
			<AppText class="leading-loose">
				Voor dag 1 blijven we op de strategic side. Hierin wordt het model van de applicatie uitgetekend met behulp van
				event storming. Een event is een gebeurtenis dat al gebeurt is. Aan de hand van deze events kan een timeline
				worden opgesteld dat de domein blokken blootleggen. Dit gebeurt meestal zowel met de developers als de
				domeinexperten.
			</AppText>
			<img
				alt="event-storming"
				class="mx-auto w-[65%]"
				src="@/assets/images/event-storming.png"
			/>
			<AppText class="leading-loose"
				>Het doel van dag 1 was om Event storming uit te voeren voor een applicatie. Deze applicatie in kwestie was
				HarmonyTunes. Een applicatie gelijkaardig aan Spotify maar dan specifiek voor liedjes uit films, series en
				videogames.
			</AppText>
			<AppText class="leading-loose">
				Als eerst moesten we met oranje sticky notes events opschrijven en deze ophangen aan het bord. Deze events
				stellen belangrijke momenten voor in de applicatie zoals het afspelen van een liedje. Hierna werden blauwe
				sticky notes gebruikt voor commands. Dit zijn requests die uiteindelijk leiden tot een event bijvoorbeeld het
				klikken op de afspeelknop. Paarse notes werden dan hierna gebruikt voor policies, de regels die het systeem
				helpt om keuzes te maken. Een voorbeeld hiervan is het afspelen van reclame wanneer er x aantal keren een lied
				is overgeslagen. Wanneer er informatie moet worden getoond, worden de groen notes gebruikt. Bijvoorbeeld het
				effectief tonen van een specifieke reclame. De persoon wie de command initialiseert heet een actor en wordt
				gerepresenteerd door de gele notes. Wanneer er een mogelijke probleem wordt ondervonden or er is geen antwoord
				op een bepaalde vraag worden de rode notes gebruikt. Op het einde kregen we de volgende overzicht op het bord en
				hebben we ons model uitgetekend.
			</AppText>
			<img
				alt="result-event-storming"
				class="mx-auto w-[65%]"
				src="@/assets/images/result-event-storming.png"
			/>
			<AppText class="leading-loose">
				Op dag 2 en 3 zijn we dan gestart met de tactical side van DDD met behulp van een consultant van Info Support.
				De resultaten van de Event storming worden dan nu vertaalt naar code. De consultant heeft ons basiscode gegeven
				om mee te starten. Daarna is hij begonnen met het vertalen van de event storming. Wij mochten meedoen of het
				bekijken en vragen stellen. Omdat er niet genoeg tijd was om de hele applicatie te bouwen hebben we het gehouden
				op twee models, namelijk Album en Song.
			</AppText>
			<img
				alt="catalogue-bounded-context"
				class="mx-auto w-[65%]"
				src="@/assets/images/catalogue-bounded-context.png"
			/>
			<AppText class="leading-loose">
				Als eerst werd de state gemaakt van de album. Deze state bevat alle eigenschappen van een album zoals een naam,
				artiest en anderen. Bij het maken van deze state werd het snel duidelijk gemaakt tussen het gebruik van een
				value type. In plaats van het primitieve string te gebruiken voor de naam is het beter om een value type te
				gebruiken. Hierdoor kan er specifieker validatie gebeuren bij het maken van een naam.
			</AppText>
			<img
				alt="album-value-object"
				class="mx-auto w-[65%]"
				src="@/assets/images/album-value-object.png"
			/>
			<img
				alt="aggregrate-state"
				class="mx-auto w-[65%]"
				src="@/assets/images/aggregrate-state.png"
			/>
			<AppText class="leading-loose">
				Hierna werd de aggregrate gemaakt. Deze dient als de brug tussen de buitenwereld en het domein. Wanneer een
				state moet worden aangepast gaat het altijd door de aggregate via een command. Deze commands zijn in de
				aggregate zelf in de vorm van events. Een alternatief hiervoor is om een command klasse te maken die events
				sturen. Dit event wordt dan opgegooid en roept de mutate functie op van de state. De state kan dus enkel worden
				verandert binnen de state zelf.
			</AppText>
			<img
				alt="album-aggregrate-command"
				class="mx-auto w-[65%]"
				src="@/assets/images/album-aggregrate-command.png"
			/>
			<AppText class="leading-loose">
				Eenmaal dat de state en aggregrates in orde waren moeten we deze nog configureren om opgeslagen te worden in de
				database. Omdat de state op zijn eigen geen identity heeft maar altijd gelinkt is aan een aggregrate root moet
				de primary key van de state de aggregrate root zijn. Ook hier wordt er een concurrency token gedefinieerd om
				concurrency problemen te vermijden.
			</AppText>
			<img
				alt="entity-framework-config"
				class="mx-auto w-[65%]"
				src="@/assets/images/entity-framework-config.png"
			/>
			<AppText class="leading-loose">
				Wanneer eenmaal de DbContext is gedefinieerd kan de repository worden opgesteld. Elk operatie op een state moet
				door de aggregrate root gebeuren. Dit betekent dat bij het maken van een nieuwe entity een nieuwe aggregrate
				root gemaakt moet worden. Op dag 3 werd er verder verteld over de communicatie tussen verschillende bounded
				contexes voormiddel van RabbitMQ en dit ook in de vorm van een group coding.
			</AppText>
			<img
				alt="ddd-group-picture"
				class="mx-auto w-[65%]"
				src="@/assets/images/ddd-group-picture.png"
			/>

			<div>
				<AppText
					class="leading-loose"
					variant="subtitle"
					>Reflectie</AppText
				>
				<AppText
					class="leading-loose"
					variant="body"
				>
					Ik ben heel content met deze innovatieroute. Het onderwerp was interessant en was op een fijne manier
					overgebracht. Tegen het einde van de laatste dag toen we de hele applicatie hadden gemaakt en het ook werkte
					gaf dit zeer goed gevoel.
				</AppText>
				<AppText class="leading-loose"
					>De praktijk gedeelte van deel 2 en 3 was echter soms iets te snel. Omdat het concept vrij complex is hadden
					we ook wat tijd nodig om dit volledig te begrijpen. De spreker is al een ervaren consultant die voor grote
					bedrijven heeft gewerkt. Wij als studenten konden niet altijd even snel mee coderen omdat sommige functies or
					syntax voor ons vreemd was. Hierdoor waren we meer aan het focussen op het overtypen dan het begrijpen. Indien
					iets foutief ging bij het overtypen konden we niet meer meevolgen vanwege de tempo van de lab. Een goede
					feedback hiervoor is misschien om de tempo te verlagen en misschien een extra dag in te plannen.
				</AppText>
				<AppText class="leading-loose"
					>Deze innovatieroute was mij persoonlijk heel interessant vooral vanwege de complexiteit ervan. Het heeft mij
					een nieuwe inzicht gegeven over softwarearchitectuur en software engineering in het algemeen. Voorheen hadden
					we altijd een simpele architectuur gebruikt zoals een vertical stack of alles bestanden in één map. Het
					IT-project was tijdens deze innovatieroute ook gestart. Samen met dit project was er en onderzoeksthema aan
					verbonden. Een van de mogelijke thema’s was DDD maar de lector om dit niet te kiezen vanwege de complexiteit.
					Ik had voor deze route gekozen om een beter inzicht te krijgen over het concept zelf voordat ik mijn keuze
					voor het onderzoeksthema koos.
				</AppText>
				<AppText class="leading-loose"
					>Wat ik ook zeer dankbaar voor ben is de constant hulp en feedback die we kregen tijdens de innovatieroute.
					Wanneer we een vraag hadden werd dit onmiddellijk met enthousiasme uitgelegd. Deze activiteit heeft mijn
					ambities verhoogd als een toekomstige ontwikkelaar. Het heeft mijn een nieuwe interesse gegeven in de wereld
					van architecturen en ik ben dan ook zelf meer in mijn eigen projecten erover gaan denken. Dit heeft me laten
					inzien dat ik nog veel te leren heb in de wereld van softwareontwikkeling maar wat nog te leren valt zeer
					interessant kan zijn.</AppText
				>
			</div>
		</AppGrid>
	</AppPage>
</template>
