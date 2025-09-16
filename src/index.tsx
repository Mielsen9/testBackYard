import React from 'react';
import "@/scss/style.scss";
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

// Імпортуємо Redux та створений store
import { Provider } from 'react-redux';
import { router } from "./routes";

// Ініціалізація root елементу
const root = document.getElementById('root');

if (!root) {
    throw new Error('Root node not found');
}

const container = createRoot(root);

// Підключаємо Redux та маршрути
container.render(
  <RouterProvider router={router} />
);




