import { useState } from "react"


export default function RandomColor(){
    /* we set the type either HEX or RGB, Next we set the current color */
    /* hex our default color */
    const [typeColor, setTypeColor] = useState('hex');
    const [color, setColor] = useState("#000000")

    function randomColorUtility(length){
        let colChecker = Math.floor(Math.random() * length);
        return Math.floor(Math.random() * length)
        /* this method generates number from 1 to 15 */
    }

    function handleCreateRandomHEXColor(){
        // define hex color: #678765
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; //15
        let hexColor = "#";

        for(let i = 0; i<6;i++){
            hexColor += hex[randomColorUtility(hex.length)]
            /* randomColorUtility method returns number from 1 to 15
            that number is index in hex array that item we append it to */
            console.log(hexColor);
            setColor(hexColor); /* this sets background color of entire screen */
        }
    }

    function handleCreateRandomRGBColor(){
        /* why multiply with 256: as it's max length we can pass */
        /* from 0 to 256 generates one random number assigned to r,g,b */ 
        const r =  randomColorUtility(256) 
        const g =  randomColorUtility(256)
        const b =  randomColorUtility(256)

        setColor(`rgb${r},${g},${b}`)
    }

    return <div style={{
        width: '100vw',
        height:'100vh',
        background:color,
    }}>
        <button onClick={()=> setTypeColor('hex')}>Create HEX Color</button>
        <button onClick={()=> setTypeColor('rgb')}>Create RGB Color</button>
        <button onClick={typeColor === 'hex' ? handleCreateRandomHEXColor
            : handleCreateRandomRGBColor
        }>Generate Random Color</button>

        
    </div>
}