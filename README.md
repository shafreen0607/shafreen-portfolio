# Shafreen Syed Mohamed — Developer Portfolio

A modern, responsive, and interactive developer portfolio built using **React (Vite)** and **Tailwind CSS**, featuring a premium pastel pink UI, smooth animations, and real-world functionality including a live contact form and an interactive typewriting feature.

---

## 🚀 Live Demo

👉 *Add your deployed link here (Vercel / Netlify)*

---

## ✨ Features

- 🎨 Premium UI with pastel pink accent theme (`#F13E93`)
- 🌑 Dark navy background (`#0f172a`)
- 📱 Fully responsive — mobile, tablet, desktop
- ⚡ Smooth animations using Framer Motion
- ⌨️ Interactive **Typewriting (Junior Level)** — real keyboard input, WPM & accuracy tracking
- 📂 Backend-focused Projects showcase with metadata (API type, DB, role)
- 🏅 Certifications section with verified badges and skills gained
- 🎓 Education timeline with CGPA highlights
- 📬 Contact form with real email delivery via **EmailJS**
- 🔗 Clickable links — Phone, Email, LinkedIn

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (Vite) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Typewriter | react-simple-typewriter |
| Email | @emailjs/browser |

---

## 📁 Project Structure

```
shafreen-portfolio/
├── public/
│   └── shafreenresume.pdf       ← place your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx           ← includes Typewriting card
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx          ← EmailJS integration
│   │   ├── Footer.jsx
│   │   └── SectionWrapper.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                         ← gitignored, holds EmailJS keys
├── .env.example                 ← safe template, committed to git
├── .gitignore
├── vite.config.js
└── package.json
```

---

## 📬 EmailJS Setup (Contact Form)

This project uses **EmailJS** to send emails directly from the browser — no backend needed.

### 1. Create a `.env` file in the project root

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 2. EmailJS Template variables

Your template must use these exact variable names:

| Variable | Description |
|---|---|
| `{{user_name}}` | Sender's name |
| `{{user_email}}` | Sender's email (set as Reply-To) |
| `{{subject}}` | Message subject |
| `{{message}}` | Message body |

Set **To Email** to `shafreens06@gmail.com` in the template settings.

### ⚠️ Important

- Restart the dev server after creating or editing `.env`
- Never commit `.env` — it is already listed in `.gitignore`
- Use `.env.example` as a reference template for collaborators

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shafreen0607/shafreen-portfolio.git
cd shafreen-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
# then fill in your EmailJS credentials in .env
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build & Deploy

```bash
npm run build
```

Recommended platforms:

- **Vercel** (recommended — zero config for Vite)
- **Netlify**

> Add your `VITE_EMAILJS_*` environment variables in the platform's dashboard before deploying.

---

## 📸 Sections

| Section | Description |
|---|---|
| Hero | Name, title, typewriter subtitle, stats, avatar |
| About | Bio, highlights, quick facts |
| Skills | Programming, Web, Database, Tools + Typewriting card |
| Projects | Featured backend project + 2 smaller cards |
| Certifications | Verified badges, skills gained, dates |
| Education | Timeline — BCA, HSC, SSLC with scores |
| Contact | Cards + EmailJS contact form |

---

## 💡 Planned Improvements

- Add project filtering by tech stack
- Add blog / articles section
- Add dark / light mode toggle
- Add more typing practice prompts

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Shafreen Syed Mohamed**
📧 [shafreens06@gmail.com](mailto:shafreens06@gmail.com)
🔗 [linkedin.com/in/shafreen-syed-mohamed-06a7aa336](https://linkedin.com/in/shafreen-syed-mohamed-06a7aa336)
