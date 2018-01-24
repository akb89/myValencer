const Router = require('koa-router');
const send = require('koa-send');
const config = require('./config');

function initialize_routes() {
    const router = new Router();
    router.get('/', async (ctx) => {
        await ctx.render('front/views/front');
    });

    router.get('/public/*', async (ctx) => {
        await send(ctx, ctx.path, { root: config.root });
    });
    return router;
}

module.exports = initialize_routes;
