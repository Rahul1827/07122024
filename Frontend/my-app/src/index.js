import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import projectroute from './projectroute.js';
import "bootstrap/dist/css/bootstrap.min.css"

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={projectroute} />);











