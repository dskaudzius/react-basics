import logo from './logo.svg';
import './App.css';
import CarsPage from './pages/CarsPage';

function App() {
  return (
    <div className='page-wrapper'>
      <Navigation />
      <Routes>
        <Route path='/cars/*' element={<CarsPage />} />
        <Route path='/cars/new/*' element={<h1>New cars</h1>} />
        <Route path='*' element={<h1>404 error. Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
