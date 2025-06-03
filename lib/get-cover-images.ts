import fs from 'fs'
import path from 'path'

export interface CoverImage {
  src: string
  alt: string
  width: number
  height: number
}

// This function runs at build time to get all images from the covers folder
export function getCoverImages(): CoverImage[] {
  const coversDirectory = path.join(process.cwd(), 'public', 'covers')
  
  try {
    const files = fs.readdirSync(coversDirectory)
    
    // Filter for image files and skip files starting with underscore
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']
    const imageFiles = files.filter(file => 
      !file.startsWith('_') && // Skip files starting with underscore
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
    )
    
    // Map to the format we need
    return imageFiles.map(filename => ({
      src: `/covers/${filename}`,
      alt: filename
        .replace(/\.[^/.]+$/, '') // Remove extension
        .replace(/[-_]/g, ' ') // Replace dashes/underscores with spaces
        .replace(/\b\w/g, l => l.toUpperCase()), // Capitalize first letter of each word
      // Default dimensions - you might want to read actual dimensions
      width: 1920,
      height: 1080
    }))
  } catch (error) {
    console.error('Error reading covers directory:', error)
    // Return fallback if directory doesn't exist
    return [{
      src: '/covers/default.jpg',
      alt: 'Default cover',
      width: 1920,
      height: 1080
    }]
  }
}