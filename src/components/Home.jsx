
import Hero from "./Hero.jsx";
import Popular from "./Popular.jsx";
import Offer from "./Offer.jsx";
import NewCollections from "./NewCollections.jsx";
import NewsLetter from "./NewsLetter.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
