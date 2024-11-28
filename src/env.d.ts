/// <reference path="../.astro/types.d.ts" />

/// <reference types="astro/client" />
declare namespace App {
    interface Locals {
        session: import('./lib/server/auth').Session | null;
        user: import('./lib/server/db').User | null;
    }
}
