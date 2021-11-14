import type { Query } from '@subgraphs/uniswap-v3';

export type UniswapV3Response<K extends keyof Omit<Query, '__typename'>> = Record<K, Omit<Query[K], '__typename'>>;
