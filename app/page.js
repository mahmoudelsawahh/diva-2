import dynamic from 'next/dynamic';
import MainPage from './components/MainPage';
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  ssr : false,
});

const Footer = dynamic(() => import('./components/footer/Footer'),{
  ssr : false,
});

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}  

export default function Home () {
  return (
    <>
          <MainSlider/>
          <MainPage/>

      <footer>
         <Footer/>
      </footer>
    </>
  )
}