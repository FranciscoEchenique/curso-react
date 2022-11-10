import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleButtonClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr/>

        <input 
            type="text" 
            placeholder="Ingrese su nombre"
            className="form-control"
            ref={ inputRef }
        />

        <button className="btn btn-primary mt-2" onClick={ handleButtonClick }>
            SetFocus
        </button>
    </>
  )
}
