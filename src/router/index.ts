import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, Router, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";

import Home from "@/views/home/home.vue";
import Login from "@/views/login/login.vue";
import Register from "@/views/register/register.vue";

import { View } from "@/views/constants";
import { auth } from "@/providers/firebase-provider";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: View.Home,
		component: Home
	},
	{
		path: "/login",
		name: View.Login,
		component: Login,
		meta: {
			visible: true
		}
	},
	{
		path: "/register",
		name: View.Register,
		component: Register,
		meta: {
			visible: true
		}
	}
];

const router: Router = createRouter({
	history: createWebHistory("/"),
	routes
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
	NProgress.start();
	if (!auth.currentUser && to.meta.visible !== true) {
		router.push("/login");
	}
	if (auth.currentUser && to.meta.visible === true) {
		router.push("/");
	}
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
