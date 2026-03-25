<div align="center">

# 🕌 ISLAMIQ

**A Minimal, Fast & Accessible Quran Companion**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-ISLAMIQ-00D9FF?style=for-the-badge)](https://islamiq.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Anas-Sd/islamiq?style=for-the-badge&color=gold)](https://github.com/Anas-Sd/islamiq)

> Instantly retrieve Qur'an verses with a clean, distraction-free reading experience.

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel&logoColor=white)
![API](https://img.shields.io/badge/API-AlQuran_Cloud-10B981?style=flat-square&logo=cloud&logoColor=white)

</div>

---

## 📖 About

**ISLAMIQ** is a lightweight, API-driven Quran companion built for fast verse access with a clean, distraction-free reading experience. Retrieve Qur'an content instantly using structured references — Surah, Surah:Aayah, or Ruku.



### 💡 Why ISLAMIQ?

| Problem | Solution |
|---------|----------|
| Most Quran apps are bloated with features | A **minimal, fast** interface focused purely on reading |
| Slow verse lookup experiences | **Instant retrieval** via structured API calls |
| Poor mobile reading experience | **Mobile-first**, typography-optimized design |

---

## ✨ Features

<table>
<tr><td>⚡</td><td><b>Instant Verse Retrieval</b></td><td>Fetch verses in milliseconds via AlQuran Cloud API</td></tr>
<tr><td>🔎</td><td><b>Structured Search</b></td><td>Search by Surah, Surah:Aayah, or Ruku reference</td></tr>
<tr><td>📖</td><td><b>Uthmani Script</b></td><td>Beautiful Arabic text rendering in Uthmani script</td></tr>
<tr><td>🌍</td><td><b>English Translation</b></td><td>Optional translation support for accessibility</td></tr>
<tr><td>📱</td><td><b>Mobile-First</b></td><td>Fully responsive, optimized for on-the-go reading</td></tr>
<tr><td>🎯</td><td><b>Clean Animations</b></td><td>Smooth Framer Motion transitions for polished UX</td></tr>
</table>

---

## 🏗️ System Architecture

```
┌──────────────┐     ┌──────────────────┐     ┌───────────────────┐
│  User Input  │ ──▶ │  React Frontend  │ ──▶ │  AlQuran Cloud    │
│  (Surah/Ayah)│     │  (Validate &     │     │  REST API         │
└──────────────┘     │   Format)        │     └───────┬───────────┘
                     └────────┬─────────┘             │
                              │◀──────────────────────┘
                              ▼
                     ┌──────────────────┐
                     │  Render Response │
                     │  (Motion + UI)   │
                     └──────────────────┘
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><b>⚛️ Frontend</b></td>
<td align="center"><b>🎨 Styling</b></td>
<td align="center"><b>📡 Data Source</b></td>
<td align="center"><b>🚀 Deployment</b></td>
</tr>
<tr>
<td align="center">React.js<br>Framer Motion</td>
<td align="center">Tailwind CSS</td>
<td align="center">AlQuran Cloud<br>REST API</td>
<td align="center">Vercel<br>(CI/CD)</td>
</tr>
</table>

---

## 🔎 Input Format

<table>
<tr><th>Input</th><th>Output</th><th>Example</th></tr>
<tr><td><code>1</code></td><td>Full Surah</td><td>Surah Al-Fatiha</td></tr>
<tr><td><code>2:255</code></td><td>Specific Ayah</td><td>Ayat-ul-Kursi</td></tr>
<tr><td><code>Ruku 1</code></td><td>Ruku Verses</td><td>Corresponding Ruku content</td></tr>
</table>

> ✅ **Validation**: Surah range `1–114` • Structured format enforced • Clear error feedback

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>=16`

### Installation

```bash
# Clone the repository
git clone https://github.com/Anas-Sd/islamiq.git

# Navigate to the project
cd islamiq

# Install dependencies
npm install

# Start development server
npm run dev
```

> App runs on `http://localhost:5173`

---

## 📂 Project Structure

<details>
<summary>📁 Click to expand</summary>

```
ISLAMIQ/
├── components/        # Reusable UI components
├── pages/             # Route-based rendering
├── assets/            # Static files & images
├── supabaseClient.js  # Auth / DB config (if applicable)
├── vercel.json        # Deployment configuration
├── package.json
└── README.md
```

</details>

---

## 🧠 Engineering Decisions

| Decision | Reasoning |
|----------|-----------|
| **API-based** over static JSON | Reduces repo size, always up-to-date data |
| **Structured input parsing** | Better UX with predictable query patterns |
| **Utility-first CSS** | Scalable, maintainable styling |
| **Minimal UI** | Reduces cognitive load during recitation |
| **Conditional rendering** | Avoids unnecessary re-renders for performance |

---

## 📈 Performance Focus

```
✅ Minimal bundle size
✅ Optimized API fetch patterns
✅ Conditional rendering
✅ Mobile-first layout system
✅ Clear Arabic typography
```

---

## 🔮 Future Enhancements

| Status | Feature |
|:------:|:--------|
| 🔲 | 🔖 Bookmark & Save Verses |
| 🔲 | 🌙 Dark / Light Theme Toggle |
| 🔲 | 🔊 Audio Recitation Integration |
| 🔲 | 📲 PWA Support |
| 🔲 | 📊 Usage Analytics |

---

## 🤝 Contributing

Contributions are welcome! Please open an issue before major feature proposals.

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m "Add AmazingFeature"

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

---

## 📬 Contact

<div align="center">

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-syedanas.me-00D9FF?style=for-the-badge)](https://syedanas.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-syedanas)
[![Gmail](https://img.shields.io/badge/Gmail-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sdanasbtech@gmail.com)

📍 **India** · 🕐 **IST (UTC+5:30)** · ✅ **Open for Opportunities**

</div>

---

## ⚖️ License

Distributed under the **MIT License** © 2026 Syed Anas. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

### بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ

**⭐ From [SYED ANAS](https://github.com/Anas-Sd) with ❤️**

*"In the world of code, DSA is my weapon."*

</div>
