"use client"
import './globals.css'
import { createCache , CacheProvider, ThemeProvider , CssBaseline, createTheme  } from '@/app/lib/MuiSsr';
import { Cairo } from 'next/font/google';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazyload';
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});
const DrawerAppBar = dynamic(() => import('@/app/components/NavBar'),{
  ssr : false
});

const SocialFooter = dynamic(() => import('./components/footer/SocialFooter'),{
  ssr : false
});
const cache = createCache({
  key: 'css',
  prepend: true,
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  typography : {
    fontFamily : cairo.style.fontFamily
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

 const cairo = Cairo({ 
    subsets: ['latin'] ,
    display : 'swap',
    preload : true
  })

export default function RootLayout({ children }) {
  const [loadingComponent , setLoadingComponent] = useState(true);
  useEffect(()=>{
      setLoadingComponent(false)
      window.addEventListener('scroll', () => {}, { passive: true })
      return () => {
        window.removeEventListener('scroll', () => {})
      }
  },[])
  return (
    <html dir="rtl" lang='ar'>
    <head>  
         <meta name="geo.placename" content="Egypt" />
         <meta name="geo.position" content="30.9685798;31.1664157" />
          <meta name="geo.region" content="egypt" />
          <meta name="black"/>
          <meta name="ICBM" content="30.9685798, 31.1664157" />
          <meta name="robots" content="index,follow" />
          <meta name="keywords" content="    " />
          <meta author="شركة برمجيات دلتاوي"/>
          <meta name="description" content="    اتيليه فساتين زفاف و  افراح وسواريه وخطوبة وحنة  و تفصيل و  بيع وايجار  مستوردة تركي وفرنساوي موديلات لعام 2018  احدث صيحات الموضة 
            يوجد فساتين زفاف وسواريه وسهرة للمحجبات وكذلك فساتين سواريه وسهرة وزفاف قصيرة بناتي    " />
        <meta property="og:title" content="اتيليه فساتين زفاف وافراح" />
        <meta property="og:url" rel="canonical" content="https://divanice.com" />
        <meta property="og:image" content="https://divanice.com/images?id=81" />
        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="
        اتيليه فساتين زفاف و  افراح وسواريه وخطوبة وحنة  و تفصيل و  بيع وايجار  مستوردة تركي وفرنساوي موديلات لعام 2018  احدث صيحات الموضة 
      يوجد فساتين زفاف وسواريه وسهرة للمحجبات وكذلك فساتين سواريه وسهرة وزفاف قصيرة بناتي  
      ميك اب ديفا على يد خبيرة التجميل ميك اب ارتيست ديفا   " />
      <meta property="og:site_name" content="اتيليه ديفا " />
      <link rel="canonical" href="https://divanice.com" />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="932636840239088" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@divanice" />
      <meta name="twitter:domain" content="divanice" />
      <meta name="twitter:creator" content="@divanice" />
     </head>
      <body
       className={cairo.className}
       >
      {loadingComponent ? <Loading/> : 
      <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
           <>
           <nav>
             <DrawerAppBar/>
          </nav>
           <Suspense fallback={<Loading/>}>
            {children}
           </Suspense>
           <LazyLoad height={"100%"} once offset={1000}>
                <SocialFooter/>
           </LazyLoad>
           </>
      </ThemeProvider>
    </CacheProvider>
      }
      </body>
    </html>
  )
}
