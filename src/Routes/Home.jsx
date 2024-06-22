import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'


const Home = () => {
  const {state } = useGlobalStates()

  return (
    <main>
      <h1>Inicio</h1>
      <div className='card-grid'>
        {state.odontologos.map((odontologo)=>{
           return <Card key={odontologo.id} odontologo={odontologo}/>
          })}
      </div>
    </main>
  )
}

export default Home