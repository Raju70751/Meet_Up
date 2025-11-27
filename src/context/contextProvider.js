import React from 'react'

const Context = React.createContext({
    topic: '',
    useName: '',
    isRegistered: '',
    userNameChange: () => {},
    topicChange: () => {},
    registerFunction: () => {},
})

export default Context