# 🛠️ Contributing Guide  

Welcome to **Hackershhh Web**! We appreciate your interest in contributing.  

## 🚀 First-Time Setup  

### Prerequisites  
- VS Code (or any editor)  
- Live Server extension (for local testing)  

### Installation  
```bash  
git clone https://github.com/eduolihez/hackershhh-website.git  
cd hackershhh-website  
```  

## 🔄 Development Workflow  

### Branch Naming  
| Type     | Format                | Example                     |  
|----------|-----------------------|-----------------------------|  
| Feature  | `feat/short-description` | `feat/dark-mode-animation`  |  
| Bug Fix  | `fix/issue-description` | `fix/mobile-menu-overflow`  |  
| Docs     | `docs/topic-updated`     | `docs/contributing-update`  |  

### Coding Standards  
1. **HTML**  
   - Use semantic tags (`<header>`, `<section>`, etc.)  
   - Add `aria-labels` for accessibility  

2. **CSS**  
   - Follow BEM naming convention (`.block__element--modifier`)  
   - Use CSS variables for colors (see `docs/STYLE_GUIDE.md`)  

3. **JavaScript**  
   - ES6+ syntax required  
   - Add JSDoc comments for functions:  
     ```javascript  
     /**  
      * Toggles dark/light theme  
      * @param {boolean} isDarkMode - Target theme state  
      */  
     function toggleTheme(isDarkMode) { ... }  
     ```  

## 🧪 Testing  

### Mandatory Checks  
1. **HTML Validation**  
   - Use [W3C Validator](https://validator.w3.org/)  

2. **Responsiveness**  
   - Test all breakpoints:  
     - Mobile (≤768px)  
     - Tablet (769px - 1024px)  
     - Desktop (≥1025px)  

3. **Performance**  
   - Run Lighthouse audit (Chrome DevTools)  
   - Minimum scores:  
     - Performance: 90+  
     - Accessibility: 100  

## 📤 Submitting Changes  

### Commit Messages  
Follow [Conventional Commits](https://www.conventionalcommits.org/):  
```bash  
git commit -m "feat: add dark mode toggle animation"  
git commit -m "fix: resolve contact form submission bug"  
```  

### Pull Request Process  
1. Link your PR to an existing issue  
2. Include screenshots/GIFs for UI changes  
3. Wait for 2 maintainers to approve  

## 🐛 Reporting Issues  
Use our [Issue Template](.github/ISSUE_TEMPLATE/ISSUE_TEMPLATE.md). For security issues, see [SECURITY.md](SECURITY.md).  

## 💬 Community  
- Be respectful - read our [Code of Conduct](CODE_OF_CONDUCT.md)  
- Need help? Join our [Discussions](https://github.com/eduolihez/hackershhh-website/discussions)  

---

🙌 **Thank you for making cybersecurity more accessible!**  