const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
    alias({
        "@components": "src/components",
        "@assets": "src/assets",
        "@store": "src/store",
        "@pages": "src/pages",
        "@constants": "src/constants"
    })(config);

    return config;
};
