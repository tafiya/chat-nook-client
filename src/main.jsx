import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route';
import AuthProvider from './Providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <QueryClientProvider client={queryClient}>
 <HelmetProvider>

 {/* bg-[#f5f8ebfd] */}
      <div className=' bg-[#f5f8ebfd] '>
      <RouterProvider router={router} />
        </div>
         
       
  </HelmetProvider>
 </QueryClientProvider>

 </AuthProvider>
  </React.StrictMode>,
)
