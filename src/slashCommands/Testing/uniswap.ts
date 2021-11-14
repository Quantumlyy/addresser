import type { PieceContext } from '@sapphire/framework';
import { CommandInteraction, MessageEmbed } from 'discord.js';
import gql from 'graphql-tag';
import { SlashCommand } from '../../lib/structures/slashCommands/SlashCommandPiece';
import type { UniswapV3Response } from '../../lib/types/subgraphs';
import { ethPriceUSD } from '../../lib/utils/ethPrice';

export class InteractionCommand extends SlashCommand {
	public constructor(context: PieceContext) {
		super(context, {
			name: 'uniswap',
			description: 'Shows the price of an ERC20 token according to Uniswap',
			options: [{ name: 'symbol', description: 'Target asset', required: true, type: 'STRING' }],
			guildOnly: false
		});
	}

	public async interactionRun(interaction: CommandInteraction) {
		await interaction.deferReply();

		const symbol = interaction.options.getString('symbol', true).toUpperCase();

		const { tokens } = await this.container.client.uniswap.request<UniswapV3Response<'tokens'>>(InteractionCommand.TOKEN, { symbol });
		if (tokens.length === 0) return interaction.editReply(`Could not find token matching the symbol \`${symbol}\``);
		const token = tokens[0];

		const ethPrice = await ethPriceUSD(this.container.client.provider);

		const response = new MessageEmbed()
			.setTitle(`${token.symbol}USD`)
			.setDescription(`$${token.derivedETH as number * ethPrice} USD`);

		return interaction.editReply({ embeds: [response] });
	}

	public static TOKEN = gql`
		query Token($symbol: String!) {
			tokens(where: { symbol: $symbol }, first: 1, orderBy: totalValueLockedUSD, orderDirection: desc) {
				id
				name
				symbol
				derivedETH
			}
		}
	`;
}
