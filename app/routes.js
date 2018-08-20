const Router = require('koa-router');
const send = require('koa-send');
const config = require('./config');

function initialize_routes() {
    const router = new Router();
    router.get('/', async (ctx) => {
        await ctx.render('front/views/front');
    });


    const send_opts = {
        root: config.root,
        maxage: config._env !== 'production' ? 0 : 1000 * 60 * 60 * 24 * 7, // 7 days;
    };

    router.get('/public/*', async (ctx) => {
        await send(ctx, ctx.path, send_opts);
    });
    return router;
}

module.exports = initialize_routes;
