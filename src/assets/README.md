# Asset Folders

This directory contains all the assets used in the portfolio:

## 📁 Folder Structure

### `/images/`
Place your images here:
- **Profile photos**: `profile.jpg`, `profile-alt.jpg`
- **Project screenshots**: `projects/project-name.jpg`
- **Background images**: `backgrounds/`
- **Icons and logos**: `logos/`

**Recommended formats:**
- Photos: JPG/JPEG (optimized for web)
- Graphics: PNG (with transparency)
- Icons: SVG (scalable)

**Recommended sizes:**
- Profile photos: 400x400px minimum
- Project screenshots: 1200x800px
- Thumbnails: 300x200px

### `/icons/`
Custom SVG icons and vector graphics:
- Company logos
- Custom illustrations
- Technical skill icons
- Social media icons

### `/documents/`
PDF files and other documents:
- **Resume**: `Mohammed_Azab_Resume.pdf`
- **Certificates**: `certificates/`
- **Portfolio documents**: `portfolio/`

## 🎨 Image Guidelines

### Quality
- Use high-resolution images (2x for retina displays)
- Optimize file sizes (use tools like TinyPNG)
- Consider WebP format for better compression

### Naming Convention
- Use descriptive, lowercase filenames
- Replace spaces with hyphens
- Include relevant keywords

**Examples:**
- `robotic-arm-project-hero.jpg`
- `iot-automation-dashboard.png`
- `mechatronics-engineering-certificate.pdf`

### Accessibility
- Provide alt text for all images
- Use descriptive filenames
- Ensure good contrast ratios

## 📋 To-Do: Add Your Assets

1. **Profile Photo**: Add a professional headshot as `images/profile.jpg`
2. **Project Screenshots**: Add images for each project in `images/projects/`
3. **Resume**: Upload your latest resume as `documents/Mohammed_Azab_Resume.pdf`
4. **Certificates**: Add any relevant certificates in `documents/certificates/`
5. **Company Logos**: Add logos of companies you've worked with in `icons/`

## 🔧 Image Optimization Tools

- **Online**: TinyPNG, Squoosh, ImageOptim
- **CLI**: imagemin, sharp
- **Design**: Figma, Adobe Photoshop, GIMP

Remember to update the corresponding data files (`/src/data/projects.js`, `/src/config/config.js`) with the correct asset paths!
