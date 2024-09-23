import React, { useState, useEffect } from "react";

function Fetcher() {

    // initialise state variable to store data received from http request
    const [gottenData, setgottenData] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => setgottenData(data));
    
    // empty dependency array so effect only runs once (like componentDidMount)
    }, [])
        
    // initialise empty arry to format gotten data for rendering
    const arrayOfIds = [];
    
    // loop through fetched data combining and adding todo id and title
    // as elements to an array of todos
    for (let i = 0; i < gottenData.length; i++) {
      arrayOfIds.push("Todo " + gottenData[i].id + ": " + gottenData[i].title);
    }
    
    // map todos array to <li> elements for rendering inside <ul> element
    const arrayOfTodosLis = arrayOfIds.map((todo) => <li>{todo}</li>);
    
        
    return (
      <div>
        <p>Todos List:</p>
        <ul>
          {arrayOfTodosLis}
        </ul>
      </div>
    );
}

export default Fetcher;