function todo() { 
	var item = document.createTextNode(document.getElementById("input").value)
	item.className = "item"

	var pListItem = document.createElement('p')
	pListItem.className = "pListItem"

	var listItem = document.createElement("li")
	listItem.className = "listItem" 

	pListItem.appendChild(item)
	listItem.appendChild(pListItem)
	list.appendChild(listItem)

	var deleteText = document.createTextNode("Completed")

	var deleteButton = document.createElement("button")
	deleteButton.className = "deleteButton"
	
	deleteButton.appendChild(deleteText)
	listItem.appendChild(deleteButton)

	$(deleteButton).click(function() {
		$(pListItem).toggleClass("crossOut");
		if ($(this).text() == "Completed") {
			$(this).text("Undo"); 
		} else {
     		$(this).text("Completed"); 
  		}; 
	})
}

$("button").click(function() {
	todo()
});