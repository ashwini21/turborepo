import { OpenAPIHono } from 'https://esm.sh/@hono/zod-openapi@latest';
import { pinoLogger } from '@repo/pino-logger/index.js';
import { defaultHook } from "stoker/openapi";
import { internalServerErrorResponse, notFoundResponse } from './../utils/commonFunction.ts';

export function createRouter(){
    return new OpenAPIHono({ 
        strict: false,
        defaultHook
     });
}

export default function createApp(){
    const app = createRouter();
    app.use('*', pinoLogger);
    app.notFound(notFoundResponse);
    app.onError(internalServerErrorResponse);   
    return app;
}
