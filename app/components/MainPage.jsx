"use client"
import dynamic from 'next/dynamic';


// const Distinguishes = dynamic(() => import('./Distinguishes/Distinguishes'),{
//   ssr : false,
// });
const AboutUs = dynamic(() => import('./about-homePage/AboutUs'),{
  ssr : false,
});
const Service = dynamic(() => import('./Service/Service'),{
  ssr : false,
});
const Goals = dynamic(() => import('./Goals/Goals'),{
  ssr : false,
});
// const DevaStudioVideo = dynamic(() => import('./DevaStudioVideo/DevaStudioVideo'),{
//   ssr : false,
// });
// const LatestNews = dynamic(() => import('./latestNews/LatestNews'),{
//   ssr : false,
// });
const InstagramBanner = dynamic(() => import('./InstagramBanner/InstagramBanner'),{
  ssr : false,
});
// const Category = dynamic(() => import('./Category/Category'),{
//   ssr : false,
// });
const MainPage = () => {
  return (
    <>
      <section>
        <AboutUs/>
      </section>
     <section>
        <Service/>
      </section>
      <section>
        <Goals/>
      </section>
      {/* <section>
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
      </section> */}
      <section>
        <InstagramBanner/>
      </section>
    </>
  )
}

export default MainPage