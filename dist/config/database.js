"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: env('DATABASE_CLIENT', 'mysql'),
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 3306),
            database: env('DATABASE_NAME', 'strapi-blog'),
            user: env('DATABASE_USERNAME', 'root'),
            password: env('DATABASE_PASSWORD', '1'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
