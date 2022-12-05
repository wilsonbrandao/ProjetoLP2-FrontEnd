import { useEffect, useState } from 'react'
import { User } from './User'

// import customData from '../../../lib/UserRepository.json';


export function UserContent({ filterUsers, pageNumber }) {
    const [usersArray, setUsersArray] = useState([]);
  

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/users?page=${pageNumber? pageNumber : 1}&size=9`)
            .then(response => response.json())
            .then(data => setUsersArray(data.users));
    }, [pageNumber])


    return (
            <ul className='ListUsers'>

                {usersArray
                    .filter(user => filterUsers.norte ? user.location.region === 'NORTH' : false)
                    .map(user => <User userInfo={user} />)}

                {usersArray
                    .filter(user => filterUsers.nordeste ? user.location.region === 'NORTHEAST' : false)
                    .map(user => <User userInfo={user} />)}

                {usersArray
                    .filter(user => filterUsers.centroOeste ? user.location.region === 'MIDWEST' : false)
                    .map(user => <User userInfo={user} />)}

                {usersArray
                    .filter(user => filterUsers.sudeste ? user.location.region === 'SOUTHEAST' : false)
                    .map(user => <User userInfo={user} />)}

                {usersArray
                    .filter(user => filterUsers.sul ? user.location.region === 'SOUTH' : false)
                    .map(user => <User userInfo={user} />)}
            </ul>
    )
}