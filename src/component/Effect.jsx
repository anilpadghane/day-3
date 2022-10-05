import React, { useEffect, useState } from "react";

const Effect =()=>{
  const[num, setNum]= useState(0);
  const[nums,setNums]=useState(0);

 useEffect(()=>{
  alert("I am Click");
 },[num])
return(
<div><h2>3:What is useEffect Hook ?(Implementation)?</h2>
<p>UseEffect :useEffect hook is designed to use lifecycle method in the functional component.
UsEffect hook gets triggered for the componentDidMount.componentDidUpdate and componentUnWillMOunt lifecycle</p>
<button onClick={()=>{setNum(num+1)}}>clik me{num}</button><br/>
<button onClick={()=>{setNums(nums+1)}}>clik me{nums}</button>
</div>
)};

export default Effect



