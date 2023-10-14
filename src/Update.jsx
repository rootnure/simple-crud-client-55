import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log({ name, email });
    }

    return (
        <div>
            <h3>Update User information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;