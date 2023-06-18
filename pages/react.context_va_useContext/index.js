import React, { useContext, useState } from 'react'
import Content from './content'
import ThemeContext, { themeContext } from './themeContext'


const Index = () => {
    /**
    * react.context và useContext được sử dụng trong React 
    * để chia sẻ dữ liệu giữa các thành phần (components) của ứng dụng 
    * mà không cần phải truyền dữ liệu qua các thành phần cha hoặc con (props). 
    * Điều này giúp cải thiện hiệu suất và giảm sự phức tạp của mã.
    */

    // 1. create context
    // 2. provider: cung cấp dữ liệu
    // 3. consumer: sử dụng dữ liệu

    const theme1 = useContext(themeContext)
    console.log(theme1);
    return (
        <ThemeContext >
            <div>
                <Content />
            </div>
        </ThemeContext>
    )
}

export default Index