import React from "react";
import { useEffect , useState } from "react";

function useCurrencyinfo(currency) {

    const [data , setData] = useState("it isn't working ")

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(() => {
        fetch(url).then(() => res.json()).then((res) =>setData(res[currency]) )
        console.log(data)
    } , [currency]) 

    console.log(data);
    
    return data 
}

export default useCurrencyinfo;
// comment
// comment 2
//comment 3
//comment 4
//comment 5

