import React from 'react'
import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        
        window.addEventListener("mousemove", (e) =>{
            console.log(e);
        })

      return () => {
        console.log('Message unmounted');
      }
    }, [])
    
  return (
    <>
        <h3>El usuario ya existe</h3>
    </>
  )
}
