# TBC x USAID

I crafted the TBCxUSAID webpage, using a combination of CSS Grid and CSS Flexbox to achieve the best visual appeal and structure. I am proficient in writing the equivalent code in SASS (SCSS) and React.

## 1. Header

I've included an SVG TBCxUSAID logo in the header along with navigation links.

## 2. Main Sections

- **Section-title**: Features a title and a dynamic background image that changes based on the device's width. For devices wider than 1600px, a broader image is displayed.
- **Section-intro**: Presents essential information.
- **Section-course (Courses)**: Utilizes a combination of display grid and display flex.
- **Section-partners (Slider)**: Implements a functional slider similar to the TBC original page. Slider transitions occur every 3 seconds. Manual navigation is possible through buttons and dots. Below 750px width, buttons disappear, and users can use dots or swipe to navigate.
- **Section-questions**: Displays frequently asked questions with clickable answers. Clicking a question changes the little arrow direction, indicating the question's state.

## 3. Footer

The footer employs a grid system for easy responsiveness and position adjustments.

## Responsive Design

I've incorporated breakpoints at 375px, 420px, 768px, 1200px, and 1600px (specifically for images). The website is fully responsive. On devices below 768px, a menu appears, revealing navigation links with a right-to-left animation. Although I couldn't implement the menu-icon changing animation due to time constraints, I replaced it with an 'X' for simplicity. The slider adapts for mobile devices, allowing finger swipes.

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

or Alternatively, you can access the website directly at --- https://tbcxusaid.netlify.app/.
