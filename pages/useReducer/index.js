import React, { useReducer, useState } from 'react'


//  useState
//  1. Init state: 0
//  2. Actions: Up (state + 1) / Down (state - 1)

//  useReducer
//  1. Init state: 0
//  2. Actions: Up (state + 1) / Down (state - 1)
//  3. Reducer
//  4. Dispatch

// Init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) => {
    console.log('reducer running');
    switch (action) {
        case UP_ACTION:
            return state + 1
            break;
        case DOWN_ACTION:
            return state - 1
            break;
        default: throw new Error('ko ton tai action')
            break;
    }
}

const Index = () => {
    /**
     * 
     * useReducerlà một trong những hook cơ bản trong React 
     * cho phép quản lý state của ứng dụng một cách linh hoạt 
     * và hiệu quả hơn. Nó giúp giảm thiểu sự phức tạp khi quản lý 
     * state và cung cấp cho chúng ta một cách tiếp cận mới để xử lý 
     * các trạng thái phức tạp trong ứng dụng React.
     * 
     * bất cứ bài toán nào mà dùng useState có thể giải quyết được thì
     * dùng useReduce ta có thể giải quyết được.
     * 
     * Lưu ý: useReducer dùng để giải quyết những bài toán có state phức tạp
     * ví dụ: state của bài toán là object hoặc array, trong đó có những object hoặc array con
     * hoặc số lượng state nhiều,...
     */
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
            <button onClick={() => dispatch(UP_ACTION)}>up</button>

        </div>
    )
}

export default Index