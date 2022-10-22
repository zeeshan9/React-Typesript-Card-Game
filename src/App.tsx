import React from 'react';
import './App.css';
import './assets/styles/style.css'
import { Routes,Route } from 'react-router-dom';
const Dashboard = React.lazy(() => import('pages/dashboard'))
// import Dashboard from ;

const Loading = () => <h1>Loading ...</h1>;

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<Dashboard />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
