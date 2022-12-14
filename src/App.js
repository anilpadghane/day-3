import React, {useState } from "react";
import Effect from "./component/Effect";
import Reducer from './component/Reducer';
import UseMemo from "./component/UseMemo";




const App =()=> {
 const state =useState();
 console.log(state);
 const[Count,setCount]=useState(0)
 const Increment=()=> {
  setCount(Count +1)
  
 }
 
  return (
  
      <div>
        <h1>Day-3</h1>
        <h2>1.Difference between Axios and fetch?</h2>
<ul>
  <h4>AXIOS</h4>
<li>In Axios,the data is sent through data property.</li>
<li>Axios has URL in request object.</li>
<li>Axios's data contains the objects.</li>
<li>Axios performs automatic transformation of JSON data.</li>
<li>Axios alllow cancelling request & request timeout.</li>
</ul>
   <h4>FETCH</h4>
<ul>
<li>In fetch,the data is sent through body property..</li>
<li>Fetch has no URL in request object..</li>
<li>Fetch's body has to be stringified..</li>
<li>Fetch is a two step process when handling with JSON data,first one is to make the actual request & second one is to call .json() method on the response.</li>
</ul>
<hr/>
<h2>2.What is UseState Hook ?(Implementation)?</h2>
<p>

The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional componen.</p>

    <h1>{Count}</h1>
    <button onClick={Increment}>Increment</button>
    <hr/><div>
   <Effect/>
    </div>
      <hr/>
        <>
        <Reducer/>
        </>
        <hr/><>
        <UseMemo/>
        </>
    </div>
    
  );
}

export default App;
