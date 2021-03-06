import {Server} from 'restify';

export interface SwaggerPageOptions {
    title: string;
    version: string;
    server: Server;
    path: string;
    apis: string[];
    routePrefix?: string;
    forceSecure?: boolean;
}
export function createSwaggerPage(options: SwaggerPageOptions): void;
