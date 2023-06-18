import React, { useCallback, useState } from 'react'
import Content from './content'

const Index = () => {

    // useCallback(): tránh việc tạo ra 1 hàm mới không cần thiết
    // có memo thì có useCallback
    // nó liên quan đến bài reference type (tham chiếu)
    /**
     * Trong React, useCallback là một hook được sử dụng để giảm thiểu việc tạo lại hàm 
     * trong một component mỗi khi component đó được render lại. Điều này giúp tối ưu hiệu suất 
     * và giảm thiểu thời gian render của component.
       useCallback trả về một hàm memoized (hàm được lưu trữ lại trong bộ nhớ cache) 
       và chỉ khi các dependencies của nó thay đổi thì nó mới tạo ra một hàm mới. 
       Điều này đảm bảo rằng các hàm được tạo lại chỉ khi cần thiết, không gây lãng phí tài nguyên.
     */

    const [count, setCount] = useState(0)
    const increa = useCallback(() => {
        setCount(item => item + 1)
    }, [])
    return (
        <div>
            <Content increa={increa} />
            <h1>{count}</h1>
        </div>
    )
}

export default Index