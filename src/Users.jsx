import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const initialUsers = useLoaderData();

    const [users, setUsers] = useState(initialUsers);

    const handleDelete = _id => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted');
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
                else {
                    alert('Failed to delete');
                }
            })
    }

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div className="flex flex-col gap-2">
                {
                    users.map(user => <div
                        key={user._id}
                        className="flex gap-5 justify-between"
                    >
                        <div>{user.name} ({user.email})</div>

                        <div className="flex gap-2">

                            <Link to={`/update/${user._id}`}>
                                <button>Update</button>
                            </Link>

                            <button
                                onClick={() => handleDelete(user._id)}
                            >Delete</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;