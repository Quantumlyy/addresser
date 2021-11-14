import { Enumerable } from '@sapphire/decorators';
import { SapphireClient } from '@sapphire/framework';
import type { ClientOptions } from 'discord.js';
import { ethers } from 'ethers';
import { GraphQLClient } from 'graphql-request';
import { chainID, chainName, infuraProjectID, infuraProjectSecret, uniswapV3SubgraphURL } from '../config';
import { SlashCommandStore } from './structures/slashCommands/SlashCommandStore';

export class AddresserClient extends SapphireClient {
	@Enumerable(false)
	public readonly provider = new ethers.providers.InfuraProvider(
		{
			name: chainName,
			chainId: chainID
		},
		{
			projectId: infuraProjectID,
			projectSecret: infuraProjectSecret
		}
	);

	@Enumerable(false)
	public readonly uniswap = new GraphQLClient(uniswapV3SubgraphURL);

	public constructor(options: ClientOptions) {
		super(options);

		this.stores.register(new SlashCommandStore());
	}
}
