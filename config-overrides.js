const modifyVars = require('./theme');
const {
    override,
    //less
    addLessLoader,
    //按需引入样式
    fixBabelImports,
    //装饰器
    addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars:modifyVars
        },
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addDecoratorsLegacy(),
);