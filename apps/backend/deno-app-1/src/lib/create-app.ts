import { OpenAPIHono } from 'https://esm.sh/@hono/zod-openapi@latest';
import { pinoLogger } from '../middleware/pino-logger.ts';
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
    // app.use('*', pinoLogger);
    app.notFound(notFoundResponse);
    app.onError(internalServerErrorResponse);   
    // app.onError((err, c) => {
    //   if (err instanceof ZodError) {
    //     const formattedError = formatZodError(err);
    //     return c.json(formattedError, 400);
    //   }
    //   return c.json({ success: false, message: err.message }, 500);
    // });
    return app;
}
