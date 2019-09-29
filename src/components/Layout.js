import React from 'react'

export default ({ children }) => (
    <div
        style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        {children}
    </div>
)