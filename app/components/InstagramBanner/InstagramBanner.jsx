"use client"
import { Button, Container, Typography , Slide } from '@/app/lib/MuiSsr'
import { useRouter } from 'next/navigation'
const InstagramBanner = () => {
  const router = useRouter()
  return (
     <Container maxWidth="xl" fixed>
         <Slide right>
             <Typography variant='h1' sx={{fontSize : '2.5rem', fontWeight : 'bold', margin : '40px 0px', lineHeight : '90px'}}>تابع احدث الصور والعروض علي صفحتنا علي <br/> Instagram </Typography>
         </Slide>
        <Slide left>
            <Button aria-label="صفحتنا عليInstagram" onClick={()=> router.push('https://www.instagram.com/diva_atelier100/')} variant='contained' sx={{backgroundColor : "#E60263", color : '#fff', fontWeight : 'bold', fontSize : '25px', ":hover" : {backgroundColor : '#E60263'}}}>الانتقال الي الصفحة</Button>
        </Slide>
    </Container>

  )
}

export default InstagramBanner