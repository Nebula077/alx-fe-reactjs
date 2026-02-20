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
        if (!isFormValid()) {
            console.log('Form is not valid')
            return
        }
        console.log('Form Data:', formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(String(email).toLowerCase())
    }

    const validatePassword = (password) => {
        return password.length >= 6
    }

    const isFormValid = () => {
        return formData.username && validateEmail(formData.email) && validatePassword(formData.password)
    }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-red-500">Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username:</label>
                <input 
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    value={username}
                    onChange={handleChange}
                    name="username"
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-2">Email:</label>
                <input 
                    type="email"
                    className="w-full px-3 py-2 border rounded"
                    value={email}
                    onChange={handleChange}
                    name="email"
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-2">Password:</label>
                <input 
                    type="password"
                    className="w-full px-3 py-2 border rounded"
                    value={password}
                    onChange={handleChange}
                    name="password"
                />
            </div>
            <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</button>
        </form>
    </div>
  )
}

export default RegistrationForm