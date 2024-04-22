import '@wisemen/vue-core/style.css'
import '@/assets/styles/index.scss'
import '@fontsource-variable/inter'

import { extendIcons } from '@wisemen/vue-core'
import { initializeApp } from 'firebase/app'
import { createApp as createVueApp } from 'vue'
import { VueFire } from 'vuefire'
import {icons} from "./icons/icons.ts";
import {configureZod} from "./configs/zod.config.ts";
import {configureDayjs} from "./configs/dayjs.config.ts";
import {i18nPlugin} from "./plugins/i18n/i18n.plugin.ts";
import {piniaPlugin} from "./plugins/pinia/pinia.plugin.ts";
import {routerPlugin} from "./plugins/router/router.plugin.ts";
import {vueQueryPlugin} from "./plugins/vue-query/vueQuery.plugin.ts";
import {configureSentry} from "./plugins/sentry/sentry.plugin.ts";
import App from "./App.vue";


extendIcons(icons)
configureDayjs()
configureZod()
const firebaseConfig = {
	apiKey: 'AIzaSyC6X-rQ_ZbB8Fl_3-C91DZqGLi7_9TtSfU',
	authDomain: 'italent-d46e0.firebaseapp.com',
	projectId: 'italent-d46e0',
	storageBucket: 'italent-d46e0.appspot.com',
	messagingSenderId: '302614789721',
	appId: '1:302614789721:web:0e9d482ca99f9509f6fb48',
	measurementId: 'G-LMQ7QH1CK4',
}

const firebaseApp = initializeApp(firebaseConfig)
const app = createVueApp(App)

app.use(VueFire, { firebaseApp: firebaseApp })
app.use(i18nPlugin)
app.use(piniaPlugin)
app.use(routerPlugin)
app.use(vueQueryPlugin).mount('#app')

configureSentry(app)
