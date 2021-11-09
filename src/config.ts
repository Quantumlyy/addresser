// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { z } from 'zod';

const tokenSchema = z.string();
export const token = tokenSchema.parse(process.env.DISCORD_TOKEN);

const defaultPrefixSchema = z
	.string()
	.default('!');
export const defaultPrefix = defaultPrefixSchema.parse(process.env.DEFAULT_PREFIX);

const chainNameSchema = z
	.string()
	.default('homestead');
export const chainName = chainNameSchema.parse(process.env.CHAIN_NAME);

const chainIDSchema = z.number().int().positive().default(1);
const chainIDParser = z
	.string()
	.optional()
	.transform((port) => (port === undefined ? undefined : Number(port)));
export const chainID = chainIDSchema.parse(chainIDParser.parse(process.env.CHAIN_ID));

const infuraProjectIDSchema = z.string();
export const infuraProjectID = infuraProjectIDSchema.parse(process.env.INFURA_PROJECT_ID);

const infuraProjectSecretSchema = z.string();
export const infuraProjectSecret = infuraProjectSecretSchema.parse(process.env.INFURA_PROJECT_SECRET);
