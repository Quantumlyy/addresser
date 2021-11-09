import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-api/register';
// import '@skyra/editable-commands/dist/index.mjs';
import * as colorette from 'colorette';
import { inspect } from 'util';

// Set default inspection depth
inspect.defaultOptions.depth = 1;

// Enable colorette
colorette.createColors({ useColor: true });
