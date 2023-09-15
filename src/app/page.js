import Cardfilme from "./componentes/Cardfilme.jsx";
import Titulo from "./componentes/titulo.jsx";

async function carregarDados(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const  response = await fetch(url)
  const json = await response.json()
  return json.results
}

export default async function Home() {

  const filmes = await carregarDados()

 return (
  <>
   <nav className='bg-black-500 text-orange-400 p-2 flex gap-3 items-end'>
    <h1 className='holtwood one sc font-bold'>NYA NIMES</h1>
    <a href="./favoritos">Favoritos</a>
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