export default function News(){
    const news = [
        {
            title:"GTA 6 - Coming 2027",
            Image:"/assets/gta6.jpg",
        },
        {
           title:"Resident Evil 4 - coming soon",
           Image:"/assets/r_evil.jpg",
        },
        {
            title:"Hitman 4 - Coming-soon",
            Image:"/assets/hitman.jpg",
        },
    ]
    return(
        <section id="news"className="news-section">
            <h2>Upcoming Games</h2>

            <div className="news-grid">
          {news.map((item, index)=>(
            <div className="news-card" key={index}>
                <img src={item.Image} alt={item.title} />
                <p>{item.title}</p>
                </div>
          ))}      
            </div>
        </section>
    )
}