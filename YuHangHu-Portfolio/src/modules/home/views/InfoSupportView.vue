<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

import AppGrid from '@/components/app/AppGrid.vue'
import AppPage from '@/components/app/AppPage.vue'
</script>

<template>
	<AppPage title="Info Support Student Event">
		<AppGrid
			class="gap-y-5"
			:cols="1"
		>
			<AppText class="leading-loose">
				Info Support is een bedrijft dat zich specialiseert in het leveren van IT-services en consultancy. Ieder jaar
				organiseren zij een kennismakingavond voor laatstejaarsstudenten om het bedrijf beter te leren kennen. Deze
				event was op uitnodiging en was voor studenten die al nauwer contact hebben gehad met het bedrijf. In mijn geval
				had ik hier een solicitatiegesprek gehad voor een mogelijke stageplek. Deze had ik dan ook aangeboden gekregen.
				Mijn doel voor deze avond is om Info Support beter te leren kennen om te kijken of dit een bedrijf is waar ik
				later wil gaan werken.
			</AppText>
			<AppText class="leading-loose">
				De activiteit begon om 17:00 en vond plaats in de kantoor van Info Support Mechelen. Bij het binnenkomen werd ik
				onthaald door de medewerkers en kreeg ik een sticker met mijn naam en waar ik studeer. Bij het rondlopen
				doorheen de kantoor merkte ik op dat ik de enige student was van de Hogeschool PXL. Dit kwam vooral door de
				grote afstand tussen de kantoor in Mechelen en Limburg. De andere medestudenten zijn van onderwijsinstellingen
				die dichterbij gelegen zijn zoals Thomas More Geel en Karel de Grote Hogeschool Antwerpen.
			</AppText>
			<div class="flex">
				<img
					alt="info-support-1"
					class=""
					src="@/assets/images/info-support-pic1.png"
				/>

				<img
					alt="info-support-selfie"
					class="object-contain"
					src="@/assets/images/info-support-selfie.png"
				/>
			</div>
			<AppText class="leading-loose">
				Eenmaal dat iedereen aanwezig was gaf de directeur een korte introductie van de avond. Verschillende medewerkers
				zullen hun projecten voorstellen en uitleggen wat ze daar doen. Na de voorstellingen, is er een pizzabuffet waar
				we aan de medewerkers vrijblijvend vragen kunnen stellen. Hierna werd er een presentatie gegeven over het
				ontwikkelen van computerspellen en de gelijkenissen tussen deze en de gewone softwareontwikkeling. Na deze
				introductie werd er een interessante feit verteld over het bedrijf zelf. Info Support neemt alleen pas
				afgestuurde studenten aan.
			</AppText>
			<AppText class="leading-loose">
				De eerste presentatie was van twee consultants die projecten doen bij het bedrijf Kion. Zij zijn een
				internationaal bedrijf dat zich specialiseert in het automatiseren van magazijnen en vorkheftrucks. Het bedrijf
				wou een visualisatie hebben van deze automatisatie om live de locatie te zien van alle heftrucks. De consultants
				hebben dan een prototype gemaakt die goedgekeurd was. Ondertussen hebben zij een werkende applicatie gemaakt dat
				nog uitgebreid moet worden
			</AppText>
			<AppText class="leading-loose">
				De tweede presentatie was over een consultant die werkt bij het interne FAST team. Wanneer een applicatie is
				afgeleverd bij een klant moet deze ook nog ondergehouden worden. Deze team is hiervoor verantwoordelijk en zijn
				ook verantwoordelijk indien er mis gaat met de applicatie.
			</AppText>
			<AppText class="leading-loose">
				De volgende presentatie was een consultant bij het internationale logistiek bedrijf Katoen Natie. De CEO van het
				bedrijf had onlangs de transporthaven van Urugay overgekocht. Deze haven had nog een oud systeem voor het
				registeren van containers en transportschepen. De CEO had dan Info Support gecontacteerd voor een op maat
				gemaakte software voor dit probleem. De software moest dan ook de mogelijkheid hebben om functionaliteiten te
				bieden aan particulieren. Hij vertelde dan zijn ervaringen met dit project en welke moeilijkheden er waren zoals
				het werken met oud software, verschillen in tijdzones en verschillen in taal.
			</AppText>
			<AppText class="leading-loose">
				De laatste presentatie ging over de opleidingen binnen Info Suport zelf. Wanneer iemand wordt aangenomen krijg
				hij of zij een opleiding van 3 maanden. Dit gebeurt bij het moederbedrijf in Nederland. Deze opleiding dient om
				de kennis van de afgestudeerde te verfijnen. Na deze opleiding krijgt de persoon de kans om in Nederland te
				werken of terug naar te België komen. Hij had dan ook verteld dat Info Support ook van zijn medewerkers
				verwachten om zelf les te geven. De spreker had dan verteld dat hij opeens werd gevraagd om een cursus Angular
				te geven terwijl hij zelf niet zoveel ervaringen mee had.
			</AppText>
			<AppText class="leading-loose">
				Na deze gesprekken aten we gezamenlijk van het buffet met wat netwerken tussendoor. Uiteindelijk was het dan
				tijd voor de presentatie over het ontwikkelen van computerspellen. Hierin vertelde de twee leidinggevende van
				het bedrijf BiteMe Games over hun ervaringen van het ontwikkelen van een computerspel tot de release. Zij hadden
				net hun eerst spel uitgebracht en vertelde hoe dit tot stand was gekomen met alle valkuilen erbij. Een van de
				sprekers werkt ook als fulltime consultant bij Info Support en kon goed de analogie vertellen tussen de
				klassieke ontwikkeling van software en het ontwikkelen van games. Hierna was er nog een vragenronde met wat meer
				netwerken.

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
						Na deze avond heb ik een gevoel gekregen over Info Support als een potentiële werkplaats later na mijn
						opleiding. Ik ben dus ook zeer blij dat ik de uitnodiging had geaccepteerd.
					</AppText>

					<AppText class="leading-loose">
						Wat onverwacht was, was de mededeling dat ze alleen pas afgestudeerde studenten aannemen. Dit vond ik wat
						minder op de eerste zicht omdat dit mij doet forceren om meer voor Info Support te kiezen boven andere
						jobaanbiedingen. Indien ik bijvoorbeeld voor een andere bedrijf zou kiezen maar het niks vind na een aantal
						jaren, zou ik geen kans meer hebben bij Info Support.
					</AppText>
					<AppText class="leading-loose">
						Maar in het algemeen heb ik veel inzichten gekregen over het bedrijf. Ze werken voor veel grote bedrijven
						met grote projecten. Ze zijn vooral een consultancy bedrijf waar je als consultant werkt voor andere
						bedrijven. Dit betekent ook dat ze van je verwachten dat je fullstack werkt. Dit is een ander soort
						werkcultuur dan bijvoorbeeld bij mijn stage. Daar werk ofwel in frontend of backend. Persoonlijk verkies ik
						fullstack maar dit kan in de toekomst nog veranderen. Het idee om in de FAST team te werken was ook zeer
						interessant omdat je alle soorten problemen kan tegenkomen. Niet alleen op het gebied van programmeren maar
						ook op het gebied van DevOps. Ook de infosessie over game-ontwikkeling vond ik zeer interessant maar na deze
						sessie heeft dit ook me de inzicht gegeven dat het niks voor mij was.
					</AppText>
					<AppText class="leading-loose">
						In het algemeen apprecieer ik het echt dat Info Support zo’n sessies houden voor laatstejaarsstudenten. Een
						algemeen ding bij laatstejaarsstudenten is dat wij niet weten wat we bedrijven van ons verwachten en wat wij
						van bedrijven kunnen verwachten. Zulke sessies verheldert onze perspectieven zodat we een betere keuze maken
						na onze opleiding. Dit is ook de redenen waarom ik voor deze activiteit heb gekozen om te bespreken. Deze
						activiteit heeft mij hard laten nadenken over wat ik later wil en of dit de juiste bedrijf daarvoor is.
					</AppText>
				</div>
			</AppText>

			<AppText />
			<AppText />
		</AppGrid>
	</AppPage>
</template>
