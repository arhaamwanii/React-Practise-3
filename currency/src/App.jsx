import { useState } from 'react'
import './App.css'
import useCurrencyinfo from './hooks/useCurrencyinfo';
import InputBox from './Components/Input';

function App() { 

  return (
    <>
    <h1 className='text-white font-size' >Currency Convertor</h1>
    <InputBox/>
    <InputBox/>
    </>
  )
}

export default App

//comment - safe no tution 

