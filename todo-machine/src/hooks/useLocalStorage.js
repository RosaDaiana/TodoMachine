import React from 'react';

function useLocalStorage(itemName, initialValue) {
    //Estados
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(false); 
    
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          
          let parsedItem;
          // If item is not saved in local storage, save it
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      }, 2000);
    }, []);
    
    const saveItem = (newItem) => { 
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error};
  }

  export { useLocalStorage };