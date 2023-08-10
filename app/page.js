import dynamic from 'next/dynamic';

// const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'),{
//   ssr : false,
// });
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  ssr : false,
});
// const AboutUs = dynamic(() => import('./components/about-homePage/AboutUs'),{
//   ssr : false,
// });
// const Service = dynamic(() => import('./components/Service/Service'),{
//   ssr : false,
// });
// const Goals = dynamic(() => import('./components/Goals/Goals'),{
//   ssr : false,
// });
// const DevaStudioVideo = dynamic(() => import('./components/DevaStudioVideo/DevaStudioVideo'),{
//   ssr : false,
// });
// const LatestNews = dynamic(() => import('./components/latestNews/LatestNews'),{
//   ssr : false,
// });
// const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'),{
//   ssr : false,
// });
// const Category = dynamic(() => import('./components/Category/Category'),{
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
       {/* <main>
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
       </main> */}
      <footer>
         <Footer/>
      </footer>
    </>
  )
}