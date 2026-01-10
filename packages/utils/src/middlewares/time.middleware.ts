import { Middleware, type Ctx } from '@helix-server/core';
import { AllErrorHandler } from './all-error-handler.middleware';

export class Time extends Middleware {
	static override isGlobal = true;

	async handle(ctx: Ctx, next: () => Promise<void>): Promise<void> {
		const start = Date.now();
		await next();
		const end = Date.now();
		console.log(`[TIME]: ${end - start}ms`);
	}
}
