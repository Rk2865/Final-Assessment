

# 🚀 Interactive Sales Dashboard

This project is a modern, interactive sales dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**. It demonstrates atomic design principles and provides a beautiful, animated UI for visualizing sales data.

## ✨ Features

- **Animated Dashboard**: Smooth transitions and chart animations for a delightful user experience.
- **Multiple Chart Types**: Switch between Bar, Line, and Pie charts using Recharts.
- **Random Sales Data**: Sales data for 2022, 2023, and 2024 is generated randomly on each refresh.
- **Custom Filter**: Set a sales threshold to filter the displayed data.
- **Refresh Button**: Instantly generate new random sales data with a single click.
- **Responsive Design**: Works great on desktop and mobile.

## 🧩 Atomic Components & Their Functions

- **SalesChart**: Renders the sales data as Bar, Line, or Pie chart. Accepts data, chart type, and threshold as props.
- **ChartSwitcher**: Lets users switch between chart types interactively.
- **FilterInput**: Allows users to set a minimum sales threshold for filtering data.

## 📄 Dashboard Page

The dashboard (`/dashboard`) brings all components together:
- Displays the animated chart and controls.
- Handles loading, error, and refresh states.
- Uses Tailwind CSS for a modern look.

## ⚡️ Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## 🛠️ How It Works

- The API route `/api/sales` generates random sales data for each year.
- The dashboard fetches this data and displays it with interactive controls and animations.
- All UI is built with atomic components for maintainability and scalability.

## 🌐 Deployment

Deploy easily to [Vercel](https://vercel.com) for a live, production-ready dashboard.

---

Feel free to fork, customize, and enhance this dashboard for your own needs!
