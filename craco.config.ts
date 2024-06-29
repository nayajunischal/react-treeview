import path from 'path';

module.exports = {
    typescript: {
        enableTypeChecking: true /* (default value) */,
    },
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    }
};