const Router = {
    init: () => {
        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const url = e.currentTarget.getAttribute('href');
                if (url) {
                    Router.nav(url);
                }
            });
        });
        window.addEventListener("popstate", (e) => {
            Router.nav(e.state.route, false);
        });
    },
    nav: function (route, addToHistory = true) {
        console.log(route);
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }
    }
};
export default Router;
//# sourceMappingURL=router.js.map