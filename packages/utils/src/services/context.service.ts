import type { Request } from '@helix-server/core';

class ContextService {
	private contexts: Map<string, any> = new Map();

	getContext({ headers }: Request): any {
		const requestId = headers.get('X-Request-ID') as string;
		if (!this.contexts.has(requestId)) {
			throw new Error('Context not found');
		}
		return this.contexts.get(requestId);
	}

	createContext({ headers }: Request): void {
		const requestId = headers.get('X-Request-ID') as string;
		if (this.contexts.has(requestId)) {
			throw new Error('Context already exists');
		}
		this.contexts.set(requestId, {});
	}

	updateContext(req: Request, key: string, value: any): void {
		const context = this.getContext(req);
		context[key] = value;
	}

	deleteContext({ headers }: Request): void {
		const requestId = headers.get('X-Request-ID') as string;
		if (!this.contexts.has(requestId)) {
			throw new Error('Context not found');
		}
		this.contexts.delete(requestId);
	}
}

const contextService: ContextService = new ContextService();
export default contextService;
