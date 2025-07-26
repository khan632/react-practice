import { useState } from "react";
import FlashCard from "./challenge/FlashCard";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  // whole useState and handleItem function move out from form component
  // to parent component so that there children should use Data
  // this process called lifting up the state
  // when we pass both setter fn and state to child this is also known as child to parent data flow
  const [item, setItem] = useState([]);

  // const [numItem, setNumItems] = useState(); XXX no use can cause extra re-render

  function handleAddItem(item) {
    setItem((items) => [...items, item]);

    // setNumItems((numItem) => numItem + 1); XXX no use
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function onUpdateItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItem={handleAddItem} />
      <PackingList
        items={item}
        onHandleDeleteItem={handleDeleteItem}
        onUpdateItem={onUpdateItem}
      />
      <Stats item={item} />
    </div>
    // <FlashCard />
  );
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

/*
DERIVED STATE:
A state that is computed from an existing state or from props.
example:

1. lets suppose we have three state one cart which contain product detail like name and price
   next 2 state one contain total element in cart and other contain total price of cart item

   The issue with above implementation are:
     a. Three seperate piece of state, even though no of item and toatl price which depend on cart
     b. Need to keep them in sync (update together)
     c. 3 state update will cause component to re-render
  
     CONVERT IT INTO DERIVED STATE:
use ony Cart state --> convert no if item into a variable with .length property --> convert total price into state by using reduce method
    a. Just regular variable, no useState
    b. Cart state will be single state and single source of truth
    c. worked because re-render of cart state will update variable
*/
