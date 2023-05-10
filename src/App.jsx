
import { Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/addCoffee">Add Coffee</Link>
        <Link to="/updateCoffee">Update Coffee</Link>
      </div>
      <h1 className='text-5xl '>Coffee House</h1>
    </div>
  )
}

export default App
