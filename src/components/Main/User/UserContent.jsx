import { useEffect, useState } from 'react'
import { User } from './User'

// import customData from '../../../lib/UserRepository.json';


export function UserContent({ filterUsers, filterUserType, pageNumber, setbuttonsCount }) {
    const [usersArray, setUsersArray] = useState([]);



    useEffect(() => {
        
        console.log(filterUsers)
        
        const arrType = [];
        for (const key in filterUserType) {
            if (Object.hasOwnProperty.call(filterUserType, key)) {
                const element = filterUserType[key];
                if (element) arrType.push(key);
            }
        }
        const filtraTipo = arrType.join(',');
        
        
        
        const arrRegion = [];
        for (const key in filterUsers) {
            if (Object.hasOwnProperty.call(filterUsers, key)) {
                const element = filterUsers[key];
                if (element) arrRegion.push(key);
            }
        }
        const filtraRegion = arrRegion.join(',');
        
        console.log(filtraRegion)

        let url = `http://localhost:8080/api/v1/users?page=${pageNumber ? pageNumber : 1}&size=9`
        if (arrType.length > 0) url += `&types=` + filtraTipo
        if (arrRegion.length > 0) url += `&regions=` + filtraRegion

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setbuttonsCount(Math.ceil(data.totalCount / data.pageSize))
                setUsersArray(data.users)
            });
        

    }, [pageNumber, filterUsers, filterUserType])


    return (
        <ul className='ListUsers'>
            {usersArray?.map(user => <User userInfo={user} />)}
        </ul>
    )
}