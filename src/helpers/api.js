import React, { useState, useEffect } from 'react'

const api = () => {
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch("http://localhost:8000/message")
            .then(() => res.json())
            .then((data) => setMessage(data.message))
    })
}

export default api