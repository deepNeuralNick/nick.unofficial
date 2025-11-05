# Development Guide

## 🧪 Testing Your Website Locally

### Option 1: Simple HTTP Server (Recommended)
```bash
# Navigate to the website directory
cd /home/nick/personal_website

# Python 3
python3 -m http.server 8000

# Python 2 (if Python 3 not available)
python -m SimpleHTTPServer 8000

# Node.js (if you have npm installed)
npx http-server

# Then open: http://localhost:8000
```

### Option 2: Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Opening
- Simply double-click `index.html` to open in your default browser
- Note: Some features may not work due to CORS restrictions

## 🔧 File Structure Breakdown

### `index.html`
- Clean, semantic HTML structure
- Proper head section with meta tags and font links
- References to external CSS and JS files
- All inline styles and scripts removed

### `css/styles.css`
- Complete CSS extracted from original file
- Organized with clear comments
- Responsive design with media queries
- Modern CSS features (Grid, Flexbox, backdrop-filter)

### `js/script.js`
- All interactive functionality
- Modular function organization
- Event listeners and handlers
- Global function exports for HTML onclick handlers

## 🎨 Customization Tips

### Adding New Sections
1. Create HTML structure in `index.html`
2. Add corresponding navigation button
3. Update `showSection()` function if needed
4. Style in `css/styles.css`

### Modifying Colors
- Update CSS custom properties at the top of `styles.css`
- Or modify specific color values throughout the file

### Adding Animations
- CSS animations are defined in `styles.css`
- JavaScript animations can be added to `script.js`

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the entire folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Firebase Hosting**: Deploy with Firebase CLI

### Traditional Web Hosting
- Upload all files to your web server
- Ensure proper MIME types are set
- No server-side requirements needed

## 📱 Testing Responsiveness

### Browser Developer Tools
1. Open website in browser
2. Press F12 to open DevTools
3. Click device toggle button
4. Test different screen sizes

### Multiple Devices
- Test on actual phones, tablets, desktops
- Check different browsers (Chrome, Firefox, Safari, Edge)

## 🐛 Common Issues

### CSS Not Loading
- Check file paths in `index.html`
- Ensure `css/styles.css` exists
- Verify MIME type if using web server

### JavaScript Not Working
- Check browser console for errors
- Ensure `js/script.js` exists and is linked
- Verify function names match HTML onclick handlers

### Fonts Not Loading
- Check internet connection (Google Fonts require internet)
- Fallback fonts should work offline

## 🔍 Performance Tips

### Optimization
- Images should be optimized (webp format when possible)
- Consider minifying CSS and JS for production
- Enable gzip compression on web server

### Loading Speed
- Preload critical fonts
- Optimize images and compress them
- Use CDN for static assets if needed

---

Happy coding! 🚀