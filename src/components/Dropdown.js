import React, {useState} from "react";

const Dropdown = ({ options, selected, setSelected }) => {
    const [open, setOpen] = useState(false);

    //console.log(props.options)
    const renderedOptions = options.map((option) => {

        if (option.value === selected.value){
            return null;
        }
        
        return (
            <div 
            key={option.value} 
            className="item"
            onClick={()=> setSelected(option)}
            >
                {option.label}
            </div>
        )
    })
    

    return (
    <div className="ui form">
        <div className="field">
            <label className="label">Select a Color</label>
            <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? `visible active` : ''}`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className={`menu ${open ? `visible transition` : ''} `}>
                    {renderedOptions}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dropdown;