import React, {useState} from 'react'
import { addStyles, EditableMathField  } from 'react-mathquill'


addStyles();

function App(props) {
  const [latex, setLatex] = useState("");

  const injectMathFunction = (latexString) => {
    setLatex(latex => latex.trim()+latexString)
  };
  return (
    <div>
      <div>
      <EditableMathField style={{"width":"20%"}} 
        latex={latex} 
        onChange={(mathField) => {
         
          setLatex(mathField.latex());
        }}
      />
      </div>
      <div style={{"margin-top":"10px"}}>
        <button onClick={() => injectMathFunction("{\\sqrt{}}")}>√</button>
        <button onClick={() => injectMathFunction("\\frac{}{}")}>/</button>
        <button onClick={() => injectMathFunction("\\cos")}>cos</button>
        <button onClick={() => injectMathFunction("\\tan")}>tan</button>
      </div>
    </div>
  );
}

export default App;
