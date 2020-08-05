/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import dynamic from 'next/dynamic'


const BrowserComponent = dynamic(
    ()=>import('../src/components/BrowserComponent'), 
    {
        ssr:false,
        loading: ()=>(<h3>loading...</h3>)
    }
);

export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
      <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
      <BrowserComponent />
    </div>
  </div> 
)

export async function getStaticProps() {
   return {
        props: {
            content :
            {title: "This is a really cool App"}
        }
    }
}