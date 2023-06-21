import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RootProvider from './components/layout/RootProvider';
import Loader from './components/generic/Loader';
import Routes from './routes/Routes';

function App() {
 
  return (
    <BrowserRouter>
      <RootProvider>
        <Suspense fallback={<Loader />}>
          <Routes />
        </Suspense>
      </RootProvider>
    </BrowserRouter>
  )
}

export default App;
