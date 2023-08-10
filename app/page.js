"use client"
import dynamic from 'next/dynamic';
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  ssr : false,
  loading : ()=><h1>loading</h1>
});

const Footer = dynamic(() => import('./components/footer/Footer'),{
  ssr : false,
});

// export const metadata = {
//   title: "اتيليه فساتين زفاف وافراح",
// }  

export default function Home () {
  return (
    <>
          <MainSlider/>
      <footer>
         <Footer/>
      </footer>
    </>
  )
}