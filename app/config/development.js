const development = {
    port: 4002,
    logger: {
        transports: {
            console: {
                level: 'debug',
            },
            file: {
                level: 'verbose',
            },
        },
    },
};

module.exports = development;
