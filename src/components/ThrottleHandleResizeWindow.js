import React, {useEffect, useState} from 'react'
import useCustomThrottle from '../customHooks/useCustomThrottle';

const ThrottleHandleResizeWindow = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    const ThrottledHandleResize = useCustomThrottle(handleResize, 500);

    useEffect(() => {
        window.addEventListener('resize', ThrottledHandleResize);

        return () => {
            window.removeEventListener('resize', ThrottledHandleResize);
        }
    }, []);

  return (
    <div>
        width: {windowSize.width} x Height: {windowSize.height}
    </div>
  )
}

export default ThrottleHandleResizeWindow;