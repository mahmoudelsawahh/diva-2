import dynamic from 'next/dynamic';
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  ssr : false,
});

const Footer = dynamic(() => import('./components/footer/Footer'),{
  ssr : false,
});

const DrawerAppBar = dynamic(() => import('@/app/components/NavBar'),{
  ssr : false
});

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}  
const MainPage = dynamic(() => import('./components/MainPage'),{
  ssr : false,
});

export default function Home () {
  return (
    <>
          <MainSlider/>
          <MainPage/>
         <Footer/>
    </>
  )
}