const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.mjs',
    output: {
        filename: 'main.mjs',
        path: path.resolve(__dirname, 'dist')
    }
};
