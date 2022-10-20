import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    const [colors, setColors] = useState([]);
    // Refer to Hint 2 for more help!
    
    // handle.click: 'red','pink','blue','green'
    const handleClick = (color) => {
        setColors([color, ...colors]);
    }
    // pass it down to menu
    // pass it down to block component.
    /* Use the map() function to render multiple Blocks! */
    
    const posts = colors.map(color => <Block color={color}></Block>); // TODO: edit this variable

    return (
        <div>
            <Menu handleClick={handleClick}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;