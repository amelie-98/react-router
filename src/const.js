import Josh from "./josh.js";
const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <h1>Log in</h1> },
    {
        path: "/app",
        key: "APP",
        component: RenderRoutes,
        routes: [
            {
                path: "/app",
                key: "APP_ROOT",
                exact: true,
                component: () => <h1>App Index</h1>,
            },
            {
                path: "/app/page",
                key: "APP_PAGE",
                exact: true,
                component: () => <h1>App Page</h1>,
            },
        ],
    },
    {
        path: "/josh",
        key: "JOSH",
        component: RenderRoutes,
        routes: [
            {
                path: "/josh",
                key: "JOSH_ROOT",
                exact: true,
                component: Josh,
            },
            {
                path: "/josh/profile",
                key: "JOSH_PROFILE",
                exact: true,
                component: () => <h1>Profile</h1>,
            },
        ],
    },
];
export default ROUTES;
