
import type { RouteRecordTyped } from '@/types/router/router.type'
import {HomeRoutes, homeRoutes} from "@/modules/home/routes/home.routes.ts";

export interface Routes extends HomeRoutes {
	404: {
		path: '/:catchAll(.*)'
	}
	index: {
		path: '/'
	}
}

export const routes: RouteRecordTyped[] = [
	{
		path: '',
		component: async () => await import('@/components/layout/AppLayout.vue'),
		children: [
			{
				name: 'index',
				path: '',
				redirect: {
					name: 'home',
				},
			},
			...homeRoutes,
		],
	},

	{
		name: 404,
		path: '/:catchAll(.*)',
		redirect: {
			name: 'index',
		},
	},
]
