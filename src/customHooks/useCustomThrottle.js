import { useEffect, useState ,useRef} from "react";

const useCustomThrottle = (fn, delay) => {
    const [throttledValue, setThrottledValue] = useState(fn);

    const lastExecuted = useRef(Date.now());
    useEffect(() => {
        const handler = setTimeout(() =>{
            const now = Date.now();
            const timeElapsed = now - lastExecuted.current;
            if(timeElapsed >= delay){
                setThrottledValue(fn);
                lastExecuted.current = now;
            }

        }, delay - (Date.now() - lastExecuted.current));
        return () => clearTimeout(handler);
    }, [delay, fn]);
    return throttledValue;
}

export default useCustomThrottle;