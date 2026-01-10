import { Middleware, type Ctx } from '@helix-server/core';
import { CreateRequestId } from './create-request-id.middleware';
import contextService from '../services/context.service';

export class CreateRequestContext extends Middleware {
	static override isGlobal = true;
	static override depends: (typeof CreateRequestId)[] = [CreateRequestId];

	async handle(ctx: Ctx, next: () => Promise<void>): Promise<void> {
		contextService.createContext(ctx.req);
		await next();
		contextService.deleteContext(ctx.req);
	}
}
