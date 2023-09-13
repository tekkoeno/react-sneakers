import Header from './components/Header/Header';
import './scss/App.scss';
import './scss/_normalize.scss';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route
          path=""
          element={
            <Suspense fallback={<div>Идет загрузка страницы...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="buy"
          element={
            <Suspense fallback={<div>Идет загрузка страницы...</div>}>
              <Cart />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
