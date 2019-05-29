import loadableComponent from "#utils/router/loadableComponent";

export default [
    {
        name     : "home",
        path     : "/",
        component: loadableComponent(
            import("./app/views/home" /* webpackChunkName: "home" */)
        ),
        exact       : true,
        access_level: "private",
    },
];
