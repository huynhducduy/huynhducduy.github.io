import namespace from "..";

import {
    createModelShape,
    createReceiveModel,
    normalizeConfig,
} from "#utils/modules/models";

const constant = normalizeConfig({
    namespace,
    config: {
        access_token : { type: "text" },
        refresh_token: { type: "text" },
        expires_at   : { receive: "expire_at", type: "text" },
    },
});

export const form = {
    props: {
        layout: "vertical",
    },
    class: ["login-form"],
    items: {
        grant_type: {
            api    : "grant_type",
            type   : "hidden",
            options: {
                initialValue: "password",
            },
        },
        username: {
            api  : "username",
            type : "text",
            rules: [
                {
                    required: true,
                    message : "auth.login.form.username.rules.required",
                },
            ],
            options: {},
            class  : {
                formItem: [],
                input   : [],
            },
            placeholder: "auth.login.form.username.placeholder",
            prefix     : {
                type : "icon",
                value: "user",
            },
        },
        password: {
            api  : "password",
            type : "password",
            rules: [
                {
                    required: true,
                    message : "auth.login.form.password.rules.required",
                },
            ],
            options    : {},
            placeholder: "auth.login.form.password.placeholder",
            prefix     : {
                type : "icon",
                value: "lock",
            },
        },
        remember: {
            api    : "remember",
            type   : "checkbox",
            options: {
                valuePropName: "checked",
                initialValue : true,
            },
            label: "auth.login.form.remember.label",
        },
    },
    submit: {
        value: "auth.login.form.submit",
        class: "login-form-button",
    },
};

export const errors = {
    "-2": "Wrong pairs of username and password",
};

export const shape = createModelShape(constant);
export const receiveModel = createReceiveModel(constant); // transformResponse
