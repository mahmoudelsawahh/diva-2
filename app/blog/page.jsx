"use client"
import dynamic from 'next/dynamic'
// import LazyLoad from 'react-lazyload'
const BlogTitle = dynamic(() => import('../components/blog-Page/BlogTitle'), {
  ssr : false
})
// const BlogContainer = dynamic(() => import('../components/blog-Page/BlogContainer'), {
//   ssr : false
// })
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'), {
  ssr : false
})

const Footer = dynamic(() => import('@/app/components/footer/Footer'),{
  ssr : false
});

export default  function Blog (){
  return (
   <>
    <main>
    <section>
      <BlogTitle/>
    </section>
      {/* <LazyLoad height={"100%"} once>
      <section>
             <BlogContainer/>
    </section>
      </LazyLoad> */}
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

