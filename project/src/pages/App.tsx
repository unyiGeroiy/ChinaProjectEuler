import { useNavigate } from 'react-router-dom'
import '../App.css'


export default function HomePage(){

  const navigate = useNavigate();

  const handleTaskClick = (taskId: number) => {
    navigate(`/task/${taskId}`);
  }

  return (
    <>
      <div className='flex justify-start font-bold'>
        <h1 className="text-amber-800">Project Euler</h1>
      </div>
      <table className='mt-8 h-90'>
        <thead>
          <tr>
            <th className='border-1 border-black text-black min-w-26 h-10'>ID</th>
            <th className='border-1 border-black text-black min-w-82'> Задача</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='border-1 border-black text-black'>1</th>
            <th className='border-1 border-black text-amber-800'>	<span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(1)}>Multiples of 3 or 5</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>2</th>
            <th className='border-1 border-black text-amber-800'><span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(2)}>Even Fibonacci Numbers</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>3</th>
            <th className='border-1 border-black text-amber-800'> <span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(3)}>Largest Prime Factor</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>4</th>
            <th className='border-1 border-black text-amber-800'> <span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(4)}>Largest Palindrome Product</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>5</th>
            <th className='border-1 border-black text-amber-800'> <span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(5)}>	Smallest Multiple</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>6</th>
            <th className='border-1 border-black text-amber-800'> <span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(6)}> Sum Square Difference</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>7</th>
            <th className='border-1 border-black text-amber-800'> <span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(7)}>10 001st Prime</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>8</th>
            <th className='border-1 border-black text-amber-800'> <span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(8)}> Largest Product in a Series</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>9</th>
            <th className='border-1 border-black text-amber-800'> <span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(9)}> Special Pythagorean Triplet</span></th>
          </tr>
          <tr>
            <th className='border-1 border-black text-black'>10</th>
            <th className='border-1 border-black text-amber-800'> <span className='hover:text-gray-500 cursor-pointer' onClick={() => handleTaskClick(10)}>	Summation of Primes</span></th>
          </tr>
        </tbody>
      </table>
      
    </>
  )
}