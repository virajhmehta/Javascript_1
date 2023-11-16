import React {Component} from 'react';
//JSX --> Javascript XML
// it is syntax extention for the js used with react to describe what UI should look like. Jsx will
// allow u to write html kind of code in your js file 

const MyComponent = () => {
    const name = 'John';

    return (
        <div>
            <h1>Hello</h1>
            <p>This is paragraph</p>
        </div>
    );
    
};
export default MyComponent;

// funciton component

class App extends React.Component
{
    render()
    return(
        <div>
        
    )
}