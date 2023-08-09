import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('./loading'),{
  ssr : false,
});
const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const AboutUs = dynamic(() => import('./components/about-homePage/AboutUs'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const Service = dynamic(() => import('./components/Service/Service'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const Goals = dynamic(() => import('./components/Goals/Goals'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const DevaStudioVideo = dynamic(() => import('./components/DevaStudioVideo/DevaStudioVideo'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const LatestNews = dynamic(() => import('./components/latestNews/LatestNews'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'),{
  ssr : false,
  loading : ()=> <Loading/>
});
const Category = dynamic(() => import('./components/Category/Category'),{
  ssr : false,
  loading : ()=> <Loading/>
});

const Footer = dynamic(() => import('./components/footer/Footer'),{
  ssr : false,
  loading : ()=> <Loading/>
});

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}  

export default function Home () {
  return (
    <>
       <main>
       <MainSlider/>
      <section>
        <AboutUs/>
      </section>
     <section>
        <Service/>
      </section>
      <section>
        <Goals/>
      </section>
      <section>
        <DevaStudioVideo/>
      </section>
      <section>
       <Category/>
      </section>
      <section>
        <Distinguishes/>
      </section>
      <section>
       <LatestNews/>
      </section>
      <section>
        <InstagramBanner/>
      </section>
       </main>
      <footer>
         <Footer/>
      </footer>
    </>
  )
}