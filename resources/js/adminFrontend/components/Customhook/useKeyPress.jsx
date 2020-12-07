import React, { useEffect, useState } from 'react';

const useKeyPress = targetkey => {
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = ({key}) =>{
        if(key === targetkey){
            setKeyPressed(true);
        }
    }
    const upHandler = ({key}) =>{
        if(key === targetkey){
            setKeyPressed(false);
        }
    }
     // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
          window.removeEventListener('keydown', downHandler);
          window.removeEventListener('keyup', upHandler);
        };
      }, []);
    return keyPressed;
};

export default useKeyPress;