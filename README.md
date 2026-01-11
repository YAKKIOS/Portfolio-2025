# Minimal Portfolio

A clean, minimal portfolio website with smooth animations and interactive elements.

## Features

- **Homepage** with video expansion animation
- **Work page** showcasing all projects
- **About page** with tilted image carousel
- Fixed bottom navigation with expand/collapse
- JSON-based content management for easy editing
- Fully responsive design

## File Structure

```
Portfolio-2025/
├── index.html              # Homepage
├── work/
│   └── index.html          # Work page
├── about/
│   └── index.html          # About page
├── css/
│   └── style.css           # All styles
├── js/
│   ├── navbar.js           # Bottom navigation
│   ├── video-animation.js  # Homepage video animation
│   ├── image-carousel.js   # About page image carousel
│   ├── homepage.js         # Homepage data loading
│   ├── work.js             # Work page data loading
│   └── about.js            # About page data loading
├── data/
│   ├── projects.json       # Project data
│   └── content.json        # Experience, FAQs, writing
├── images/
│   ├── carousel/           # 6 carousel images
│   └── footer-image.jpg    # Footer image
└── videos/
    └── showreel.mp4        # Homepage video
```

## Customizing Content

### Projects (`data/projects.json`)

Edit this file to add/remove/modify your projects:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Project description",
  "role": "Your Role",
  "year": "2024",
  "image": "/images/project.jpg",
  "featured": true,  // Set to true to show on homepage
  "link": "#"
}
```

### About Content (`data/content.json`)

This file contains:
- **experience**: Your work history
- **faqs**: Questions and answers about you
- **writing**: External articles/posts
- **intro**: About page intro paragraphs

### Images

1. **Carousel images**: Add 6 images to `/images/carousel/` named `image-1.jpg` through `image-6.jpg`
2. **Project images**: Add project images to `/images/` and reference them in `projects.json`
3. **Footer image**: Add `/images/footer-image.jpg`

### Video

Add your showreel video as `/videos/showreel.mp4` (16:9 aspect ratio recommended)

## Design System

### Grid
- 12 columns
- 80px column width
- 16px gutter
- 944px max width
- Center aligned

### Typography
- **Body**: Inter, 16px/24px
- **Headings**: Inter, 18px/28px
- **Case Study Titles**: 28px, 32px
- **Script Font**: Pinyon Script, 40px/44px

### Colors
- Background: `#F5F5F0` (off-white/cream)
- Text: `#000000` (black)
- Accent: `#FFD4C8` (peach/salmon)
- White: `#FFFFFF`

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select branch and `/root` folder
4. Save

Your site will be available at `https://username.github.io/Portfolio-2025/`

### Custom Domain

In your repo settings, add your custom domain under GitHub Pages settings.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Optimized for performance

## Technologies

- HTML5
- CSS3 (CSS Custom Properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- JSON for content management

## License

Personal portfolio - all rights reserved
