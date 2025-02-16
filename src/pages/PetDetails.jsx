import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

// exercise 1:
//          1. make the axios call in the useEffect to get the one pet and set the state
//          2. Show the pet information on the page using conditional rendering
function PetDetails() {
    const [pet,setPet] = useState(null)

    const {id} = useParams()
    console.log(id)

    async function getPet(){
        const petData = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/pets/${id}`)
        console.log(petData.data)
        setPet(petData.data)

    }

    useEffect(()=>{
        getPet()
    },[])
  return (
    <div>
      <h1>Pet Details</h1>
      {pet && (
        <div>
            <h2>Pet Name: {pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
        </div>
      )}
    </div>
  )
}

export default PetDetails