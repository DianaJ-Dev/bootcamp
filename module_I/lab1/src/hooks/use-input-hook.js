import { useState} from "react";


export const useInputHook = (initialValue) => {

    const [value, setValue] = useState(initialValue)

    const resetValue = () => {
      setValue('');
  };

  return {
    value,
    setValue,
    reset:resetValue,
    bind:{
      value,
      onChange: event =>{
        console.log(event.target.value);
        setValue(event.target.value)
      }
    }
  }
}
