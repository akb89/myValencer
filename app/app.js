const Koa = require('koa');
const cors = require('kcors');
const config = require('./config');
const views = require('koa-views');
const koaqs = require('koa-qs');
const router = require('./routes');
const path = require('path');

const public_path = path.resolve(path.join(config.root, 'public'));

let koa = new Koa();
koa = koaqs(koa, 'strict');
koa.use(cors());
koa.use(async (context, next) => {
    try {
        await next();
    } catch (err) {
        err.expose = true; // expose the error to the context;
        context.status = err.status || 500;
        context.body = { message: err.message, error: err.name, code: err.status };
    }
});

koa.use(views(public_path));
const koa_router = router();
koa.use(koa_router.routes());
koa.use(koa_router.allowedMethods());

process.on('message', (message) => {
    if (message === 'shutdown') {
        // performCleanup();
        process.exit(0);
    }
});

(async () => {
    try {
        console.log('Starting koalication...');
        await koa.listen(config.port);
        console.log(`myValencer started on port ${config.port}`);
        if (process.send) { process.send('online'); }
    } catch (err) {
        console.debug(err);
        process.exit(1);
    }
})();
