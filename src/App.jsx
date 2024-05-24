
import Header from "../components/header"
import Hero from "../components/hero"
import Card from "../components/cards"
import data from "./data"
function App() {
  const Cards = data.map((card) => {
    return (
      <Card 
        key={card.id}
        {...card}
      />
    )
  })
    
  return (
    <>
      <Header />
      <Hero />
      <section className="cards-list">
                {Cards}
            </section>
    </>
  )
}

export default App
