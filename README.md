# Finmount - Expert Accounting & Intelligent Software Solutions

A modern React website for Finmount, Ireland's premier accounting and software consultancy firm serving SMEs.

## 🏢 About Finmount

Finmount combines 11 years of accounting excellence with cutting-edge software solutions, providing Irish SMEs with:

- **Expert Accounting Services**: ACCA certified chartered accounting, VAT compliance, payroll management
- **Intelligent Software Solutions**: Custom web applications, business automation, cloud solutions
- **Comprehensive Business Support**: Tax advisory, financial forecasting, strategic planning

## 🚀 Technology Stack

- **Frontend**: React 18, Vite, React Router
- **Styling**: Tailwind CSS, Framer Motion for animations
- **Icons**: Lucide React
- **Build Tool**: Vite with hot reload
- **Code Quality**: ESLint, PostCSS

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── home/        # Home page specific components
│   └── Layout.jsx   # Main layout component
├── pages/           # Main page components
├── integrations/    # External API integrations
├── utils/           # Utility functions
├── lib/             # Library configurations
└── index.css        # Global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ANSHU-Ireland/Finmount-dev.git
cd Finmount-dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features

### Design & UX
- Modern, responsive design optimized for Irish SMEs
- Smooth animations with Framer Motion
- Mobile-first approach
- Accessible navigation and forms

### Pages & Functionality
- **Home**: Hero section with animated background, service highlights
- **About**: Team member profiles, company mission
- **Services**: Comprehensive service listings with detailed descriptions
- **Software**: Technology solutions and automation offerings
- **Contact**: Contact form with email integration, Google Maps
- **Service Details**: Dynamic pages for individual services

### Technical Features
- Component-based architecture
- Responsive design across all devices
- SEO optimized with meta tags
- Fast loading with Vite bundling
- Clean code with ESLint configuration

## 🌟 Key Components

### Animated Hero
Dynamic background animation with floating circles for visual appeal.

### Service Navigation
Interactive service cards linking to detailed service pages.

### Contact Integration
Email functionality for lead generation and customer inquiries.

### Responsive Layout
Mobile-optimized navigation and content layout.

## 🔧 Configuration

### Tailwind CSS
Custom configuration with Finmount brand colors and utilities.

### Vite
Optimized build configuration with path aliases and development server setup.

### ESLint
React-specific linting rules for code quality and consistency.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- Netlify (with automatic deployments)
- Vercel
- AWS S3 + CloudFront
- Traditional web hosting with static file support

## 📝 Content Management

The website content is structured for easy updates:

- Service information in `ServiceDetail.jsx`
- Team member data in `About.jsx`
- Company information in various page components
- Contact details centralized in components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Finmount**
- Email: info@finmount.ie
- Location: Dublin, Ireland
- Website: [finmount.ie](https://finmount.ie)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Target Audience

This website is specifically designed for:
- Irish Small and Medium Enterprises (SMEs)
- Businesses seeking accounting services
- Companies looking for software automation solutions
- Entrepreneurs needing comprehensive business support

---

*Built with ❤️ for Irish businesses by the Finmount team*