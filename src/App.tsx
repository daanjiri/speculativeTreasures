import './App.css';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Gan from './pages/Gan';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ModeViewer from './pages/ModelViewer';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/figures', element: <Portfolio /> },
  { path: '/gan', element: <Gan /> },
  { path: '/model', element: <ModeViewer /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
