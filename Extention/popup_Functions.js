function addRow(tableID, values) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);
  let newRow = tableRef.insertRow(-1);
  for (var i = 0; i < values.length; i++) {


  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode(values[i]);
  newCell.appendChild(newText);
  }
}
