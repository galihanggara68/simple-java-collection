var itemCollection = [];

function addItem(){
	// Add item from input element to itemCollection array
	itemCollection.push(iptItem.value);
	
	updateListContainer();
}

function updateListContainer(){
	// Clear the container to delete duplicate item
	listContainer.innerHTML = "";
	
	// Loop through itemCollection
	itemCollection.forEach(function(item){
		// Add item to listContainer as list
		listContainer.innerHTML += `<li>${item}</li>`;
	});
}