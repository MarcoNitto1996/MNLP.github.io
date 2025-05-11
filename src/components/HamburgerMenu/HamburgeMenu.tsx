import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { activeMenuBar } from "../../redux/menubar/action"


export function HamburgeMenu(){
    const [click,setClick] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(
        ()=>{
            dispatch(activeMenuBar({active:click}))
        },[click]
    )

    return (
        <>
            <div onClick={
                ()=>{
                    setClick(!click)
                }
            }>
                <i className="hamburge-menu icon bi bi-list"></i>
            </div>
            
        </>
    )
}