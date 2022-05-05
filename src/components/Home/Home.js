import { useState} from 'react'

const Home = () => {
    
    // how to create data to populate the blog
    const [blogs, setBlogs] = useState([
        {title: "This is my new blog", body: "It finaly happened! I got my very own site.", author: "Irina", id: 1},
        {title: "Minecraft, minecraft, minecraft!", body: "I just hacke dmy mom's site, mwahaha!", author: "Sasha", id: 2},
        {title: "I've been hacked!", body: "Oh no, it's the minecraft fan haha", author: "Irina", id: 3}
    ]);

    // not cool to hard code as divs in the following div bc the number of blogs can change! We gonna use map to iterate through each and create a template
    return (
        <div className="home">
            {blogs.map((blog ) => ( //blogs is from line 6 - first value in that array; we call map method on it which fires a callback fn on each item; blog is each item in the array and when we cycle through it, we get access to the title, author, body, id; template will be returned after the arrow in parenthesis

                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div> //this is the template
            ))}
        </div>
    );
}
 
export default Home;