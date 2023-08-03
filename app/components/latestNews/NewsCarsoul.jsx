"use client"
import {  Button, CardActionArea, CardActions, Card , CardContent , CardMedia, Container, Box } from '@/app/lib/MuiSsr';
import Image from 'next/image';
import { baseUrl } from '@/app/lib/baseUrl';
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import LazyLoad from 'react-lazyload';
const Loading = dynamic(() => import('@/app/loading'),{
  ssr : false
});


const NewsCarsoul = ({data}) => {
  const router = useRouter()
  const dataItems = data.data
  const [emblaRef] = useEmblaCarousel({direction : 'rtl', loop : true },
   [Autoplay({delay : 5000 })]
   )

  return (
    <Container maxWidth="lg" sx={{marginBottom : '80px'}}>
        <div className="embla-iframe-video">
    <div className="embla-iframe-video__viewport" ref={emblaRef}>
      <div className="embla-iframe-video__container">
       <Suspense fallback={<Loading/>}>
       {dataItems.map((item , id)=>{
            return (
                <Box className="embla-iframe-video__slide" key={id} sx={{flex : {xs :  '0 0 100%' , md :  '0 0 50%' , lg :  '0 0 33.3%'} }}>
                    <div className='embla-iframe-video__slide__img'>
                       <LazyLoad height={'100%'} once>
                            <Card onClick={()=> router.push(`/blog/${item.id}/${item.name.split(' ').join('-')}`)}>
                              <CardActionArea>
                              <CardMedia >
                                  <Image  src={`${baseUrl}/images?id=${item.imageId}`} height={200} width={250} alt={item.name} style={{ objectFit: 'cover', width : "100%" }} loading='lazy' />
                              </CardMedia>
                          <CardContent sx={{height : '200px', overflow : 'hidden', margin : '5px 0px'}}>
                            <Suspense fallback={<Loading/>}>
                              <div className='api-blog-data' dangerouslySetInnerHTML={{__html: item.description}}/>
                            </Suspense>
                          </CardContent>
                          </CardActionArea>
                          <CardActions sx={{display : 'flex', justifyContent : 'center', padding : '20px 0px'}}>
                          <Button aria-label='item.name' size="large" sx={{backgroundColor : '#555555', color : '#fff', fontWeight : 'bold', padding : '10px 25px', ":hover" : {backgroundColor : '#555555'}}}
                            onClick={()=> router.push(`/blog/${item.id}/${item.name.split(' ').join('-')}`)}
                          >اقرأ المزيد</Button> 
                          </CardActions>
                          </Card>
                       </LazyLoad>
                    </div>
                </Box>
            )
          })}
       </Suspense>
      </div>
    </div>
  </div>
    </Container>
  )
}

export default NewsCarsoul