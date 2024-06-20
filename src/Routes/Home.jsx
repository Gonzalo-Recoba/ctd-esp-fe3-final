import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'


const Home = () => {
  const {odontologos, setFavs } = useGlobalStates()
  return (
    <main>
      <h1>Inicio</h1>
      <div className='card-grid'>
        {odontologos.map((odontologo)=>{
           return <Card key={odontologo.id} odontologo={odontologo}>
            <button onClick={() => setFavs((prevFavs)=>[...prevFavs, odontologo])} className="addFavButton">⭐ Agregar a favoritos</button>
           </Card>
          })}
      </div>
    </main>
  )
}

export default Home