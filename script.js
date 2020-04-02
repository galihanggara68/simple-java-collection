var itemCollection = [];

function addItem(){
	// Create object variable represent item object
	let item = {
		code: iptItemCode.value, 
		name: iptItemName.value
	};
	// Add item to itemCollection array
	itemCollection.push(item);
	
	updateListContainer();
}

function updateListContainer(){
	// Clear the container to delete duplicate item
	listContainer.innerHTML = "";
	
	// Loop through itemCollection
	itemCollection.forEach(function(item){
		// Add item to listContainer as list
		listContainer.innerHTML += `<li>${item.code} ${item.name}</li>`;
	});
}