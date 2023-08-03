"use client"
import { Fade, Container, Grid } from '@/app/lib/MuiSsr';
import dynamic from 'next/dynamic';
import WhyUs from './whyUs';
const AboutIframe = dynamic(() => import('./AboutIframe'));

const AboutUs = () => {

  return (
     <Container maxWidth="xl" fixed>
        <Grid container rowSpacing={0} sx={{flexDirection : {xs : 'column-reverse', md : 'row'}}}>
            <Grid item xs={12} md={6} >
                <Fade left>
                    <WhyUs/>
                 </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade right>
                <AboutIframe/>
              </Fade>
            </Grid> 
        </Grid>
    </Container>
  )
}

export default AboutUs