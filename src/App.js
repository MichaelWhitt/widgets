import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label:'The Color Red',
        value: 'red'
    },
    {
        label:'The Color Green',
        value: 'green'
    },
    {
        label:'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
    <div>
        {/* <Accordion items={items}/> */}
        {/* <Search/>  */}
        <Dropdown 
        selected={selected} 
        setSelected={setSelected}
        options={options}
        />
    </div>
    )
}