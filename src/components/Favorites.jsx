import { useStore } from "../context/StoreContext";
import games from "../data/gamesData";


export default function Favorites(){
    const {favorites} = useStore();
    if (favorites.length === 0) return
    <h2 style={{ background:"red", color:"white"}}>NO favorites yet❤️</h2>
    return(
        <div className="page-content">
            <h2>Your favorites ❤️</h2>
        <div className="store-grid">{favorites.map((game)=>(
            <div key={game.id} className="favorite-card">
                <img src={game.image} alt={game.title} />
                
                <h3>{game.title}</h3>
                </div>
        ))}
            
         </div>   
        </div>
    );
}