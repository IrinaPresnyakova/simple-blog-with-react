import { useState} from 'react'

const title = 'This is my new blog, welcome!';
const likes = 10;
const link = 'https://www.vpl.ca/'

const Home = () => {
    
    // let name = 'mario'; //this variable is not reactive, that is, it doesn't ask React to update it on click in the browser (if we want to change name on click). We need a hook - a special function in React)

    // How to make a reactive value? 
    const [name, setName] = useState('mario'); //we create a const and use array destructuring to grab two values that the hook returns to us, the first one is the initial one that we can call anything, e.g., 'name'; the 2nd value is th fun we use to change that value: setName. Then we go to handle click fn and envoke setName fn with an argument to which we want to change

    const [age, setAge] = useState(25)

    // create a function to handle button click inside the component
    const handleClick = () => {
        setName('luigi'); //setName is from line 12
        setAge(50);
    }
    // create a function that takes a name as a parameter -see lines 23 and on 
    // const handleClickAgain = (name, e) => {
    //     console.log('Hello' + name, e)
    // }

    return (
        <div className="home">
            <h1>Homepage</h1>
            
            {/* if we want to add an argument to the button, we wrap in into an anonymous funciton. We don't invoke it, we just reference it. IT's not gonna be invoke right away because we don't invoke this anonymous fn untill the click*/}
            {/* <button onClick={(e) =>{
                handleClickAgain(' Mario', e)
            }}>
                Click me again
            </button> */}
                {/* we can also turn this fn into a one-liner, like so:  <button onClick={() => handleClickAgain(' Mario')}>Click me again</button> */}


            {/* add the function from line 9 to the button with curly brackets, no () because that would invoke it right away */}
            <button onClick={handleClick}>Click me</button> 
            <p>{name} is {age} years old</p>

            <h2>{title}</h2> 
            <p>Liked {likes} times</p>
            <p>And this is the pi value: {Math.PI}</p>
            <p>Why not add a random number, too? {Math.random()}</p>
            <p>This is my favorite website: <a href={link}>Vancouver Public Library</a> </p>
        </div>
    );
}
 
export default Home;