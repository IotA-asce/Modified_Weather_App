import React, { useEffect, useState } from 'react'
import { getAvailableLanguages, setLanguage } from './ApiManager';

const LocationHeader = ({ api, setApi }) => {

    const [ddState, setDdState] = useState(false);
    const [selected, setSelected] = useState();
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getAvailableLanguages());
        setSelected('English');
    }, [items])

    useEffect(() => {
        const language = setLanguage(selected);
        setApi(api + language);
    }, [api, selected, setApi])

    return (
        <div className='LocationHeader' onClick={() => setDdState(!ddState)}>
            <div className='LHcurrent'>
                {selected}
            </div>
            <div className='LHdropdown'>
                {ddState && <DropDown items={items} selected={selected} setSelected={setSelected} />}
            </div>
        </div>
    )
}


const DropDown = ({ items, selected, setSelected }) => {

    useEffect(() => {
        // do stuff
    }, [items])

    return (
        <div className='DropDown'>
            {
                items.map(
                    (item, index) =>
                        <div 
                            className='DDitem'
                            key={index}
                            onClick={() => {setSelected(item)}}
                        >
                            {item}
                        </div>
                )
            }
        </div>
    )
}

export default LocationHeader