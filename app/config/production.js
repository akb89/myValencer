const production = {
    port: 5556,
    logger: {
        transports: {
            console: {
                level: 'info',
            },
            file: {
                level: 'verbose',
            },
        },
    },
    base_url: 'https://dashboard.filevirtuelle.com',
};

module.exports = production;
