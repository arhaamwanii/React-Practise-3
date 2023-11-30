import React, {useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], //giving a a by deault value to prevent it from crashing
    selectCurrency = "usd",
    amountDiable = false,
    currencyDisable = false,
    className = "",

}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDiable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))  }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value) }
                    disabledn= {currencyDisable}
                    
                >
                    
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    ))}

                    {/* we  have to use keys when we use loops in react   */}
                        
                
                </select>
            </div>
        </div>
        
    );
}

export default InputBox;

//arham amin wan  i it is 

//this is yet another comment for yet another day --- DAMN\
//NEED A PERSON
    //WHAT DO YOU WANT IN HIM
        // -   better if he would be NIR
        // -   should be a programmer --- or should   be learing programming