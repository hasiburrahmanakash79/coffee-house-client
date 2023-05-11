
import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffeeCollection = useLoaderData()

  return (
    <div className='container mx-auto my-6 p-5'>
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/addCoffee">Add Coffee</Link>
        <Link to="/updateCoffee">Update Coffee</Link>
      </div>
      <h1 className='text-5xl '>Coffee House</h1>
      <p>Type of Coffee in our shop: {coffeeCollection.length} type.</p>
      <div className='md:grid grid-cols-3 gap-5'>
        {
          coffeeCollection.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
