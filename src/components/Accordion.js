import React, {useState} from "react";


const Accordion = ({items}) => {
    //array destructuring-> shortcut to get elements inside of an array
    //const [firstEl, secondEl] = colors;
    //const colors = ['red', 'green']
    //colors[0] or colors[1]
    const [activeIndex, setActiveIndex] = useState(null);
    //calling setActiveIndex setter function will cause the component to auto-rerender
    //calling useState takes 1 arg, and is the default or initial value for our piece of state
    //same as below
    //const things = useState(null)
    // const activeIndex = things[0]
    // const setActiveIndex = things[1]
    


    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        
        return (
            <React.Fragment key={item.title}>
                <div 
                className={`title ${active}`}
                onClick={()=>onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return <div className="ui styled accordion">
            {renderedItems}
        </div>
}

export default Accordion;