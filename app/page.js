import dynamic from 'next/dynamic';
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  ssr : false,
});
// const MainPage = dynamic(() => import('./components/MainPage'),{
//   ssr : false,
// });

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
      <footer>
         <Footer/>
      </footer>
    </>
  )
}