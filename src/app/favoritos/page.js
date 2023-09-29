import Cardfilme from "/src/app/componentes/Cardfilme.jsx";
import Titulo from "/src/app/componentes/titulo.jsx";

async function carregarDados(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODU3OWI3ZDQ2ZDJlOTUwNGE2MTEyMDEwMWI1YTM4OCIsInN1YiI6IjY1MDQ0MGFmNjNhYWQyMDBjNDRmMDUzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VncJ9VlrJeSVNgFUt_cWa8gjKKcUhpBs1-IkdaJee28'
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/account/9269654/watchlist/tv?language=pt-br&page=1&sort_by=created_at.asc', options)
      const json = await response.json()
      console.log(json)
      return json.results
}

export default async function Favoritos() {

  const filmes = await carregarDados()

 return (
  <>
   <nav className='bg-black-500 text-orange-400 p-2 flex gap-3 items-end'>
    <h1 className='holtwood one sc font-bold'>NYA NIMES</h1>
    <a href="/favoritos">Favoritos</a>
   </nav>

   <Titulo>Favoritos</Titulo>

  <section className="flex flex-wrap gap-2">
    {filmes.map( filme => <Cardfilme filme= {filme} />)}
  </section>
  </>
 )
}