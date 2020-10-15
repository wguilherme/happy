import React from 'react';

interface TitleProps {
  text: string;
}


function Title(props: TitleProps){
  return <h1>{props.text}</h1>
}


function App() {
  return (
    <div className="App">

      <Title text="Title 1" />
      <Title text="Title 2"/>
      <Title text="Title 3"/>
      <Title text="Title 4"/>
      
    {/* <h1>Hello World</h1> */}
    </div>
  );
}

export default App;
