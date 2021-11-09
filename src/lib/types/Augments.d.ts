import type { BaseProvider } from "@ethersproject/providers";

declare module 'discord.js' {
	interface Client {
		readonly provider: BaseProvider;
	}
}
