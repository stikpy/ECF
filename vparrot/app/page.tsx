import NavBar from './components/NavBar/page'
import Card from './components/Card/page'


export default function Home() {
  return (
    <>
  <header>
    <NavBar />
  </header>
  <main className="flex  gap-4 items-center justify-centerflex items-center justify-center min-h-screen">
    <Card 
    imageUrl="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" 
    title="Shoes!" 
    description="If a dog chews shoes whose shoes does he choose?" 
    slug="shoes-item-123"
  />
  </main>
    </>
  )
}
