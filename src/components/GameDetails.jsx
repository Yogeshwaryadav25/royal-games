import { useParams } from "react-router-dom";
import { useStore } from "../context/StoreContext";


const games = [
  { id: 1, title: "WWE 2K", image:"/assets/wwe2k.jpg", price: 2499, desc: "Wrestling action game" },
  { id: 2, title: "COD", image:"/aasets/cod3.jpg", price: 3999, desc: "FPS shooting game" },
  { id: 3, title: "Forza",image:"/assets/forza1.jpg", price: 3499, desc: "Racing game" },
  { id: 4, title: "RDR2", image:"/assets/rdr2.jpg", price: 2499, desc: "Open world western" },
  { id: 5, title: "FIFA",image:"/assets/fifa2.jpg", price: 1999, desc: "Football simulation" },
  { id: 6, title: "Ghost of Tsushima", image:"/assets/gost_of_t.jpg", price: 3499, desc: "Samurai action game" },
  { id: 7, title: "GTA VI", image:"/assets/gta5.jpg", price: 2499, desc: "Open World, explore the city"},
  { id: 8, title: "Valorant", image:"/assets/valo4.jpg", price: 0, desc: "4 vs 4 squad fighting"},
  { id: 9, title: "God Of War Ragnarok", image:"/assets/god.jpg", price: 2399, desc: "fight with demons"},
  { id: 10, title: "Choo Choo Charles", image:"/assets/choo.jpg", price: 1399, desc: "survive the jungle with train and fight with train monster."},
  { id: 11, title: "Battle Field", image:"/assets/btf.jpg", price: 1399, desc: "fight with enemy"},
  { id: 12, title: "Genshine Impact", image:"/assets/gen.jpg", price: 799, desc: "magical anime world "},
];

export default function GameDetail() {
  const { id } = useParams();
  const {addToCart, toggleFavorite} = useStore();
  const game = games.find((g) => g.id === Number(id));


  if (!game) {
    return <h1 style={{ color: "white" }}>Game not found ❌</h1>;
  }

  return (
    
    <div className="game-details">
      
      <img src={game.image} alt="game image" />
      <div className="detail-info">
      
      <h1>{game.title}</h1>
      <div className="rating">
        <span className="stars">⭐⭐⭐</span>
        <span>4.6</span>
        <span className="reviews">(120k reviews)</span>
      </div>
      <p>{game.desc}</p>

      <h2 className="price">₹{game.price}</h2>
      <div className="buy-box">
        <button className="buy-btn">Buy Now</button>
      

      <button onClick={()=> addToCart(game)}>Add to Cart</button>
      <button onClick={()=> toggleFavorite(game)}>❤️Favorites</button>
    </div>

    <div className="payment">
      <h4>Payment Methods</h4>
      <div className="payment-methods">
        <span>🗂️Card</span>
        <span>📱UPI</span>
        <span>🏦NetBanking</span>
        <span>👛Wallet</span>
      </div>
    </div>
    </div>
    </div>
    
  );
}