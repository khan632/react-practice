import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App () {
  return(
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
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