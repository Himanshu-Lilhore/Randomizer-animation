import { useState, useEffect } from 'react';

const abcd = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+)(*&^%$#@!}{'

export default function WordShuffle({ children, myColor }) {
    let tempLst = []
    const [indvAlphaSpans, setSpans] = useState([])
    let original = children
    const [isAnimating, setIsAnimating] = useState(false); // State to track animation status

    useEffect(() => {
        for (let i = 0; i < children.length; i++) {
            tempLst[i] = <span key={i}>{children[i]}</span>;
        }
        console.log([...tempLst]);
        setSpans([...tempLst]);
    }, [children]);


    function shuffle() {
        if (isAnimating) {
            return;
        }
        
        setIsAnimating(true);

        for (let i = 0; i < children.length; i++){
            let x = setInterval(() => {
                tempLst[i] = <span key={i} style={{color: myColor}}>{abcd[Math.floor(Math.random()*75)]}</span>
                setSpans([...tempLst])
            }, 60)
            setTimeout(() => {
                clearTimeout(x)
                tempLst[i] = <span key={i}>{original[i]}</span>
                setSpans([...tempLst])
                if (i === children.length - 1) {
                    setIsAnimating(false);
                }
            }, 200*(i+1))
        }
    }

    return (
        <div id='holder' onMouseEnter={shuffle}>
            {indvAlphaSpans}
        </div>
    );
}
