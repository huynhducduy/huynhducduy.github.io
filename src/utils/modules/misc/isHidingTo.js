import { LIST, CREATE, READ, UPDATE } from "../types";

export default function(type) {
    return function(field) {
        if (field.hideFromList === true && type === LIST) return true;
        if (field.hideFromRead === true && type === READ) return true;
        if (field.hideWhenCreating === true && type === CREATE) return true;
        if (field.hideWhenUpdating === true && type === UPDATE) return true;
        return false;
    };
}
