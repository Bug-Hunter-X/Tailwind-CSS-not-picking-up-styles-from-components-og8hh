# Tailwind CSS not picking up styles from components

This repository demonstrates a common issue when using Tailwind CSS: styles not being applied to components. The problem lies in the `content` configuration within the `tailwind.config.js` file.  The original configuration might not correctly point to the files containing the classes. This example shows the incorrect configuration and the corrected version.

## Setup

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the project (you might need a build setup like Vite or Webpack). 

## How to reproduce

1. Look at the `bug.js` file which contains the incorrect configuration for Tailwind's content property.
2. Run the application.
3. You will notice that Tailwind CSS classes are not being applied correctly.
4. Now, refer to `bugSolution.js` for the corrected configuration.
5. Re-run the application to verify that the issue is resolved.