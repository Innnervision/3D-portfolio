# 3D Portfolio

<!-- Add badges here -->

![Demo Screenshot](https://github.com/Innnervision/3D-portfolio/blob/work/src/assets/Screenshot%202024-07-08%20182940.png?raw=true))

![Top Language](https://img.shields.io/github/languages/top/Innnervision/3D-portfolio?logo=github&logoColor=%23007ACC&label=TypeScript)
![Contributors](https://img.shields.io/github/contributors/Innnervision/3D-portfolio?style=flat&color=orange&label=Contributors)

## 🌐 Live Demo

Explore the live demonstration of the project:
[3D Portfolio](https://github.com/Innnervision/3D-portfolio/blob/work/src/assets/Screenshot%202024-07-08%20182940.png?raw=true)

## 📝 Description

**3D Portfolio** is a well-designed and fully functional portfolio website that is built with React.js and Three.js. It is a fully responsive website that works well on all devices.

<details><summary><b>Folder Structure</b></summary>

3D-portfolio/
├── src/
│ ├── App.tsx
│ ├── globals.css
│ ├── main.tsx
│ ├── vite.env.d.ts
│ ├── components/
│ │ ├── atoms/
│ │ │ └── Header.tsx
│ │ ├── canvas/
│ │ │ ├── Ball.tsx
│ │ │ ├── Computers.tsx
│ │ │ ├── Earth.tsx
│ │ │ ├── Stars.tsx
│ │ │ └── index.ts
│ │ ├── layout/
│ │ │ ├── Loader.tsx
│ │ │ └── Navbar.tsx
│ │ ├── sections/
│ │ │ ├── About.tsx
│ │ │ ├── Contact.tsx
│ │ │ ├── Experience.tsx
│ │ │ ├── Feedbacks.tsx
│ │ │ ├── Hero.tsx
│ │ │ ├── Tech.tsx
│ │ │ ├── Works.tsx
│ │ │ └── page.tsx
│ │ └── index.ts
│ ├── constants/
│ │ ├── config.ts
│ │ ├── styles.ts
│ │ └── index.ts
│ ├── hoc/
│ │ ├── SectionWrapper.tsx
│ │ └── index.ts
│ ├── utils/
│ │ └── motion.ts
│ ├── types/
│ │ └── index.d.ts
│ └── assets/
│ ├── company/
│ │ └── [[...]].{svg,png}
│ ├── tech/
│ │ └── [[...]].{svg,png}
│ ├── [[...]].{svg,png}
│ └── index.ts
├── public/
│ ├── desktop_pc/
│ │ ├── textures/
│ │ │ └── [[...]].png
│ │ ├── license.txt
│ │ ├── scene.bin
│ │ └── scene.gltf
│ ├── planet/
│ │ ├── textures/
│ │ │ └── [[...]].png
│ │ ├── license.txt
│ │ ├── scene.bin
│ │ └── scene.gltf
│ ├── logo.png
│ └── logo.svg
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.cjs
├── index.html
├── LICENSE
├── README.md
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js

markdown
Copy code

</details>

## ✨ Technologies Used

**3D Portfolio** is built using the following technologies:

- **TypeScript**: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- **React.js**: React is a free and open-source front-end JavaScript library for building user interfaces or UI components.
- **Three.js**: Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.
- **Framer Motion**: Framer Motion is a production-ready motion library for React.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- **ESLint**: ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code.
- **Prettier**: Prettier is an opinionated code formatter.
- **Vercel**: Vercel is a cloud platform for frontend developers, providing the frameworks, workflows, and infrastructure to build a faster, more personalized Web.

## 💻 Get Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js & npm (Node package manager)
- Git

### Installation and Run Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/Innnervision/3D-portfolio.git
cd 3D-portfolio
npm install
Scripts
npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run serve: Serves the production build locally.
Environment Variables
To run this project, you will need to add the following environment variables to your .env file:

dotenv
Copy code
REACT_APP_API_KEY=your_api_key
🌍 Deployment
Deploy to Production (Manual)
Deploy your project manually using the following steps:

Build the project:

bash
Copy code
npm run build
Deploy the build directory to your web server.

Deploy on Vercel (Recommended)
Deploy your project with Vercel for the best developer experience.

Deploy on Netlify
You can also deploy your project on Netlify:

Sign up or log in to Netlify.
Click on "New site from Git".
Connect with your GitHub account and select the repository.
Configure the settings and deploy.
🤝 Contributing
Bug / Feature Request
If you find a bug or have a feature request, please open an issue here.

🙏 Acknowledgements
Include credits to any resources or individuals that helped you build this project.

📚 References
List any references or tutorials you found helpful during your development.

📧 Contact Us
For any inquiries or suggestions regarding the project, feel free to reach out to us at souravmukherjee7991@example.com.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.
