import metadataJson from './aria-metadata.json' assert { type: 'json' };
import type { PropertyMetadata } from './types';

export const metadata = metadataJson as PropertyMetadata[];
