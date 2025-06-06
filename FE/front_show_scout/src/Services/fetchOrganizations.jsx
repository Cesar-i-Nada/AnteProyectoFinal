async function getOrganizations() {
    try {
        
        const response = await fetch('http://127.0.0.1:8000/api/organizationData/', {
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

async function postOrganizations(userData) {
  
    try {
        const response = await fetch('http://127.0.0.1:8000/api/organizationData/', {
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


async function updateOrganizations(obj,id) 
{
    try {
        const response = await fetch('http://127.0.0.1:8000/api/organizationData/'+id, {
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


async function deleteOrganizations(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/organizationData/${id}`, {
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

export default{ deleteOrganizations,getOrganizations,postOrganizations,updateOrganizations };