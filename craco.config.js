// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const WebpackBar = require("webpackbar");

const path = require("path");

module.exports = {
    webpack: {
        // plugins: [
        //     new WebpackBar({ profile: true }),
        //     ...(process.env.NODE_ENV === "development"
        //         ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        //         : []),
        // ],
        alias: {
            "#routes"  : path.resolve(__dirname, "src", "routes.js"),
            "#config"  : path.resolve(__dirname, "src", "config.js"),
            "#i18n"    : path.resolve(__dirname, "src", "i18n"),
            "#products": path.resolve(__dirname, "src", "products.js"),
            "#utils"   : path.resolve(__dirname, "src", "utils"),
            "#modules" : path.resolve(__dirname, "src", "app", "modules"),
            "#views"   : path.resolve(__dirname, "src", "app", "views"),
        },
    },
    babel: {
        plugins: [
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-export-namespace-from",
            [
                "import",
                {
                    libraryName: "antd",
                    style      : "css",
                },
            ],
            "ramda",
            "date-fns-next",
        ],
    },
    jest: {
        configure: {
            moduleNameMapper: {
                "^#utils(.*)$"  : "<rootDir>/src/utils$1",
                "^#i18n(.*)$"   : "<rootDir>/src/i18n$1",
                "^#modules(.*)$": "<rootDir>/src/app/modules$1",
                "^#views(.*)$"  : "<rootDir>/src/app/views$1",
                "^#routes$"     : "<rootDir>/src/routes",
                "^#config$"     : "<rootDir>/src/config",
                "^#products$"   : "<rootDir>/src/products",
            },
        },
    },
};
