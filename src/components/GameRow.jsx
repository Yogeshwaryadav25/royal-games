import { Link } from "react-router-dom";


export default function GameRow({title,games}) {
    return(
        <div className="game-row">
            <div className="row-header">
                <h2>{title}</h2>
                <span className="arrow">,</span>
            </div>
            <div className="row-scroll">
                {games.map(game=>(
                    <Link to={`/game/${game.id}`} key={game.id} className="game-card">
                        <img src={game.img} alt={game.title} />
                        <h4>{game.title}</h4>
                        <span className="price">{game.price}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}