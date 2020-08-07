const modifyVars = require('./theme');
const {
    override,
    addLessLoader,
    fixBabelImports
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
);