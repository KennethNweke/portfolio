# Kenneth Nweke — Personal Portfolio

A modern, dark-themed personal portfolio website for Kenneth Nweke — Cybersecurity & Networking Professional and Lecturer in Computing.

🔗 **Live Site:** [https://kennethnweke.github.io/portfolio](https://kennethnweke.github.io/portfolio) *(update with your actual GitHub Pages URL)*

---

## 📁 File Structure

```
portfolio-site/
│
├── index.html              # Home page — hero, about, skills, CTA
├── projects.html           # Projects grid page
├── project-openvas.html    # OpenVAS project detail page
│
├── css/
│   └── style.css           # All styles — variables, layout, components, responsive
│
├── js/
│   └── script.js           # Theme toggle, mobile nav, scroll animations, typewriter
│
├── images/
│   ├── profile.jpg         # Profile photo
│   └── project-thumbnails/ # (add project screenshots here)
│
└── README.md
```

---

## 🚀 Deploy to GitHub Pages

1. **Create a new repository** on GitHub (e.g. `portfolio` or your username as the repo name for `username.github.io`).

2. **Upload all files** from this folder to the repository root.

3. **Enable GitHub Pages:**
   - Go to **Settings → Pages**
   - Set **Source** to `main` branch, `/ (root)`
   - Click **Save**

4. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

---

## ✏️ Customisation

### Add Your Own Project Screenshots
Place images in `images/project-thumbnails/` and reference them in `projects.html`:
```html
<img src="images/project-thumbnails/my-project.png" alt="Project name" />
```

### Add a New Project Card
Copy a project card block in `projects.html`, update the content, and link to a new `project-X.html` file.

### Update the "Coming Soon" Cards
Replace the `card-coming-soon` cards with real project data when ready.

### Change Accent Colours
Edit the CSS variables in `css/style.css`:
```css
:root {
  --accent:  #00c8ff;   /* Primary accent colour */
  --accent2: #7c4dff;   /* Secondary accent colour */
}
```

---

## 🛠️ Technologies

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts** — Syne (display) + DM Sans (body) + JetBrains Mono (code)

---

## 📞 Contact

- **Email:** osinachiken@gmail.com
- **GitHub:** [github.com/KennethNweke](https://github.com/KennethNweke)
- **LinkedIn:** [linkedin.com/in/kenneth-nweke-4a9456185](https://www.linkedin.com/in/kenneth-nweke-4a9456185/)
