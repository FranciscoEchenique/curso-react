import { useState } from "react";
import { useMemo } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = ( value = 10 ) => {
    for(let i = 0; i < value; i++){
        console.log('Ahí vamos...');
    }

    return `${value} iteraciones realizadas`;
}

export const MemoHooks = () => {

    const { counter, increment } = useCounter(500);
    const toMemorize = useMemo(() => heavyStuff(counter), [counter]);
    const [show, setShow] = useState(true);

  return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />

        <h4>{ toMemorize }</h4>

        <button className="btn btn-primary" onClick={ increment }>+1</button>

        <button className="btn btn-outline-rimary" onClick={() => setShow(!show)}>
            Show/Hide { JSON.stringify( show ) }
        </button>

    </>
  )
}
