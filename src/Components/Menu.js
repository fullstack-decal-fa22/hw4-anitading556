import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 
  
    const colors = ['red', 'pink', 'blue', 'green'];

    return (
      <div className="colorOptions">
          {<Color color={colors[0]} handleClick={props.handleClick}/>}
          {<Color color={colors[1]} handleClick={props.handleClick}/>}
          {<Color color={colors[2]} handleClick={props.handleClick}/>}
          {<Color color={colors[3]} handleClick={props.handleClick}/>}
      </div>
    );
}

export default Menu;