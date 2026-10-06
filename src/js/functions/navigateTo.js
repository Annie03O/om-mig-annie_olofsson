import { router } from "../models/routes.js"
export const navigateTo = (url) => {
    history.pushState(null, "", url);
    router();
}
