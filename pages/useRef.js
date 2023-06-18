import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    // lưu các giá trị qua 1 tham chiếu bên ngoài fucntion components
    const [count, setCount] = useState(60)
    const timeId = useRef()
    const preCount = useRef()
    useEffect(() => {
        preCount.current = count
    }, [count])
    const start = () => {
        timeId.current = setInterval(() => {
            setCount(item => item - 1)
        }, 1000)
        console.log('start time: ', timeId);
    }

    const stop = () => {
        clearInterval(timeId.current)
        console.log('stop time: ', timeId);

    }
    console.log(count, preCount.current);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>

        </div>
    )
}

export default UseRef