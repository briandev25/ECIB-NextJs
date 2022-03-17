import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react'
import { Provider} from 'react-redux';
import {store} from '../app/store'
import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';

const progress = new ProgressBar({
  size:2,
  color:"#FF0000",
  className:"z-50",
  delay:80
});

Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);

function MyApp({Component, pageProps}) {
  return (<SessionProvider session={pageProps.session}>
       <Provider store={store}>
       <Component {...pageProps} />
       </Provider>
     </SessionProvider>
  )
}

export default MyApp
