import type { BaseProvider } from "@ethersproject/providers";
import type { GraphQLClient } from "graphql-request";
import type { SlashCommandStore } from "../structures/slashCommands/SlashCommandStore";

declare module 'discord.js' {
	interface Client {
		readonly provider: BaseProvider;
		readonly uniswap: GraphQLClient;
	}
}

declare module '@sapphire/framework' {
	interface StoreRegistryEntries {
		slashCommands: SlashCommandStore
	}
}
