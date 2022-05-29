import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from './components/expenses';
import Invoices from './components/invoices';
import Invoice from './components/invoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route index element={<h2>Welcome </h2>} />
        <Route path="*" element={<h1>Nothing here1.</h1>} />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={<h2>Select an Invoice. </h2>} />
          <Route path=":id" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />}>
          <Route path="2" element={<h3>blah</h3>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
