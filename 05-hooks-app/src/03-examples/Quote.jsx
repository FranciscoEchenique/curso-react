import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { useLayoutEffect } from 'react'

export const Quote = ({ author, quote }) => {

    const [boxSize, setBoxSize] = useState({width: 0, height: 0});
    
    const pRef = useRef(); 

    useLayoutEffect(() => {
      const { width, height} = pRef.current.getBoundingClientRect();

      setBoxSize({width, height});
    }, []);

  return (
    <>
        <blackquote className='blockquote text-end' style={{display: 'flex'}}>
            <p className="mb-1" ref={ pRef }>
                { quote }
            </p>
            <footer className="blockquote-footer">{ author }</footer>
        </blackquote> 

        <code>{ JSON.stringify(boxSize) }</code>
    </>
   
  )
}
