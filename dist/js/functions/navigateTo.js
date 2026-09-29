import { router } from "../router.js";
export const navigateTo = (url) => {
    history.pushState(null, "", url);
    router();
};
//# sourceMappingURL=navigateTo.js.map