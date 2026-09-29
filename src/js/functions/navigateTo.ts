import { router } from "../router.js";

export const navigateTo = (url: string) => {
    history.pushState(null, "", url);
    router();
}
