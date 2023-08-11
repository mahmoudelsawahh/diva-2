"use client"
import {Box, Container, Typography} from '@/app/lib/MuiSsr';
import Image from 'next/image';
import divaBg from '/public/divanice.com_imgs_section-bg.webp'
import waveBg from '/public/divanice.com_imgs_waves.png'
import LazyLoad from 'react-lazyload';
import dynamic from 'next/dynamic';
import {useEffect, useState } from 'react';
import { baseUrl } from '@/app/lib/baseUrl';
const NewsCarsoul = dynamic(() => import('./NewsCarsoul'),{
  ssr : false,
  loading: () => <div>Loading...</div>
 });

const LatestNews = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${baseUrl}/rest/tables.article/getAllArticlesPojo`,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({"id" : 0}),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })
  }, [])


  return (
        <Box sx={{position : 'relative', height : '100%'}}>
         <LazyLoad height={"100%"} once>
         <Image loading='lazy' src={waveBg} alt='ما الذي نقدمه من خدمات ؟' layout='full' height={75} style={{position : 'absolute' , top : 0, left : 0, transform: "rotate(180deg)", zIndex : 255, width : '100%'}}/> 
         </LazyLoad>
                <LazyLoad height={'100%'} once>
                <Image loading='lazy' src={divaBg} alt='ما الذي نقدمه من خدمات ؟' layout='responsive' objectFit='cover' className='image-responsive'/>
                </LazyLoad>
            <Box sx={{position : 'absolute', width : '100%', height : '100%', backgroundColor : 'rgba(254, 245, 246, .85)',  top : 0 , left : 0  }}>
            </Box>
            <Container maxWidth="xl"  sx={{textAlign : 'center', padding : '40px 0px'}}>
              <Typography variant='body1' sx={{fontSize : '14px', fontWeight : 'bold' , color : '#E60263', marginTop : '50px'}}>احدث اخبار ديفا</Typography>
              <Typography variant='h1' sx={{fontWeight : 'bold', position : 'relative', fontSize : '2rem', marginBottom : '60px'}} className='underline-service-title'  >احدث اخبار الموضة والجمال</Typography>
       <Box>
                <NewsCarsoul data={data}/>
       </Box>
    </Container>
        <LazyLoad height={'100%'} once>
        <Image loading='lazy' src={waveBg} layout='full' alt='ما الذي نقدمه من خدمات ؟' height={75} style={{position : 'absolute' , bottom : 0, left : 0, zIndex : 255, width : '100%'}}/> 
       </LazyLoad>
        </Box>
  )
}

export default LatestNews