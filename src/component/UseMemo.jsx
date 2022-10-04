import React from 'react'
import { useState,useMemo } from 'react';


const UseMemo = () => {
    const[counter1,setCount1] = useState(0);
    const[counter2,setCount2] = useState(0);

    const setIncrement1 = () => {
        setCount1(counter1+1)
    }

    const setIncrement2 = () => {
        setCount2(counter2+1)
    }

    const IsEven = useMemo(() => {
        let i = 0
        while(i<1000)
        i++
        return counter1 % 2 === 0
    },[counter1])
  return (
    <div>
        <h3>5.What is UseMemo Hook ?(Implementation)?</h3>
        <p>UseMemo allow you to memoize expensive function so that you can avoid calling them on every render.You can simple pass in a function and array of input and useMemo wll recompute the memoised value when one of the input has changes.
        It return the memoized value means no need of recalculation.</p>
        <h5>Implementation</h5>
        <div>
            <button onClick={setIncrement1}>Click:{counter1}</button>
            <span>{IsEven ? 'Even' : 'Odd'}</span>
        </div>
        <br/>
        <div>
            <button onClick={setIncrement2}>Click:{counter2}</button>
        </div>
    </div>
  )
}

export default UseMemo;