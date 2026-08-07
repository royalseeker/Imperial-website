# Imperial-Website

```markdown
# Imperial Ecommerce LTD - Official Website

A professional, static e-commerce brochure website for **Imperial Ecommerce LTD** (Reg No: 16776358). This site showcases the brand's mission, links directly to curated products on 
eBay and TikTok, and highlights e-commerce consulting and store setup services for aspiring UK entrepreneurs.

## 🚀 Tech Stack

This project is built with modern web technologies focused on performance and seamless animations:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** [Netlify](https://www.netlify.com/) (Static HTML Export)

## ✨ Key Features

*   **Static Export:** Configured via `next.config.mjs` to output a purely static build (`out` directory) for ultra-fast global CDN delivery.
*   **Animated UI:** Utilizes Framer Motion for scroll reveals, hover effects, and a dynamic hero section.
*   **External Storefront Integration:** Direct product routing to eBay and TikTok shops.
*   **Serverless Contact Form:** Fully integrated with Netlify Forms for backend-free message handling.
*   **Fully Responsive:** Mobile-first design principles applied across all pages.

## 📂 Project Structure

```text
├── src/
│   └── app/
│       ├── layout.tsx        # Global layout containing the Navigation & Footer
│       ├── globals.css       # Global stylesheet & Tailwind directives
│       ├── page.tsx          # Home Page
│       ├── about/            # About Us Page
│       ├── services/         # Services Page
│       ├── shop/             # Products/Shop Page
│       └── contact/          # Contact Page (with Netlify Form)
├── next.config.mjs           # Next.js configuration (set to static export)
├── tailwind.config.ts        # Tailwind CSS configuration
├── netlify.toml              # Netlify build instructions
└── package.json              # Project dependencies & scripts

```

## 🛠️ Local Development

To run this project locally on your machine:

1. **Clone the repository:**
```bash
git clone [https://github.com/royalseeker/Imperial-website.git](https://github.com/royalseeker/Imperial-website.git)

```


2. **Navigate to the directory:**
```bash
cd Imperial-website

```


3. **Install dependencies:**
```bash
npm install

```


4. **Start the development server:**
```bash
npm run dev

```


5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## ☁️ Deployment (Netlify)

This project is optimized for Netlify deployment using Next.js static exports.

Any pushes to the `main` branch will automatically trigger a build based on the configurations provided in the `netlify.toml` file.

**Netlify Build Settings:**

* **Base directory:** *(Leave Empty)*
* **Build command:** `npm run build`
* **Publish directory:** `out`

## 📄 License & Copyright

© 2026 Imperial Ecommerce LTD. All rights reserved.


```

```
