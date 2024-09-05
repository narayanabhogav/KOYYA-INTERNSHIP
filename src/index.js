import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Holidaylist from './Holidaylist';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Holidaylist />
    <Footer/>
  </React.StrictMode>
);

