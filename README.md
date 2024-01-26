## Here is a Project Component Summary:

### App Component:

Responsibility: The main component that orchestrates the entire application.
Usage: Manages state for image upload, heading, CTA content, canvas background color, and color picker visibility.
Dependencies: Utilizes other components like TextEditor, ImageUploader, and Canvas.


### TextEditor Component:
Responsibility: Renders an input field for editing text content.
Usage: Receives a label, current value, and a callback to update the value.
Dependencies: None.

### ImageUploader 
Component:Responsibility: Facilitates image upload functionality.
Usage: Provides a file input for users to select an image file and triggers a callback with the image data.
Dependencies: None.

### Canvas Component:
Responsibility: Renders the main canvas for ad customization.
Usage: Displays the uploaded image, heading, and CTA content. Allows customization of the canvas background color.
Dependencies: Utilizes SketchPicker for color selection.

### SketchPicker Component:
Responsibility: A color picker component.
Usage: Integrated into the Canvas component to allow users to pick a color for the canvas background.
Dependencies: External library - react-color.

## Thanks for reading and checking this project 

![thank you gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWdyem5rcGp3bXFxYnJ4bHdxZzB4bmt4bHUycHZ6amJvbnVxN3o0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZfK4cXKJTTay1Ava29/giphy.gif)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
