const trendingGames = [
   {
    name:"GTA VI",
    image:"public/assets/thumbgta5.jpg",
   },
   {
    name:"Call of Duty: Warzone",
    image:"public/assets/cod3.jpg",
   },
   {
    name:"Resident Evil",
    image:"public/assets/r_evil.jpg"
   },
   {
    name:"EA Sports FC 25",
    image:"public/assets/fifa2.jpg",
   },
];

function Browse() {
    return (
        <section className="Browse">
            <h2 className="scetion-title">Trending Games</h2>
            <div className="game-grid">{trendingGames.map((game,index)=>(
            <div className="game-card" key={index}>
                <img src={game.image} alt={game.name} />
                <h3>{game.name}</h3>
                </div>
            ))}
            </div>
        </section>
    )
}
export default Browse;