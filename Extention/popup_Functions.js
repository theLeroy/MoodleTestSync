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

//Rm Dublicates from object
function getUnique(arr, comp) {

  const unique = arr
       .map(e => e[comp])

     // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

   return unique;
}
