import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Hjemskjerm from '../views/Hjemskjerm.vue';
import Kontaktskjerm from '../views/Kontaktskjerm.vue';
import Prosjektskjerm from '../views/Prosjektskjerm.vue';
import Omskjerm from '../views/Omskjerm.vue';
import CvSkjerm from '../views/CvSkjerm.vue';

const routes: Array<RouteRecordRaw> =[
	{
		path: '/',
		name: 'Hjemskjerm',
		component: Hjemskjerm
	},

    {
        path: '/Kontakt',
        name: 'Kontaktskjerm',
        component: Kontaktskjerm
    },

	{
		path: '/Prosjekt',
		name: 'Prosjektskjerm',
		component: Prosjektskjerm 
	},

	{
		path: '/Om',
		name: 'Omskjerm',
		component: Omskjerm
	},

	{
		path: '/Cv',
		name: 'CvSkjerm',
		component: CvSkjerm
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;