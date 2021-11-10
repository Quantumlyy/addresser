import type { BaseProvider } from "@ethersproject/providers";
import type { SlashCommandStore } from "../structures/slashCommands/SlashCommandStore";

declare module 'discord.js' {
	interface Client {
		readonly provider: BaseProvider;
	}
}

declare module '@sapphire/framework' {
	interface StoreRegistryEntries {
		slashCommands: SlashCommandStore
	}
}
