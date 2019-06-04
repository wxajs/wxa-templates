const path = require('path');
const UglifyjsPlugin = require('@wxa/plugin-uglifyjs');
const ReplacePlugin = require('@wxa/plugin-replace');
const prod = process.env.NODE_ENV === 'production';

// 写入对应的环境ID
const envId = {
    sit: 'sit-248886'
};

console.log(envId[process.env.FOR]);

module.exports = {
    output: {
        path: path.resolve(__dirname, 'miniprogram'),
    },
    plugins: [
        new ReplacePlugin({
            list: {
                clondEnv: envId[process.env.FOR]
            },
        }),
    ],
};

if (prod) {
    module.exports.plugins.push(new UglifyjsPlugin());
}
