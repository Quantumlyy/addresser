import { Args, Command, CommandOptions, PieceContext } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class UserCommand extends Command {
	public constructor(context: PieceContext, options: CommandOptions) {
		super(context, {
			...options
		});
	}

	public async messageRun(_: Message, args: Args) {
		const addressInput = await args.pick('string');

		console.log(this.container.client.provider);
		console.log(await this.container.client.provider.resolveName(addressInput));
	}
}
