import { getArticleData } from "@/app/lib/DataFetching";
import dynamic from "next/dynamic";
const LatestNews = dynamic(() => import('./LatestNews'),{
    ssr : false
  });
export default async function NeswContaner(){
    const getArticle = await getArticleData();
  return (
    <>
          <LatestNews data={getArticle}/>
    </>
  )
}

