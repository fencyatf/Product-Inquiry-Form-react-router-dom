import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductInquiryForm, { productAction } from './components/ProductInquiryForm.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductInquiryForm />,
    action: productAction, 
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
