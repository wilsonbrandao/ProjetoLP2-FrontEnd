import { useEffect, useState } from 'react'
import { User } from './User'

import customData from '../../../lib/UserRepository.json';


export function UserContent({ filterUsers }) {
    const [usersArray, setUsersArray] = useState([]);


    useEffect(() => {
        setUsersArray(customData.users);
        console.log("chamou")
    }, [])


    return (
        <ul className='ListUsers'>
            
            {usersArray
                .filter(user => filterUsers.norte ? user.location.region === 'norte' : false)
                .map(user => <User userInfo={user} />)}

            {usersArray
                .filter(user => filterUsers.nordeste ? user.location.region === 'nordeste' : false)
                .map(user => <User userInfo={user} />)}

            {usersArray
                .filter(user => filterUsers.centroOeste ? user.location.region === 'centro-oeste' : false)
                .map(user => <User userInfo={user} />)}

            {usersArray
                .filter(user => filterUsers.sudeste ? user.location.region === 'sudeste' : false)
                .map(user => <User userInfo={user} />)}

            {usersArray
                .filter(user => filterUsers.sul ? user.location.region === 'sul' : false)
                .map(user => <User userInfo={user} />)}
        </ul>
    )
}