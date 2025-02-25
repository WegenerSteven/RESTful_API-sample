document.getElementById('item-form').addEventListener('submit', async (e) => {  
    e.preventDefault();  
    
    const id = document.getElementById('item-id').value;  
    const name = document.getElementById('name').value;  
    const description = document.getElementById('description').value;  

    const method = id ? 'PUT' : 'POST';  
    const url = id ? `/items/${id}` : '/items';  

    const response = await fetch(url, {  
        method: method,  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify({ name, description })  
    });  

    if (response.ok) {  
        clearForm();  
        await fetchItems();  
    }  
});  

async function fetchItems() {  
    const response = await fetch('/items');  
    const items = await response.json();  
    
    const itemsDiv = document.getElementById('items');  
    itemsDiv.innerHTML = '';  
    items.forEach(item => {  
        const itemDiv = document.createElement('tr');  
        itemDiv.innerHTML = `  
            <td>${item.name}</td>  
            <td>${item.description}</td>  
            <td>  
                <button onclick="editItem('${item._id}', '${item.name}', '${item.description}')">Edit</button>  
                <button onclick="deleteItem('${item._id}')">Delete</button>  
            </td>  
        `;  
        itemsDiv.appendChild(itemDiv);  
    });  
}  

function clearForm() {  
    document.getElementById('item-id').value = '';  
    document.getElementById('name').value = '';  
    document.getElementById('description').value = '';  
}  

async function editItem(id, name, description) {  
    document.getElementById('item-id').value = id;  
    document.getElementById('name').value = name;  
    document.getElementById('description').value = description;  
}  

async function deleteItem(id) {  
    if (confirm("Are you sure you want to delete this item?")) {  
      const response = await fetch (`/items/${id}`,{
        method: 'DELETE'
      });
      if(response.ok){
        await fetchItems(); // Refresh the Items list
      } else{
        const error = await response.json();
        alert(error.message, "Unable to delete item");
      }
    }  
}  

// Fetch items when the page loads  
fetchItems();