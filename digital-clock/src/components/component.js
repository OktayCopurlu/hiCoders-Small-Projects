import {useState} from 'react'

function Clock() {
   
    const [saat, setSaat]=useState();
    const [dakika, setDakika]=useState();
    const [saniye, setSaniye]=useState();
   
    setInterval(()=>{
        let dateTime = new Date();
        setSaat(dateTime.getHours());
        setDakika(dateTime.getMinutes());
        setSaniye(dateTime.getSeconds());
    },1000)
       
    return <div>
            <span>{saat} : </span>
            <span>{dakika} : </span>
            <span>{saniye}</span>
        </div>
}

export default Clock;