import LIST from "./LIST";
import CREATE from "./CREATE";
import READ from "./READ";
import UPDATE from "./UPDATE";
import DELETE from "./DELETE";

export default function({ namespace }) {
    const Reducers = {};

    Reducers.List = LIST({ namespace });

    Reducers.Create = CREATE({ namespace });

    Reducers.Read = READ({ namespace });

    Reducers.Update = UPDATE({ namespace });

    Reducers.Delete = DELETE({ namespace });

    return Reducers;
}
