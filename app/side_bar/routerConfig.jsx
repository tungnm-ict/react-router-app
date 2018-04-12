import React from "react";
// Each logical "route" has two components, one for the sidebar and one for the
// main area. We want to render both of them in different places when the path
// matches the current URL.
const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home Page</h2>
    }, {
        path: "/bubblegum",
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum Page</h2>
    }, {
        path: "/shoelaces",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces Page</h2>
    }
];
export default routes;