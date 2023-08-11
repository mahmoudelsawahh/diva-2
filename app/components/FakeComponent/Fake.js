import dynamic from 'next/dynamic'
 
const Service = dynamic(() => import('../Service/Service'),{
  ssr : false
})
const InstagramBanner = dynamic(() => import('../InstagramBanner/InstagramBanner'),{
  ssr : false
})

const Footer = dynamic(() => import('@/app/components/footer/Footer'),{
  ssr : false
});

const Fake = () => {
  return (
    <>
       <main>
       <section>
            <Service/>
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

export default Fake