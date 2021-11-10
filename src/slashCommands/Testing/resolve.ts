import type { PieceContext } from '@sapphire/framework';
import type { CommandInteraction } from 'discord.js';
import { SlashCommand } from '../../lib/structures/slashCommands/SlashCommandPiece';

export class InteractionCommand extends SlashCommand {
	public constructor(context: PieceContext) {
		super(context, {
			name: 'assets',
			description: "Shows a address' ERC721 assets",
			options: [{ name: 'address', description: 'Target address', required: true, type: 'STRING' }],
			guildOnly: false
		});
	}

	public async interactionRun(interaction: CommandInteraction) {
		await interaction.deferReply();

		const addressInput = interaction.options.getString('address', true);

		console.log(this.container.client.provider);
		console.log(await this.container.client.provider.resolveName(addressInput));
	}
}
