import React, { useMemo, useRef, useState } from 'react'

const Index = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [pro, setPro] = useState([])
    const nameRef = useRef()
    const handleSubmit = () => {
        setPro([...pro, { name, price: +price }])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    // useMemo: là 1 hook tránh thực hiện lại 1 logic nào đó
    // không cần thiết
    const total = useMemo(() => pro.reduce((result, prod) => {
        console.log(result, prod);
        return result + prod.price
    }, 0), [pro])

    return (
        <div>
            <input ref={nameRef} onChange={e => setName(e.target.value)} placeholder='ten sp' />
            <input onChange={e => setPrice(e.target.value)} placeholder='gia sp' />
            <button onClick={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>add</button><br />
            Todo :{total}
            {pro.map((item, index) => {
                return <li key={index}>{item.name}-{item.price}</li>
            })}
        </div>
    )
}

export default Index