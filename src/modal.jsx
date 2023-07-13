import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({children}) => {
    const eleref = useRef(null)
    if (!eleref.current){
        eleref.current = document.createElement('div')
    }
    useEffect(() => {
        const element = document.getElementById('modal')
        element.appendChild(eleref.current)
        return () => element.removeChild(eleref.current)
    },[])
    return createPortal(<div className="modal-ele">{children}</div>,eleref.current)
}

export default Modal