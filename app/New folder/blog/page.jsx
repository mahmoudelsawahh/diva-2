import dynamic from 'next/dynamic'
import { getArticleData } from '../lib/DataFetching'
import { Suspense } from 'react'
 
const BlogTitle = dynamic(() => import('../components/blog-Page/BlogTitle'), {
})
const SubBlog = dynamic(() => import('../components/blog-Page/SubBlog'), {
})
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'), {
})
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false,
});
export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}
const Footer = dynamic(() => import('@/app/components/footer/Footer'),{
  ssr : false
});

export default async function Blog (){
  const data = await getArticleData();
  return (
   <>
    <main>
    <section>
      <BlogTitle/>
    </section>
    <section>
        <Suspense fallback={<Loading/>}>
             <SubBlog data={data.data}/>
        </Suspense>
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

