# Tantain-Frontend
# testing
This repository contains the code for the new website project of Tanta Innovative Limited.

## Best Practices

1. **Dynamic Imports**: Use dynamic imports to reduce the initial load time and the overall bundle size of the application. Example usage:

```javascript
import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() => import('../components/LoginButton'))
```

2. **Caching**: Cache frequently used content to improve response times.

3. **Image Optimization**: Reduce the size of image files as they are one of the biggest assets that can weigh down your app’s performance. Example usage:

```javascript
import Image from 'next/image'
```

4. **Script Optimization**: Optimize your scripts for better performance. Example usage:

```javascript
import Script from 'next/script'
```

## Git Workflow

1. Pull the latest changes from the develop branch: `git pull`
2. Stage your changes: `git add .`
3. Commit your changes: `git commit -m "task description"`
4. Push your changes to the develop branch: `git push origin developer`

## Directory Structure

1. **Assets**: The global assets folder (`tantain-fontend/assets`) contains image folders for each page (e.g., Home page).
2. **Components**: The global components folder (`tantain-fontend/components`) contains a folder for each page (e.g., Home, Contact Us, Leadership, Case Study).
3. **Page Folders**: Each page folder (`tantain-fontend/components/page_folder`) contains `style.js`, `file.jsx`, `portfolio.js`, and any other components needed for that page (e.g., Home, Leadership, Contact Us, Case Studies, Careers, About).
4. **Styles**: Use the styles directory in components when you need to call a CSS class.
