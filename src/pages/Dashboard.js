import { useState } from "react";
import Product from "../components/Product";
import Products from "../components/Products";

const Dashboard = () => {

    const [count,setCount] = useState(0);

    const countHandler = () =>{
        setCount(count+1);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <Products />
            <label> {count} </label>
            <button onClick={countHandler}> Add </button>
        </div>
    );

}

export default Dashboard;