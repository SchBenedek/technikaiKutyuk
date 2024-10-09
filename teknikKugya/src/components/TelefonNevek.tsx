import { useState, useEffect } from "react"
import { Phone } from "../technikaiKutyuk";

export default function TelefonNevek(){
    const[tel, setTel]=useState([] as Phone[]);

    useEffect(()=>{
        async function load() {
            const response=await fetch("/technikaiKutyuk.json");
            const telefonok: Phone[]=await response.json();
            setTel(telefonok)
        }
        load()
        console.log(tel)
    }, [])
    
    return<>
        {}
    </>
}