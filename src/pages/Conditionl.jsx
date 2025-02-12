import React from 'react'

function Conditionl({isLogedIn}) {
  return (
    <>
    
    <h3>
        {isLogedIn? "Shiba p pandey" : "hey this is not working at this moment!"}
    
        </h3>
    </>
  )
}

export default Conditionl