import dynamic from 'next/dynamic';
const AllCategory = dynamic(() => import('../components/Category/AllCategory'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});
import { getCategoryData } from '../lib/DataFetching';
import { Suspense } from 'react';
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});
const Footer = dynamic(() => import('@/app/components/footer/Footer'),{
  ssr : false,
  loading: () => <div>Loading...</div>
});

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}
export default async  function Gallery () {
  const data = await getCategoryData()
  return (
       <>
        <main>
        <Suspense fallback={<Loading/>}>
            <AllCategory CategoryData={data.data}/>
       </Suspense>
        </main>
        <footer>
           <Footer/>
        </footer>
       </>
  )
}


