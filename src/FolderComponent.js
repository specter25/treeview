import React from 'react'

const FolderComponent = ({ unique, value, setFolder, property, setProperty }) => {

    const handleClick = (event) => {
        setFolder(value[property])
        setProperty("tables")
    }
    return (
        <div key={unique} className="folder" onClick={(e) => handleClick(e)}>
            <div className="icon" />
            <span>
                {value.name}
            </span>
        </div>
    )
}

// const setProperty =(property , setProperty)=>{

// }

export default FolderComponent