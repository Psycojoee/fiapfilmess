
import Cardfilme from "./componentes/Cardfilme.jsx";
import Titulo from "./componentes/titulo.jsx";


export default function Home() {
  //mock
  const filmes = [
    {
      titulo: "Star Wars",
      nota: 9.5,
      poster: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/vOUxo5sfXyQPIoF8rtYK1OVVBPi.jpg"
    },
    {
      titulo: "Barbie",
      nota: 9.0,
      poster: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    }
  ]


 return (
  <>
   <nav className='bg-slate-900 p-2 flex gap-3 items-end'>
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