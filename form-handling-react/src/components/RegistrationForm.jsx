import React from 'react'
import { useState } from 'react'

function RegistrationForm() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Data:', formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }
  return (
    <div>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input 
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    name="username"
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                />
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default RegistrationForm