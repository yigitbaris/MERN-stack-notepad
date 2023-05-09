
import { useEffect, useState } from 'react'
import NotDetay from '../components/NotDetay'
import NotForm from '../components/NotForm'

export default function Home () {

   const [notlar, setNotlar] = useState(null)

   useEffect(() => {

      const fetchNotlar = async () => {
         const response = await fetch('/api/notlar')

         const json = await response.json()

         if (response.ok) {
            setNotlar(json)
         }
      }

      fetchNotlar()

   }, [])

   return (
      <div className="Home">
         <div className="not-form">
            <NotForm />
         </div>
         <div className="notlar">
            {notlar && notlar.map((not) => (
               <NotDetay key={not.id} not={not} />
            ))}
         </div>
      </div>
   )
}
