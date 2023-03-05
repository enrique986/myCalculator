import {useAppContext} from "./calculatorState";

export default function CalculatorScreen(){
 const calculator = useAppContext();
 
 return (
  
        
          <div className="calculatorCurrentValue">{calculator.currentValue}{calculator.isDecimal?".":""}</div>
      
  
 );
  
    
}