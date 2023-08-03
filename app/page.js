import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('@/app/loading'),{
});
const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'),{
});
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  loading : ()=> <Loading/>
});
const AboutUs = dynamic(() => import('./components/about-homePage/AboutUs'),{
});
const Service = dynamic(() => import('./components/Service/Service'),{
});
const Goals = dynamic(() => import('./components/Goals/Goals'),{
});
const DevaStudioVideo = dynamic(() => import('./components/DevaStudioVideo/DevaStudioVideo'),{
});
const NeswContaner = dynamic(() => import('./components/latestNews/NeswContaner'),{
  ssr : false
});
const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'),{
});
const Category = dynamic(() => import('./components/Category/Category'),{
  ssr : false
});

const Footer = dynamic(() => import('./components/footer/Footer'),{
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
       <NeswContaner/>
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