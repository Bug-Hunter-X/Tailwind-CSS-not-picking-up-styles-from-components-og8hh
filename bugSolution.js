```javascript
// ... other Tailwind CSS configurations ...

module.exports = {
  // ... other configurations ...
  content: [ 
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    // Add any other directories that contain your components here
    './node_modules/@my-ui-library/**/*.{js,ts,jsx,tsx}' // Include any third party components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```