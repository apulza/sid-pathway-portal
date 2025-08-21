
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("Main entry point executing");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
  throw new Error("Root element not found");
}

console.log("Root element found, rendering App...");
try {
  createRoot(rootElement).render(<App />);
  console.log("App rendered successfully");
} catch (error) {
  console.error("Error rendering App:", error);
}
