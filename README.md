# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Loan Calculator App 💸

This is a modern single-page React app to calculate loan EMIs, view amortization schedules, and convert EMI values into 160+ currencies using real-time exchange rates.

## Technologies

- React (Hooks, Context API, Routing)
- Material UI
- Axios
- ExchangeRate-API

## Setup

```bash
git clone https://github.com/your-username/loan-calculator-app
cd loan-calculator-app
npm install
```

# 📊 Loan EMI Calculator Web App

A responsive and dynamic **Loan EMI Calculator** web application built using **React** and **Material UI**, with features like amortization schedule, multi-currency support, and full reset functionality.

---

## 🚀 Features

- 💸 **EMI Calculation**: Calculate your monthly EMI based on Principal, Interest Rate, and Loan Tenure.
- 📅 **Amortization Table**: View detailed month-wise breakdown of principal vs. interest payments.
- 💱 **Multi-Currency Support**: Supports formats like `USD`, `INR`, `EUR`, `CAD`, `AUD`, `JPY`, and `GBP`.
- 🔄 **Dynamic Currency Formatting**: Currency changes (like USD, INR, CAD, etc.) **are only applied after selecting from the dropdown and clicking the "CALCULATE" button**.
- ♻️ **Reset Table Feature**: **"RESET TABLE"** button works effectively — it hides the amortization table and resets relevant states.
- 🎨 **Material UI Styling**: Clean, responsive layout using Material UI.
- ⚠️ **Error Handling**: Includes error and 404 pages for improved UX.
- ✅ EMI Calculation using standard formula
- ✅ Amortization schedule with monthly breakdown
- ✅ Live currency conversion using [ExchangeRate-API](https://app.exchangerate-api.com)
- ✅ Pagination for 160+ currencies
- ✅ Light/Dark theme toggle with Material UI
- ✅ Fully responsive and mobile-friendly
- ✅ 404 Not Found page and Error Handling

---

## 🧠 How It Works

### 📥 1. Input:

- Principal Amount
- Interest Rate (Annual)
- Loan Tenure (in Months)
- Currency (Dropdown)

### 💲 2. Currency Formatting:

- User selects a currency (e.g., INR, USD, CAD).
- **Only when "CALCULATE" is clicked**, the amortization table updates to reflect selected currency format.
- Currency format includes local symbols (₹, $, etc.) and digit grouping.

### 🔄 3. Reset:

- On clicking **"RESET TABLE"**, the amortization table disappears and all values reset.
- User can now recalculate with new or same inputs.

---

## 📁 Project Folder Structure

loan-calculator-app/

├── public/

│ └── index.html

├── src/

│ ├── components/

│ │ ├── AmortizationTable.js # EMI & principal-interest table

│ │ ├── CurrencyTable.js # Optional currency display

│ │ ├── EMIForm.js # Input form for EMI calculation

│ │ └── Header.js # App header and title

│ ├── context/

│ │ └── GlobalContext.js # Global state: currency, reset status

│ ├── hooks/

│ │ ├── useCurrencyRates.js # (Optional) Hook for FX rates

│ │ └── useEMICalculator.js # Core EMI + amortization logic

│ ├── pages/

│ │ ├── ErrorPage.js # Generic error handler

│ │ ├── Home.js # Main calculator page

│ │ └── NotFound.js # 404 route page

│ ├── theme/

│ │ └── ThemeProvider.js # (Optional) Theme configuration

│ ├── App.js # Main App component with routing

│ ├── index.js # ReactDOM entry point

│ └── .env # (Optional) Environment variables

├── .gitignore

├── package.json

└── README.md

---

## 🛠️ Tech Stack

| Technology      | Purpose                                  |
| --------------- | ---------------------------------------- |
| **React**       | Front-end JavaScript framework           |
| **Material UI** | UI library for styled React components   |
| **Context API** | Global state for currency & reset logic  |
| **JavaScript**  | Logic for EMI & amortization computation |

---

## 📸 Screenshots

_(Optional: Add screenshots in a `screenshots/` folder and reference here)_

---

## 📦 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/loan-calculator-app.git
cd loan-calculator-app
```

## ✅ Example Usage

1. Enter loan details (e.g., ₹5,00,000 at 8% for 60 months).
2. Choose your preferred currency (e.g., INR).
3. Click **"CALCULATE"** .
4. See the monthly EMI and detailed amortization breakdown with the selected currency format.
5. Click **"RESET TABLE"** to start a new calculation.

---

## 📌 Important Notes

- Currency formatting updates **only after clicking the "CALCULATE" button** .
- The **"RESET TABLE"** button clears the amortization table and resets necessary state without refreshing the page.
- Currency symbols and digit formatting follow international standards (e.g., `$`, `₹`, `€`).
