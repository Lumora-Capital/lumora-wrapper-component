declare module 'js-cookie' {
	interface CookiesStatic {
		get(name?: string): string | undefined;
		set(name: string, value: string, options?: unknown): string | undefined;
		remove(name: string, options?: unknown): void;
	}
	const Cookies: CookiesStatic;
	export default Cookies;
}
