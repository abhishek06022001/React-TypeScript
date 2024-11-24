import { useEffect, useRef, useState } from "react"
// types must match dude :0 
function Mutableref() {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<number | null>(null);
    const stopTimer = () => {
        if (interValRef.current) {
            window.clearInterval(interValRef.current);
        }
    }
    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
        return () => {
            stopTimer();
        }
    })
    return (
        <div>
            HookTime - {timer} -
            <button onClick={() => stopTimer()}>Stop Timer</button >
        </div >
    )
}

export default Mutableref