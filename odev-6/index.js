const Koa = require('koa');
const Router = require('koa-router');
const { nextTick } = require('process');

const app = new Koa();
const router = new Router();

router.get('/hakkimda', (ctx, next) => {
    ctx.body = "<h2>Hakkimda Sayfasin Hosgeldiniz</h2>"
});

router.get('/iletisim', (ctx, next) => {
    ctx.body = "<h2>Iletisim Sayfasin Hosgeldiniz</h2>"
});

router.get('/', (ctx, next) => {
    ctx.body = "<h2>Anasayfa</h2>"
});

app.use(router.routes());

app.listen(3000);