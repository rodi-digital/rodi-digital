import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';

// Create the reader instance for server-side content fetching
export const reader = createReader(process.cwd(), keystaticConfig);
