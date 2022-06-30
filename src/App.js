import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
import Header from './header';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

const App = () => {
  const [inputList, setInputList] = useState("buy apple");

  const [Items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  };

  const deleItems = (id) =>{
    console.log('deleted')

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    })
} 

  return (
    <>  

  <section class="container vert-offset-top-2">
    <div id="todoBox" class="todoBox col-xs-6 col-xs-offset-3">
      <div className='main_div'>
        <div className='center_div'>
          <Header/>
          <input type='text' placeholder='Add a Item' value={inputList} onChange={itemEvents}/>
          <button onClick={listOfItems}>Create</button>

          <div className="todo-list">
          <ol>
          {/* <li>{inputList}</li> */}

              {Items.map((itemval, index)=>{
               return (
                <>
                  <ToDoLists 
                  key={index} 
                  id={index}
                  text={itemval}
                  onSelect={deleItems}
                  />
                </>
               );

              })}
          </ol>
          </div>
        </div>
      </div>

      </div>
  </section>
    </>
  );
}

export default App;
