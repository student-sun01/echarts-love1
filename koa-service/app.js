const Koa = require("koa");
const app = new Koa();

// 2.编写响应函数(中间件)
// 绑定第一层中间件
const respDurationMiddleware = require("./middleware/koa_response_duration");
app.use(respDurationMiddleware);
// 绑定第二层中间件
const respHeaderMiddleware = require("./middleware/koa_response_header");
app.use(respHeaderMiddleware);
// 绑定第三层中间件
const respDataMiddleware = require("./middleware/koa_response_data");
app.use(respDataMiddleware);
app.listen(8888);

const webSocketService = require("./service/web_socket_service");
webSocketService.listen();
