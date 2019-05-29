import pathToRegexp from "path-to-regexp";
import routes from "../../routes";

export default function(name, data = {}) {
    for (const route of routes) {
        if (name === route.name) {
            return pathToRegexp.compile(route.path)(data);
        }
    }
}
