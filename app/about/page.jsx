import dynamic from 'next/dynamic'
 
const Fake = dynamic(() => import('../components/FakeComponent/Fake'),{
  ssr : false
})

export const metadata = {
  title: "اتيليه فساتين زفاف وافراح",
}
const About = () => {
  return (
    <>
      <Fake/>
    </>
  )
}

export default About