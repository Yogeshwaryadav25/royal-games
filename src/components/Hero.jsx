import { useEffect, useState } from "react";

const games = [
  {
    title: "Discover Your Next Favourite",
    desc: "Exclusive titles, best deals, new releases every week",
    image: "/assets/game4.jpg",
    thumb: "/assets/valo.jpg",
  },
  {
    title: "Fortnite",
    desc: "Jump into the battle royale",
    image: "/assets/game3.jpg",
    thumb: "/assets/fortnite1.jpg",
  },
  {
    title: "GTA V",
    desc: "Explore Los Santos and build your empire",
    image: "/assets/gta5.jpg",
    thumb: "/assets/thumbgta5.jpg",
  },
  {
    title: "Fall Guys",
    desc: "survive the obsicles ",
    image: "/assets/gf-banner.jpg",
    thumb: "/assets/fg.jpg",
  },
  {
    title: "Genshine Impact",
    desc: "Explore Anime World",
    image: "/assets/genshin-impact.jpg",
    thumb: "/assets/gen.jpg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % games.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = games[activeIndex];

  return (
    <div className="hero-wrapper">
      {/* LEFT HERO */}
      <div className="hero">
        <img src={active.image} className="hero-img" alt={active.title} />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>{active.title}</h1>
          <p>{active.desc}</p>
          <button>Browse Store</button>
        </div>
      </div>

      {/* RIGHT GAME LIST */}
      <div className="hero-sidebar">
        {games.map((game, index) => (
          <div
            key={index}
            className={`sidebar-item ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={game.thumb} alt={game.title} />
            <span>{game.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}