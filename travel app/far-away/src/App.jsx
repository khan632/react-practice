import { useState } from "react";
import FlashCard from "./challenge/FlashCard";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App () {
  // whole useState and handleItem function move out from form component 
  // to parent component so that there children should use Data 
  // this process called lifting up the state 
  // when we pass both setter fn and state to child this is also known as child to parent data flow
    const [item, setItem] = useState([]);

  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }


  return(
    <div className="app">
      <Logo />
      <Form onHandleAddItem={handleAddItem} />
      <PackingList items={item} onHandleDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
    // <FlashCard />
  )
}

/*
STATE vs PROPS
States: 
1. it's an internal data, owned by components.
2. it is known as component "memory", used to handle data inside component independently.
3. can be updated by the components itself.
4. updating a state causes component to re-render
5. used to make components more interactive.

Props:
1. It's an external data, owned by parents components.
2. Similar to function's parameter.
3. Read only data passed from parents to children, children can only use this data not able to modify it.
4. Receiving new props causes component to re-render, usually when parent props is updated or modified.
5. used by parent component to configure child components.
*/