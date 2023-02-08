(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/router.js", {

"[project-with-next]/router.js (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>route
});
var __TURBOPACK__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$ipc$2f$server$2e$ts__ = __turbopack_import__("[project-with-next]/[embedded_modules]/@vercel/turbopack-next/ipc/server.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$entry$2f$config$2f$next$2e$js__ = __turbopack_import__("[project-with-next]/[embedded_modules]/@vercel/turbopack-next/entry/config/next.js (ecmascript)");
var __TURBOPACK__external__next$2f$dist$2f$server$2f$node$2d$polyfill$2d$fetch$2e$js__ = __turbopack_external_require__("next/dist/server/node-polyfill-fetch.js", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
let resolveRouteMemo;
async function getResolveRoute(dir) {
    const { makeResolver  } = await import("next/dist/server/router.js");
    const nextConfig = await __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$entry$2f$config$2f$next$2e$js__["default"]();
    return await makeResolver(dir, nextConfig);
}
async function route(ipc, routerRequest, dir) {
    const [resolveRoute, server] = await Promise.all([
        resolveRouteMemo ??= getResolveRoute(dir),
        __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$ipc$2f$server$2e$ts__["createServer"]()
    ]);
    try {
        const { clientRequest , clientResponsePromise , serverRequest , serverResponse  } = await __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f5b$embedded_modules$5d2f40$vercel$2f$turbopack$2d$next$2f$ipc$2f$server$2e$ts__["makeRequest"](server, routerRequest.method, routerRequest.pathname, routerRequest.query, routerRequest.headers);
        clientRequest.end();
        const [_, response] = await Promise.all([
            resolveRoute(serverRequest, serverResponse),
            handleClientResponse(ipc, clientResponsePromise)
        ]);
        server.close();
        return response;
    } catch (e) {
        ipc.sendError(e);
    }
}
async function handleClientResponse(_ipc, clientResponsePromise) {
    const clientResponse = await clientResponsePromise;
    if (clientResponse.headers["x-nextjs-route-result"] === "1") {
        clientResponse.setEncoding("utf8");
        let buffer = "";
        for await (const chunk of clientResponse){
            buffer += chunk;
        }
        const data = JSON.parse(buffer);
        return {
            type: "rewrite",
            data: {
                url: data.url,
                headers: Object.entries(data.headers).flat()
            }
        };
    }
    const responseHeaders = {
        statusCode: clientResponse.statusCode,
        headers: clientResponse.rawHeaders
    };
    const buffers = [];
    for await (const chunk of clientResponse){
        buffers.push(chunk);
    }
    return {
        type: "full-middleware",
        data: {
            headers: responseHeaders,
            body: __TURBOPACK__external__node$3a$buffer__["Buffer"].concat(buffers).toJSON().data
        }
    };
}

})()),
"[project-with-next]/[embedded_modules]/@vercel/turbopack-next/ipc/server.ts (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "createServer": ()=>createServer,
    "makeRequest": ()=>makeRequest
});
var __TURBOPACK__external__node$3a$http__ = __turbopack_external_require__("node:http", true);
var __TURBOPACK__external__node$3a$querystring__ = __turbopack_external_require__("node:querystring", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function createServer() {
    return new Promise((resolve)=>{
        const server = __TURBOPACK__external__node$3a$http__["default"].createServer();
        server.listen(0, ()=>{
            resolve(server);
        });
    });
}
function makeRequest(server, method, path, query, headers) {
    return new Promise((resolve, reject)=>{
        let clientRequest = null;
        let clientResponseResolve;
        let clientResponseReject;
        const clientResponsePromise = new Promise((resolve, reject)=>{
            clientResponseResolve = resolve;
            clientResponseReject = reject;
        });
        let serverRequest = null;
        let serverResponse = null;
        const maybeResolve = ()=>{
            if (clientRequest != null && serverRequest != null && serverResponse != null) {
                cleanup();
                resolve({
                    clientRequest,
                    clientResponsePromise,
                    serverRequest,
                    serverResponse
                });
            }
        };
        const cleanup = ()=>{
            server.removeListener("error", errorListener);
            server.removeListener("request", requestListener);
        };
        const errorListener = (err)=>{
            cleanup();
            reject(err);
        };
        const requestListener = (req, res)=>{
            serverRequest = req;
            serverResponse = res;
            maybeResolve();
        };
        const cleanupClientResponse = ()=>{
            if (clientRequest != null) {
                clientRequest.removeListener("response", responseListener);
                clientRequest.removeListener("error", clientResponseErrorListener);
            }
        };
        const clientResponseErrorListener = (err)=>{
            cleanupClientResponse();
            clientResponseReject(err);
        };
        const responseListener = (res)=>{
            cleanupClientResponse();
            clientResponseResolve(res);
        };
        server.once("request", requestListener);
        server.once("error", errorListener);
        const address = server.address();
        clientRequest = __TURBOPACK__external__node$3a$http__["default"].request({
            host: "localhost",
            port: address.port,
            method,
            path: query && Object.keys(query).length > 0 ? `${path}?${__TURBOPACK__external__node$3a$querystring__["default"].stringify(query)}` : path,
            headers
        });
        clientRequest.flushHeaders();
        clientRequest.once("response", responseListener);
        clientRequest.once("error", clientResponseErrorListener);
    });
}

})()),
"[project-with-next]/[embedded_modules]/@vercel/turbopack-next/entry/config/next.js (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>loadNextConfig
});
var __TURBOPACK__external__next$2f$dist$2f$server$2f$config__ = __turbopack_external_require__("next/dist/server/config", true);
var __TURBOPACK__external__next$2f$dist$2f$shared$2f$lib$2f$constants__ = __turbopack_external_require__("next/dist/shared/lib/constants", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const loadNextConfig = async ()=>{
    const nextConfig = await __TURBOPACK__external__next$2f$dist$2f$server$2f$config__["default"](__TURBOPACK__external__next$2f$dist$2f$shared$2f$lib$2f$constants__["PHASE_DEVELOPMENT_SERVER"], process.cwd());
    nextConfig.generateBuildId = await nextConfig.generateBuildId?.();
    nextConfig.exportPathMap = nextConfig.exportPathMap && {};
    nextConfig.webpack = nextConfig.webpack && {};
    return nextConfig;
};
;

})()),
}]);


//# sourceMappingURL=router.js.map