import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Store from "./components/Store";
import CategoryStore from "./components/CategoryStore";
import News from "./components/News";
import Footer from "./components/Footer";
import Browse from "./components/Browse";
import Auth from "./components/Auth";
import GameDetail from "./components/GameDetails";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import GameRow from "./components/GameRow";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
<div className="page-content">
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Store />
              <CategoryStore />
              <News />
              <Footer />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
    </>
  );
}

export default App;