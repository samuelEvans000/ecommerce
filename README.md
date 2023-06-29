## React E-commerce Website

This is a small e-commerce website built using React. It allows users to browse products, view product details, add products to a shopping cart, and manage the cart's contents. The application utilizes JSX, class and function components, props, state, lifecycle methods, and hooks.

### Features

- **Product List**: Displays a list of products, where each product is rendered as a separate component. Product data such as name, image, and price are passed as props to the product components.
- **Product Details**: When a user clicks on a product, they can view more information about the selected product. The application uses a state variable to track the currently selected product.
- **Shopping Cart**: Users can add products to a shopping cart and manage its contents. The shopping cart's state, including the items and their quantities, is managed using the Context API and hooks.
- **Data Fetching**: The application fetches product data from a JSON file using the useEffect hook.
- **Interactivity**: Users can interact with the website by adding items to the cart, removing items from the cart, and adjusting the quantity of items. These actions are reflected in the cart's total price.

### Getting Started

To run the project locally, follow these steps:

1. Clone the repository or download the project files.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm run dev` to start the development server.
5. Open your web browser and visit `http://localhost:3000` to see the application in action.

### Dependencies

The project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- React Router DOM: Provides routing capabilities for React applications.

These dependencies are managed using npm, and they will be automatically installed when running `npm install` as mentioned in the "Getting Started" section.
