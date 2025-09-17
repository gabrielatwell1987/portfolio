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
		return { success: true, message: `Created ${outputPath}` };
	} catch (error) {
		console.error(`❌ Error creating ${outputPath}:`, error.message);
		return { success: false, error: error.message };
	}
}

async function createResponsiveVersions(imageName) {
	// Check if the imageName ends with .webp and exists in LOGOS_DIR
	if (!imageName.endsWith('.webp')) {
		return { success: false, error: 'Only .webp images are allowed' };
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

async function getAllowedImages() {
	try {
		const files = await fs.readdir(LOGOS_DIR);
		return files.filter((file) => file.endsWith('.webp'));
	} catch {
		return [];
	}
}

// New batch function
export async function optimizeAllImages() {
	const images = await getAllowedImages();
	const allResults = [];
	for (const image of images) {
		const result = await createResponsiveVersions(image);
		allResults.push({ image, ...result });
	}
	return { success: true, results: allResults };
}

// Remote function for client calls
export async function optimizeImages(imageName) {
	const result = await createResponsiveVersions(imageName);
	return result;
}
