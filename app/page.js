import dynamic from 'next/dynamic';
const Distinguishes = dynamic(() => import('./components/Distinguishes/Distinguishes'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
const MainSlider = dynamic(() => import('./components/MainSlider'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
const AboutUs = dynamic(() => import('./components/about-homePage/AboutUs'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
const Service = dynamic(() => import('./components/Service/Service'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
const Goals = dynamic(() => import('./components/Goals/Goals'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
const DevaStudioVideo = dynamic(() => import('./components/DevaStudioVideo/DevaStudioVideo'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
const LatestNews = dynamic(() => import('./components/latestNews/LatestNews'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
const InstagramBanner = dynamic(() => import('./components/InstagramBanner/InstagramBanner'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
const Category = dynamic(() => import('./components/Category/Category'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});

const Footer = dynamic(() => import('./components/footer/Footer'),{
  ssr : false,
  loading: () => <div>Loading...</div>
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