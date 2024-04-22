<script setup lang="ts">
import { AppText } from '@wisemen/vue-core'

import AppGrid from '@/components/app/AppGrid.vue'
import AppPage from '@/components/app/AppPage.vue'
import ActivityDataView from '@/modules/home/components/ActivityDataView.vue'

interface Activity {
	title: string
	description: string
	date: string
	location: string
}

const seminaries: Activity[] = [
	{
		title: 'Application Observability',
		description: 'Seminar on observing application operation using metrics, logging, and tracing.',
		date: '08/11/2023 3u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Dark launches and gradual releases',
		description: 'Seminar on methods for gradually releasing features to a subset of end users.',
		date: '15/11/2023 3u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Battle of the Cloud data platforms',
		description: 'Discussion on cloud data platform market leaders and their comparisons.',
		date: '22/11/2023 3u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'The world of UX',
		description: "Overview of UX principles, examples of dos and don'ts, and UX design process.",
		date: '06/12/2023 3u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Prototyping a full-stack application',
		description: 'How to prototype a full-stack application including front-end, back-end, and deployment to AWS.',
		date: '28/02/2023 3u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Social Engineering',
		description: 'A guest speaker from 3-IT discusses social engineering techniques and stories of its application.',
		date: '14/03/2023 3u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'A dive into the world of Low Code',
		description: 'Explains what Low Code is and provides a practical example of building an application quickly.',
		date: '25/04/2023 3u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Forensics',
		description:
			'Police guest speakers discuss the use of informatics in forensics, such as data extraction from seized hard drives.',
		date: '02/05/2023 3u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
]
const developments: Activity[] = [
	{
		title: 'My team and I',
		description: 'Personality aspects examination and teambuilding activities within the IT project framework.',
		date: '11/10/2023 2u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Projectweek 2TIN',
		description:
			'Week-long series of activities focused on self-discovery and teambuilding in preparation for the Research project.',
		date: '13/02/2023 – 17/03/2023 27u',
		location:
			'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt; TRIXXO, Gouverneur Verwilghensingel 70, 3500 Hasselt',
	},
	{
		title: 'POPping',
		description: 'Exploration of personal traits through team feedback in the context of the Research project.',
		date: '21/02/2023 2u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Brein aan het werk! Niet storen!',
		description: "Session on the impact of mobile phone addiction and prioritizing tasks using Eisenhower's matrix.",
		date: '21/02/2023 2u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Info Support Student Event (extra)',
		description:
			'A networking evening with Info Support where consultants discuss their training and projects, followed by a question session.',
		date: '20/03/2024 4u',
		location: 'Info Support, Generaal de Wittelaan 17, 2800 Mechelen',
	},
]

const engagements: Activity[] = [
	{
		title: 'Info Support Codebash (extra)',
		description: 'A programming competition where IT students solve complex algorithmic problems to win prizes.',
		date: '20/04/2024 6u',
		location: 'Info Support, Generaal de Wittelaan 17, 2800 Mechelen',
	},
]

const innovations: Activity[] = [
	{
		title: 'Innovatieroute DDD',
		description: 'Event on Domain-Driven Design, including practical applications and event storming.',
		date: '28/09/2023 – 12/10/2023 25u',
		location: 'Hogeschool PXL, Elfde-Liniestraat 24, 3500 Hasselt',
	},
	{
		title: 'Pitch Please Hackaton',
		description: 'Hackathon challenge to turn an idea into a business plan and pitch it to a jury.',
		date: '01/12/2023 8u',
		location: 'Cegeka, Kempische Steenweg 293/16, 3500 Hasselt',
	},
]
</script>

<template>
	<AppPage title="Activiteiten">
		<AppGrid
			class="gap-y-8"
			:cols="1"
		>
			<div>
				<AppText
					class="pb-5"
					variant="title"
					>Seminaries</AppText
				>
				<AppGrid :cols="3">
					<ActivityDataView
						v-for="seminary in seminaries"
						:key="seminary.title"
						:date="seminary.date"
						:description="seminary.description"
						:location="seminary.location"
						:title="seminary.title"
					/>
				</AppGrid>
			</div>

			<div>
				<AppText
					class="pb-5"
					variant="title"
					>Persoonlijke ontwikkeling</AppText
				>
				<AppGrid :cols="3">
					<ActivityDataView
						v-for="development in developments"
						:key="development.title"
						:date="development.date"
						:description="development.description"
						:location="development.location"
						:title="development.title"
					/>
				</AppGrid>
			</div>
			<div>
				<AppText
					class="pb-5"
					variant="title"
					>Innovatie</AppText
				>
				<AppGrid :cols="3">
					<ActivityDataView
						v-for="innovation in innovations"
						:key="innovation.title"
						:date="innovation.date"
						:description="innovation.description"
						:location="innovation.location"
						:title="innovation.title"
					/>
				</AppGrid>
			</div>
			<div>
				<AppText
					class="pb-5"
					variant="title"
					>Student Engagement</AppText
				>
				<AppGrid :cols="3">
					<ActivityDataView
						v-for="engagement in engagements"
						:key="engagement.title"
						:date="engagement.date"
						:description="engagement.description"
						:location="engagement.location"
						:title="engagement.title"
					/>
				</AppGrid>
			</div>
		</AppGrid>
	</AppPage>
</template>
