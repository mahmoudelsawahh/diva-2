import dynamic from 'next/dynamic'
import { getArticleData } from '../lib/DataFetching'
 
const BlogTitle = dynamic(() => import('../components/blog-Page/BlogTitle'), {
})
const SubBlog = dynamic(() => import('../components/blog-Page/SubBlog'), {
})
const InstagramBanner = dynamic(() => import('../components/InstagramBanner/InstagramBanner'), {
})

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
             {/* <SubBlog data={data.data}/> */}
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

