async function getUsers() {
    try {
        
        const response = await fetch('http://127.0.0.1:8000/api/PiecesData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////

async function postUsers(userData) {
  
    try {
        const response = await fetch('http://127.0.0.1:8000/api/PiecesData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        return await response.json();

    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////


async function updateUsers(obj,id) 
{
    try {
        const response = await fetch('http://127.0.0.1:8000/api/PiecesData'+id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}


//////////////LLAMADO DELETE/////////////


async function deleteUsers(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/PiecesData/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default{ deleteUsers,getUsers,postUsers,updateUsers };