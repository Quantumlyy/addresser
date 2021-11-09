import { Enumerable } from '@sapphire/decorators';
import { SapphireClient } from '@sapphire/framework';
import { ethers } from 'ethers';
import { chainID, chainName, infuraProjectID, infuraProjectSecret } from '../config';

export class AddresserClient extends SapphireClient {
	@Enumerable(false)
	public provider = new ethers.providers.InfuraProvider(
		{
			name: chainName,
			chainId: chainID
		},
		{
			projectId: infuraProjectID,
			projectSecret: infuraProjectSecret
		}
	);
}
