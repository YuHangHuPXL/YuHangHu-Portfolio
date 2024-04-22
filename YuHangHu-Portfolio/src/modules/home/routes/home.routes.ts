import type { RouteRecordTyped } from '@/types/router/router.type.ts'

export interface HomeRoutes {
	'home': {
		path: '/home'
	}
	'about': {
		path: 'about'
	}
	'activities': {
		path: 'activities'
	}
	'ddd': {
		path: 'ddd'
	}
	'infosupport-event': {
		path: 'infosupport-event'
	}
	'codebash': {
		path: 'codebash'
	}
	'project-week': {
		path: 'project-week'
	}
	'reflection': {
		path: 'reflection'
	}
}

export const homeRoutes: RouteRecordTyped[] = [
	{
		path: 'home',
		children: [
			{
				component: async () => await import('@/modules/home/views/HomeView.vue'),
				name: 'home',
				path: '',
			},
			{
				name: 'about',
				path: 'about',
				component: async () => await import('@/modules/home/views/AboutMeView.vue'),
			},
			{
				name: 'activities',
				path: 'activities',
				component: async () => await import('@/modules/home/views/ActivityView.vue'),
			},
			{
				name: 'ddd',
				path: 'ddd',
				component: async () => await import('@/modules/home/views/DDDView.vue'),
			},
			{
				name: 'infosupport-event',
				path: 'infosupport-event',
				component: async () => await import('@/modules/home/views/InfoSupportView.vue'),
			},
			{
				name: 'codebash',
				path: 'codebash',
				component: async () => await import('@/modules/home/views/CodebashView.vue'),
			},
			{
				name: 'project-week',
				path: 'project-week',
				component: async () => await import('@/modules/home/views/ProjectWeekView.vue'),
			},
			{
				name: 'reflection',
				path: 'reflection',
				component: async () => await import('@/modules/home/views/ReflectionView.vue'),
			},
		],
	},
]
