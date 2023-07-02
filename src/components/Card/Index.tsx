import Index from '../Form/Index'
import List from '../List/Index'

export default function Card (){

  return(
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <Index />
      <List />
    </div>
  )
}