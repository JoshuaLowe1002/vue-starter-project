import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";
import { View } from "@/views/constants";

import Home from "@/views/home/home.vue";
import Orders from "@/views/orders/orders.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: View.Home,
		component: Home
	},
	{
		path: "/orders",
		name: View.Orders,
		component: Orders
	}
];

const router: Router = createRouter({
	history: createWebHistory("/"),
	routes
});

router.beforeEach(() => {
	NProgress.start();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
