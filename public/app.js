document.getElementById("item-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("item-id").value;
  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const quantityUnit = document.getElementById("quantityUnit").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const dateBought = document.getElementById("dateBought").value;

  // Input validation
  if (
    !name ||
    !quantity ||
    !quantityUnit ||
    !price ||
    !description ||
    !dateBought
  ) {
    alert("All fields are required.");
    return;
  }

  const method = id ? "PUT" : "POST";
  const url = id ? `/items/${id}` : "/items";

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        quantity,
        quantityUnit,
        price,
        description,
        dateBought,
      }),
    });

    if (response.ok) {
      clearForm();
      await fetchItems();
    } else {
      const error = await response.json();
      alert(error.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while submitting the form.");
  }
});

async function fetchItems() {
  try {
    const response = await fetch("/items");
    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }
    const items = await response.json();

    const itemsDiv = document.getElementById("items");
    itemsDiv.innerHTML = "";

    items.forEach((item) => {
      const itemDiv = document.createElement("tr");
      const formattedPrice = new Intl.NumberFormat("en-KE", {
        style: "currency",
        currency: "KES",
      }).format(item.price);

      itemDiv.innerHTML = `  
              <td>${item.name}</td>  
              <td>${item.quantity} ${item.quantityUnit}</td>  
             <td>${formattedPrice}</td> 
              <td>${item.description}</td>
              <td>${new Date(item.dateBought).toLocaleDateString()}</td>  
              <td>  
                  <button onclick="editItem('${item._id}', '${item.name}', ${
        item.quantity
      }, '${item.quantityUnit}', ${item.price}, '${item.description}','${
        item.dateBought
      }')" class="btn btn-warning btn-sm">  
                      <i class="fas fa-edit"></i>  
                  </button>  
                  <button onclick="deleteItem('${
                    item._id
                  }')" class="btn btn-danger btn-sm">  
                      <i class="fas fa-trash"></i>  
                  </button>  
              </td>  
          `;
      itemsDiv.appendChild(itemDiv);
    });
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while fetching items.");
  }
}

function clearForm() {
  document.getElementById("item-id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("quantityUnit").value = ""; // Ensure this field is cleared
  document.getElementById("price").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dateBought").value = "";
}

async function editItem(
  id,
  name,
  quantity,
  quantityUnit,
  price,
  description,
  dateBought
) {
  document.getElementById("item-id").value = id;
  document.getElementById("name").value = name;
  document.getElementById("quantity").value = quantity;
  document.getElementById("quantityUnit").value = quantityUnit; // Ensure this field is set
  document.getElementById("price").value = price;
  document.getElementById("description").value = description;

  // Convert dateBought to yyyy-mm-dd format
  const date = new Date(dateBought);
  const formattedDate = date.toISOString().split("T")[0];
  document.getElementById("dateBought").value = formattedDate;
}

async function deleteItem(id) {
  if (confirm("Are you sure you want to delete this item?")) {
    try {
      const response = await fetch(`/items/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        await fetchItems(); // Refresh the Items list
      } else {
        const error = await response.json();
        alert(error.message, "Unable to delete item");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting the item.");
    }
  }
}

// Fetch items when the page loads
fetchItems();
