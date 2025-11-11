# Profile Showcase

A modern, minimalistic React landing page showcasing my professional profile as a Tech Leader, Solution Architect, and .NET Senior Developer.

## 🚀 Features

- **Modern Design** - Clean, minimalistic, and professional interface
- **Dark Mode** - Toggleable dark/light theme with system preference detection
- **Responsive** - Fully responsive design that works on all devices
- **Interactive** - Smooth animations and transitions
- **Performance Optimized** - Fast loading and optimized for web performance
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **React** - Frontend framework
- **CSS3** - Modern styling with Grid and Flexbox
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)
- **GitHub Pages** - Hosting

## 📁 Project Structure

```
profile-showcase/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js/.css
│   │   ├── Hero.js/.css
│   │   ├── About.js/.css
│   │   ├── Skills.js/.css
│   │   ├── Projects.js/.css
│   │   ├── Contact.js/.css
│   │   └── Footer.js/.css
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🌙 Dark Mode

The application includes a sophisticated dark mode implementation:

- **Theme Toggle** - Button in the header to switch between light and dark modes
- **System Detection** - Automatically detects user's system theme preference
- **Persistent** - Remembers user's theme choice in localStorage
- **Smooth Transitions** - Animated theme switching
- **Complete Coverage** - All components and elements support both themes

### Theme Implementation

The dark mode is implemented using:
- React Context API (`ThemeContext`)
- CSS custom properties (CSS variables)
- `data-theme` attribute on document root
- localStorage for persistence

## 🎨 Sections

1. **Header** - Fixed navigation with smooth scroll
2. **Hero** - Introduction with animated elements
3. **About** - Professional background and philosophy
4. **Skills** - Technical and leadership skills with animated progress bars
5. **Projects** - Featured and categorized project showcase
6. **Contact** - Contact form and social links
7. **Footer** - Additional links and information

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/profile-showcase.git
cd profile-showcase
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/profile-showcase"
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## ⚙️ Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.js` - Name, title, and description
- `src/components/About.js` - Professional background and achievements
- `src/components/Skills.js` - Your technical and soft skills
- `src/components/Projects.js` - Your projects and work
- `src/components/Contact.js` - Contact information and social links
- `src/components/Footer.js` - Footer information
- `public/index.html` - Meta tags and title

### Styling

The project uses CSS custom properties (CSS variables) defined in `src/App.css`. You can easily customize colors by updating these variables:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... other variables */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Update the navigation in `src/components/Header.js`

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

## 📱 Browser Support

This project supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## 📞 Contact

Gianluca Colombo - [colombo.gg@outlook.com](mailto:colombo.gg@outlook.com)

Project Link: [https://github.com/ggcol/is-gian](https://github.com/ggcol/is-gian)

---

⭐ If you found this project helpful, please give it a star on GitHub!