const Router = require('koa-router');

function initialize_routes() {
    const router = new Router();
    router.get('/machine/:mac', async (ctx) => {
        await ctx.render('front/views/front');
    });
    router.get('/desk/:mac', async (ctx) => {
        await ctx.render('front/views/front');
    });
    router.get('/screen/:mac', async (ctx) => {
        await ctx.render('front/views/front');
    });

    return router;
}

module.exports = initialize_routes;
