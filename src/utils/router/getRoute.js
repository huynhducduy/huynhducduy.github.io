import routes from "../../routes";

export default function(name) {
    for (const route of routes) {
        if (name === route.name) {
            return route;
        }
    }
}
