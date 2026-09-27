/**
 * Build-time image measurement for images referenced by path from content
 * files. next/image needs explicit width/height for string sources.
 */
import path from "path";
import sharp from "sharp";

// Fallback used when an image cannot be measured, so a bad image never breaks a build.
const FALLBACK_IMAGE_WIDTH = 1200;
const FALLBACK_IMAGE_HEIGHT = 630;

const imageDimensionCache = new Map();

/**
 * Intrinsic image dimensions, measured once per build and memoised.
 */
export async function getImageDimensions(imagePath) {
  const fallback = { width: FALLBACK_IMAGE_WIDTH, height: FALLBACK_IMAGE_HEIGHT };

  if (!imagePath || /^https?:\/\//i.test(imagePath)) return fallback;
  if (imageDimensionCache.has(imagePath)) return imageDimensionCache.get(imagePath);

  let dimensions = fallback;
  try {
    const filePath = path.join(process.cwd(), "public", imagePath.replace(/^\/+/, ""));
    const { width, height } = await sharp(filePath).metadata();
    if (width && height) dimensions = { width, height };
  } catch {
    // Keep the fallback - a missing or unreadable image should not fail the build.
  }

  imageDimensionCache.set(imagePath, dimensions);
  return dimensions;
}
