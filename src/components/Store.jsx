import { useNavigate } from "react-router-dom";
import games from "../data/gamesData";
import { useContext } from "react";
import { useStore } from "../context/StoreContext";
import { freeGames, topSellers, upcomingGames } from "../data/games";
import GameRow from "./GameRow";
export default function Store(){
const navigate = useNavigate(); 
const {addToCart, addToFav}= useStore();
  const games = [
    {id: 1, title: "WWE 2K", image: "/assets/wwe2k.jpg" },
    {id: 2, title: "COD", image: "/assets/cod3.jpg" },
    {id: 3, title: "Forza", image: "/assets/forza1.jpg" },
    {id: 4, title: "RDR2", image: "/assets/rdr2.jpg" },
    {id: 5, title: "FIFA", image: "/assets/fifa2.jpg" },
    {id: 6, title: "Ghost of Tsushima", image: "/assets/gost_of_t.jpg" },
  ];

  const newGames = [
    {id: 7, title: "GTA VI", image: "/assets/gta5.jpg"},
    {id: 8, title: "Valorant", image: "/assets/valo4.jpg"},
    {id: 9, title: "God Of War Ragnarok ", image: "/assets/god.jpg"},
    {id: 10, title: "Choo Choo Charles", image: "/assets/choo.jpg"},
    {id: 11, title: "Battle Filed 6", image: "/assets/btf.jpg"},
    {id: 12, title: "Genshine Impact", image: "/assets/gen.jpg"},
  ]

  return (

    
    
    <>
    <section id="store" className="store-section">
      <h2>Browse Store</h2>

      <div className="store-grid">
        {games.map((game, index) => (
          <div key={index} className="store-card">
            <img src={game.image} alt={game.title} />
            <p>{game.title}</p>
            <button className="browse-btn"
            onClick={()=> navigate(`/game/${game.id}`)}>Browse</button>
            
          </div>
        ))}
      </div>
    </section>
    

    <section className="store-section">
      <h2>Trending</h2>

      <div className="store-grid">
        {newGames.map((game,index)=>(
          <div key={`copy-${index}`}
          className="store-card">
            <img src={game.image} alt={game.title} />
            <p>{game.title}</p>
            <button className="browse-btn" onClick={()=> navigate(`/game/${game.id}`)}>Browse

            </button>
            
            </div>

            

        ))}
        
      </div>
    </section>
    </>
    
    
  );
}
  
