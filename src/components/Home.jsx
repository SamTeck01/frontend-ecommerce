
import Hero from "./Hero";
import Popular from "./Popular";
import Offer from "./Offer";
import NewCollections from "./NewCollections";
import NewsLetter from "./NewsLetter";

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
