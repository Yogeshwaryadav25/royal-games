import { useState } from "react"

export default function
CategoryStore() {
    const categories = {
        Action:[
            {title:"GTA V", image:"/assets/gta5.jpg"},
            {title:"COD", image:"/assets/cod3.jpg"},
            {title:"Battle Field 6", image:"/assets/btf.jpg"},
            {title:"Black Myth Wukong", image:"/assets/wukong.jpg"},
            
        ],
        Racing:[
            {title:"Forza Horizon", image:"/assets/forza1.jpg"},
            {title:"NFS", image:"/assets/nfs.jpg"},
            {title:"ASPHALT LEGENDS", image:"/assets/race.jpg"},
            {title:"MOTO RACER 4", image:"/assets/moto.jpg"},
            {title:"MOTO RACER ", image:"/assets/moto2.jpg"},
            {title:"HOT WHEELS ", image:"/assets/hot.jpg"},
            
        ],
        Sports:[
            {title:"FIFA 24", image:"/assets/fifa2.jpg"},
            {title:"WWE 2K", image:"/assets/wwe2k.jpg"},
            {title:"Cricket 24", image:"/assets/crick_thumb.jpg"},
        ],
    }
    const [activeTab, setActiveTab] = useState("Action")

    return (
        <section className="store-section">
            <h2>Browse by Category</h2>

            <div className="category-tabs">
                {Object.keys(categories).map((cat)=>(
                    <button key={cat} className={activeTab === cat ? "active" : ""} onClick={()=> setActiveTab(cat)}>
                        {cat}
                    </button>
                ))}
            </div>
            <div className="store-grid">
                {categories[activeTab].map((game, index)=>(
                    <div key={index} className="store-card">
                        <img src={game.image} alt={game.title} />
                        <p>{game.title}</p>
                        </div>
                ))}
            </div>
        </section>
    )
}