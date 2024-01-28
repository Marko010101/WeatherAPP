# TBC x USAID

I crafted the TBCxUSAID webpage using a combination of CSS Grid and CSS Flexbox to achieve the best visual appeal and structure. Images are conditionally rendered depending on the device width for faster loading times. Up to 992px, smaller title-image and course-images are rendered. I am proficient in writing the equivalent code in SASS (SCSS) and React.

## 1. Header

I've included an SVG TBCxUSAID logo in the header along with navigation links.

## 2. Main Sections

- **Section-title**: Features a title and a dynamic background image that adjusts based on the device's width. There are three image variations based on width breakpoints: up to 992px, from 992px to 1200-1600px, and 1600px and above.
- **Section-intro**: Presents essential information.
- **Section-course (Courses)**: Utilizes a combination of display grid and display flex. Every image is conditionally rendered; under 992px, smaller size images are displayed, and above 992px, larger ones are shown.
- **Section-partners (Slider)**: Implements a functional slider similar to the TBC original page. Slider transitions occur every 3 seconds. Manual navigation is possible through buttons and dots. Below 992px width, buttons disappear, and users can use dots or swipe to navigate.
- **Section-questions**: Displays frequently asked questions with clickable answers. Clicking a question changes the little arrow direction, indicating the question's state.

## 3. Footer

The footer employs a grid system for easy responsiveness and position adjustments.

## Responsive Design

I've incorporated breakpoints at 0-376px, 376-420px, 420-768px, 768-992px, 992-1200px, and 1200-1600px (specifically for the Title-image). The website is fully responsive. On devices below 992px, a menu appears, revealing navigation links with a right-to-left animation. Although I couldn't implement the menu-icon changing animation due to time constraints, I transitioned the inner div to create the X from the menu icon. The slider adapts for mobile devices, allowing finger swipes.

## Technology Stack

I've utilized ES6 features and the following dependencies:

- **Core-js**: For polyfilling JavaScript features, ensuring ES6 accessibility across browsers.
- **Normalize.css**: Ensures consistent default styles across various browsers.
- **Parcel**: Simplifies the bundling and building of web applications.
- **Autoprefixer**: Automatically adds vendor prefixes to CSS rules.
- **Regenerator-runtime**: Enables the use of ES6 generators and async/await syntax.

## Running the Website

To view the website, ensure Node.js is installed. I recommend cloning the repository, navigating to the project directory in your terminal, and running:

```bash
npm install
npm start
```

or Alternatively, you can access My website directly at --- https://tbcxusaid.netlify.app/.
