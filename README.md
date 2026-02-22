🚀 Propsoch Landing Page Redesign

This project is a redesigned version of the Propsoch landing page as part of the Frontend Engineer Intern assignment.

The goal was to analyze the existing landing page, identify UI/UX and performance issues, and build an improved version using modern frontend best practices.

📌 Assignment Requirements

Build an improved landing page with:

✅ Redesigned Hero Section

✅ Two additional sections from the original website

✅ Fully responsive design (Mobile + Desktop)

✅ Optimized images

✅ Tech Stack: Next.js, TypeScript, Tailwind CSS

🔎 Part 1: Analysis
Lighthouse Score (Original Website)
Metric Score
Performance 68
Accessibility 77
Best Practices 77
SEO 100
Key Observations
⚡ Performance – 68

The performance score indicates that the website can be optimized further.

Possible reasons:

Heavy or unoptimized images

Large JavaScript bundles

Render-blocking resources

Improvement Approach in This Project:

Used next/image for automatic optimization

Compressed images

Implemented lazy loading

Reduced layout shifts

Optimized component structure

♿ Accessibility – 77

The website shows room for accessibility improvements.

Potential Issues:

Missing alt text in images

Low color contrast

Lack of semantic HTML structure

Buttons without accessible labels

Improvements Implemented:

Used semantic HTML tags (header, section, main, footer)

Added meaningful alt attributes

Improved visual contrast

Ensured better keyboard accessibility

🛠 Best Practices – 77

The score suggests some technical and optimization issues.

Possible causes:

Deprecated APIs

Console warnings

Large or unoptimized assets

Improvements Implemented:

Clean and modular component structure

Optimized static assets

Followed modern Next.js standards

Ensured no unnecessary re-renders

🔍 SEO – 100

The original website performs strongly in SEO.

The redesign maintains:

Proper heading hierarchy

Mobile responsiveness

SEO-friendly structure

🎯 5 UI/UX Issues Identified
1️⃣ Testimonial Section Alignment Issue

Cards were not perfectly aligned.

Improved by implementing:

Masonry grid layout (Desktop)

Auto-scrolling carousel (Mobile)

2️⃣ Product Differentiation Table Width Shift

Switching tabs changed column width.

This caused visual disturbance.

Fixed by maintaining consistent table layout structure.

3️⃣ Repaint Issue on Location Page Reload

URL pattern:
