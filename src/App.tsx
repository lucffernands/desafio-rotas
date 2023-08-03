import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';
import Products from './routes/Home/Products';
import About from './routes/Home/About';
import Computer from './routes/Home/Products/Computer';
import Eletronic from './routes/Home/Products/Eletronic';
import Book from './routes/Home/Products/Book';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Products />} />
            <Route path="computers" element={<Computer />} />
            <Route path="eletronics" element={<Eletronic />} />
            <Route path="books" element={<Book />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
