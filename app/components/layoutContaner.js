"use client"
import { createCache , CacheProvider, ThemeProvider , CssBaseline, createTheme  } from '@/app/lib/MuiSsr';
// import { Cairo } from 'next/font/google';
import rtlPlugin from 'stylis-plugin-rtl';
// import {useEffect } from 'react';
import dynamic from 'next/dynamic';

const DrawerAppBar = dynamic(() => import('@/app/components/NavBar'),{
  ssr : false,
});

const SocialFooter = dynamic(() => import('./footer/SocialFooter'),{
  ssr : false
});
const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

const theme = createTheme({
  typography : {
    // fontFamily : cairo.style.fontFamily
  },
  palette: {
    primary : {
        main : '#fff',
    },
    text:{
      primary: "#333",
    }
  },
  direction: 'rtl',
  
})

//  const cairo = Cairo({ 
//     subsets: ['latin'] ,
//     display : 'swap',
//     preload : true
//   })

export default function LayoutContainer({ children }) {
  // useEffect(()=>{
  //     window.addEventListener('scroll', () => {}, { passive: true })
  //     return () => {
  //       window.removeEventListener('scroll', () => {})
  //     }
  // },[])
  return (
      <div
      //  className={cairo.className}
       >
      <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
           <>
           <nav>
             <DrawerAppBar/>
          </nav>
            {children}
                <SocialFooter/>
           </>
      </ThemeProvider>
    </CacheProvider>
      </div>
  )
}
