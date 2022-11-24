import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
