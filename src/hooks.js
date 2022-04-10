import React, {useState} from "react";

function TurnSide(initialFlipState = true){
    const [isFacingUp, setIsFacingUp] = useState(initialFlipState);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return[isFacingUp,flipCard]
}

function useAxios(keyInLS, baseUrl) {
    const [responses, setResponses] = useLocalStorage(keyInLS);
  
    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
      const response = await axios.get(`${baseUrl}${restOfUrl}`);
      setResponses(data => [...data, formatter(response.data)]);
    };
  
    const clearResponses = () => setResponses([]);
  
    return [responses, addResponseData, clearResponses];
  }

export  {TurnSide,useAxios};