# Image Optimization Instructions

To fix the Lighthouse "Properly size images" audit, we need to create responsive versions of the large images.

## Current Issues:

- `svelteCode.webp` is 247KB (241.4 KiB) - potential savings: 211 KiB
- Images loading at full resolution on all screen sizes

## Solution:

Create responsive versions of key images:

### For svelteCode.webp:

1. **480px width** (for mobile) - Quality 75-80%
2. **768px width** (for tablet) - Quality 80-85%
3. **1200px width** (for desktop) - Quality 85-90%

### Tools to use:

- **Online**: TinyPNG, Squoosh.app, or Cloudinary
- **Command line**: `cwebp` (WebP encoder)
- **Apps**: ImageOptim (Mac), FileOptimizer (Windows)

### Commands (if using cwebp):

```bash
# Create 480px version
cwebp -q 75 -resize 480 0 svelteCode.webp -o svelteCode-480w.webp

# Create 768px version
cwebp -q 80 -resize 768 0 svelteCode.webp -o svelteCode-768w.webp

# Create optimized 1200px version
cwebp -q 85 svelteCode.webp -o svelteCode-1200w.webp
```

### File size targets:

- 480px version: ~15-25KB
- 768px version: ~30-50KB
- 1200px version: ~80-120KB

## Already Updated:

✅ AboutHero component now uses responsive srcset
✅ Image components reduced from width="1200" to width="800"
✅ CSS containment added to prevent layout shifts
✅ Lazy loading and proper aspect ratios implemented

## Next Steps:

1. Create the responsive image versions
2. Upload them to `/static/logos/` directory
3. Test the responsive loading behavior
4. Run Lighthouse audit to confirm improvements

Expected improvements:

- Performance score: +15-20 points
- CLS score: Reduced from 0.528 to <0.1
- Image size savings: 150-200KB reduction
