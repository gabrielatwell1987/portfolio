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

// Allowed images for security
const ALLOWED_IMAGES = ['svelteCode.webp', 'atwellUI.webp'];

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
		return { success: true, message: `Created ${outputPath}` };
	} catch (error) {
		console.error(`❌ Error creating ${outputPath}:`, error.message);
		return { success: false, error: error.message };
	}
}

async function createResponsiveVersions(imageName) {
	if (!ALLOWED_IMAGES.includes(imageName)) {
		return { success: false, error: 'Image not allowed' };
	}

	const inputPath = path.join(LOGOS_DIR, imageName);

	// Check if source file exists
	try {
		await fs.access(inputPath);
	} catch {
		return { success: false, error: `Source file not found: ${inputPath}` };
	}

	console.log(`🔄 Processing ${imageName}...`);
	const results = [];

	for (const breakpoint of BREAKPOINTS) {
		const fileName = path.parse(imageName);
		const outputName = `${fileName.name}${breakpoint.suffix}${fileName.ext}`;
		const outputPath = path.join(LOGOS_DIR, outputName);

		const result = await optimizeImage(inputPath, outputPath, breakpoint.width);
		results.push(result);
	}

	return { success: true, results };
}

// Remote function for client calls
export async function optimizeImages(imageName) {
	const result = await createResponsiveVersions(imageName);
	return result;
}
