import React from 'react'

const Loading = ({color}) => {
    return (
        <div className="spinner-border" style={{color: color}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Loading