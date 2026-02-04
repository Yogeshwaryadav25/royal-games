import { createContext, useContext, useState } from "react";
import games from "../data/gamesData";


const StoreContext = createContext(null);
export const useStore = () =>
    useContext(StoreContext);

export function
StoreProvider({ children }){
    const [cart, setCart] = useState([]);
    const[favorites, setFavorites] = useState([]);

    const addToCart = (game) => {
        setCart((prev) => prev.find((g) => g.id === game.id) ? prev: [...prev, game]);
    };

    const removeFromCart = (id) => {
        setCart((prev)=> prev.filter((g)=>g.id !== id));
    };

    const toggleFavorite = (game) => {
        setFavorites((prev)=>prev.find((g)=> g.id === game.id)? prev.filter((g)=> g.id !== game.id):[...prev, game]);
    };

    return (
        <StoreContext.Provider value={{cart, favorites,addToCart,removeFromCart,toggleFavorite}}>
            {children}
        </StoreContext.Provider>
    );
}
