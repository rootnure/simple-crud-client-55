import { useLoaderData } from "react-router-dom";


const Users = () => {

    const users = useLoaderData();

    const handleDelete = _id => {
        console.log('delete', _id);
    }

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <div
                        key={user._id}
                    >{user.name} ({user.email}) <button
                        onClick={() => handleDelete(user._id)}
                    >X</button></div>)
                }
            </div>
        </div>
    );
};

export default Users;