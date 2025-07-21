// Image optimization script
// This script can be used to create responsive versions of images

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const STATIC_DIR = './static';
const LOGOS_DIR = path.join(STATIC_DIR, 'logos');

// Define responsive breakpoints
const BREAKPOINTS = [
	{ width: 480, suffix: '-480w' },
	{ width: 768, suffix: '-768w' },
	{ width: 1200, suffix: '-1200w' }
];

async function optimizeImage(inputPath, outputPath, width, quality = 85) {
	try {
		await sharp(inputPath)
			.resize(width, null, {
				withoutEnlargement: true,
				fit: 'inside'
			})
			.webp({ quality })
			.toFile(outputPath);

		console.log(`✅ Created ${outputPath} (${width}px wide)`);
	} catch (error) {
		console.error(`❌ Error creating ${outputPath}:`, error.message);
	}
}

async function createResponsiveVersions(imageName) {
	const inputPath = path.join(LOGOS_DIR, imageName);

	// Check if source file exists
	try {
		await fs.access(inputPath);
	} catch {
		console.error(`❌ Source file not found: ${inputPath}`);
		return;
	}

	console.log(`🔄 Processing ${imageName}...`);

	for (const breakpoint of BREAKPOINTS) {
		const fileName = path.parse(imageName);
		const outputName = `${fileName.name}${breakpoint.suffix}${fileName.ext}`;
		const outputPath = path.join(LOGOS_DIR, outputName);

		await optimizeImage(inputPath, outputPath, breakpoint.width);
	}
}

// Optimize specific images that cause performance issues
const IMAGES_TO_OPTIMIZE = ['svelteCode.webp', 'atwellUI.webp'];

async function main() {
	console.log('📸 Starting image optimization...\n');

	for (const imageName of IMAGES_TO_OPTIMIZE) {
		await createResponsiveVersions(imageName);
		console.log(''); // Empty line for readability
	}

	console.log('✨ Image optimization complete!');
}

// Run if this script is executed directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
	main().catch(console.error);
}

export { createResponsiveVersions, optimizeImage };
