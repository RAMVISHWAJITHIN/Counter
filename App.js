import React from "react"
import ReactDOM from "react-dom"
import Counter from "./src/components/Counter";
import { createRoot } from 'react-dom/client'
import ColorPicker from "./src/components/ColorPicker";

function App() {
    return (
       <>
       <Counter/> 
      
       </>
    );
}

const container = document.getElementById('root');
 const root = createRoot(container); 
root.render(<App tab="home" />)
