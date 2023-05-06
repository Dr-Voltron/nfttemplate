import '@/styles/globals.css'

import Footer from '../../components/Foooter/Footer';

function MyApp ({ Component, pageProps }) {
 return(
  <>
 <Footer/>
  <Component {...pageProps} />
  </>
 )
 };


export default MyApp;
