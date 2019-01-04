module.exports = {
    plugins: {
        'postcss-import': {
            path: 'assets/css'
        },
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
        'postcss-reporter': {
            clearReportedMessages: true
        }
    }
};
