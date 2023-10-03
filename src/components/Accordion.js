import React, { useState } from 'react';
import { GoChevronRight, GoChevronDown } from 'react-icons/go';

export default function Accordion({ items }) {
    const [ expandedIndex, setExpandedIndex ] = useState(0);

    const handleClick = (index) => {
        // Updates the most recently clicked index
        setExpandedIndex(currentIndex => currentIndex === index ? -1 : index);
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span> {isExpanded ? <GoChevronDown/> : <GoChevronRight/>} </span>;

        return (
            <div key={item.id} onClick={() => handleClick(index)}> 
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>  
        )
    });
    return <div>{renderedItems}</div>;
}
