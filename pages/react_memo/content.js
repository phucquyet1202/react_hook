import React, { memo } from 'react'

// memo(): higher order component (HOC) 
// memo(): tránh trường hợp re-render lại component khi không cần thiết
// nếu props của function component thay đổi thì nó mới re-render lại 


const Content = ({ increa }) => {
    console.log('123');
    return (
        <div>
            <h1>hello</h1>
            <button onClick={increa}>click</button>

        </div>
    )
}

export default memo(Content)