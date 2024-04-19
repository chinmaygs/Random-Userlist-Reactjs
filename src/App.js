import './App.css';
import Users from './Users';
import { useEffect, useState } from 'react';

function App() {
  const [noc, setnoc] = useState(0)
  const [User, setUser] = useState([])

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${noc}`)
      .then((r) => r.json())
      .then((res) => {
        setUser(res.results)
        console.log(res.results)
      })
      .catch((error) => {
        console.log("err msg")
      })
  }, [noc])

  return (
    <>
      <div className="bg-blue-200 min-h-screen">
        <h1 className="text-blue-600 text-center text-5xl mx-auto">
          Random User List
        </h1>
        <input className="lg:bg-slate-50 ml-5 mt-4 rounded-md p-2 placeholder:font-thin"
          placeholder='Enter the number'
          type="number"
          onChange={(event) => setnoc(event.target.value)} />

        <div>
          {
            noc == 0 ? (
              <div className='mt-4 flex justify-center text-2xl'>
                No Users Found
              </div>
            ) : (
              <div className='grid sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                  User.map((data) => {
                    return (
                      <Users data={data}/>
                    )
                   })
                }
              </div>
            )}
        </div>
      </div>
    </>
  );
}

export default App;