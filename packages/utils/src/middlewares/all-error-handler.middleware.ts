import { Middleware, type Ctx } from '@helix-server/core';

export class AllErrorHandler extends Middleware {
	static override isGlobal = true;

	async handle(ctx: Ctx, next: () => Promise<void>): Promise<void> {
		await next();
	}
}
