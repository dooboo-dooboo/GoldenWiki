import { useRef } from "react";



export default function Searchbar({ setSearchData }) {
    const nowSearchData = useRef(null);
    
    const handleSearchData = () => {
        setSearchData(nowSearchData.current.value);
    }
    
    return (
        <div>
            <input type="text" ref={nowSearchData}></input>
            <button onClick={handleSearchData}>Search</button>
        </div>
    )
}