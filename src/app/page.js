
import Cardfilme from "./componentes/Cardfilme.jsx";
import Titulo from "./componentes/titulo.jsx";


export default function Home() {
  //mock
  const filmes = [
    {
      id: 1,
      titulo: "Jujutsu Kaisen",
      nota: 9.5,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg"
    },
    {
      id: 2,
      titulo: "Naruto Shippuden",
      nota: 1000,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nRJmByfK9XdtOY73VArcN8KpKVs.jpg"
    },
    {
      id: 2,
      titulo: "Dragon Ball Super",
      nota: 8.5,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qEUrbXJ2qt4Rg84Btlx4STOhgte.jpg"
    }
  ]


 return (
  <>
   <nav className='bg-black-500 text-orange-400 p-2 flex gap-3 items-end'>
    <h1 className='holtwood one sc font-bold'>NYA NIMES</h1>
    <h2 className='holtwood one sc font-bold'>Favoritos</h2>
    <h3 className='holtwood one sc font-bold'>Lançamentos</h3>
    <h4 className='holtwood one sc font-bold'>Sobre</h4>
   </nav>

   <Titulo>Em Alta</Titulo>
  <section className="flex flex-wrap gap-2">
    {filmes.map( filme => <Cardfilme filme= {filme} />)}
  </section>

   <Titulo>Lançamentos</Titulo>
  </>
 )
}