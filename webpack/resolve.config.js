const path = require("path");

const resolve = {
  alias: {
    actions: path.resolve(__dirname, "../src/actions/"),
    components: path.resolve(__dirname, "../src/components/"),
    hoc: path.resolve(__dirname, "../src/hoc/"),
    reducers: path.resolve(__dirname, "../src/reducers/"),
    utils: path.resolve(__dirname, "../src/utils/"),
    appStore: path.resolve(__dirname, "../src/store")
  }
};

module.exports = resolve;
