import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Shop(){
    useEffect(() => {
        getUsers()
    }, [])

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const data = await fetch('http://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setUsers(users)
    }

    return(
        <div>
            {users.map(user => (
                <h5 key={user.id}>
                    <Link to={'/shop/' + user.id}>
                    {user.name}
                    </Link>
                </h5>
            ))}
        </div>
    );
}