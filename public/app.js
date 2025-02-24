document.getElementById('item-form').addEventListener('submit', async (e) => {  
    e.preventDefault();  
    
    const name = document.getElementById('name').value;  
    const description = document.getElementById('description').value;  

    const response = await fetch('/items', {  
        method: 'POST',  
        headers: {  
            'Content-Type': 'application/json'  
        },  
        body: JSON.stringify({ name, description })  
    });  

    if (response.ok) {  
        await fetchItems();  
    }  
});  

async function fetchItems() {  
    const response = await fetch('/items');  
    const items = await response.json();  
    
    const itemsDiv = document.getElementById('items');  
    itemsDiv.innerHTML = '';  
    items.forEach(item => {  
        const itemDiv = document.createElement('div');  
        itemDiv.textContent = `${item.name}: ${item.description}`;  
        itemsDiv.appendChild(itemDiv);  
    });  
}  

// Fetch items when the page loads  
fetchItems();