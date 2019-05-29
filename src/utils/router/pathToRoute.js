import routes from "../../routes";

export default function(path) {
    for (const route of routes) {
        if (path === route.path) {
            return route;
        }
    }
}
