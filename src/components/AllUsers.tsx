
import React, { useEffect, useState } from 'react'
import { getAllUser } from '../api/user'
import { User } from '../api/types'
import UserItem from './UserItem'


const AllUsers = () => {
    const [users, setUsers] = useState<Array<User>>([])


    async function _getUsers() {
        const data = await getAllUser();
        console.log('got users')
        setUsers(data);
        console.log(data)

    }

    useEffect(() => {
        _getUsers()
    }, [])



    function renderItem(values: User) {
        return (
            <div key={values.id}>
                <UserItem {...values} />
            </div>
        )
    }

    return <ul className="post-list">{users.map(renderItem)}</ul>
}

export default AllUsers
