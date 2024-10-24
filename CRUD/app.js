let selectedRow = null;

function onFormSubmit(event) {
    event.preventDefault();
    const formData = readFromData();

    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}
//READ
function readFromData() {
    return {

        productCode: document.getElementById('productCode').value,
        productName: document.getElementById('productName').value,
        quantity: document.getElementById('qty').value,
        price: document.getElementById('productPrice').value
    };
}

//CREATE
function insertNewRecord(data) {
    const table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerHTML = data.productCode;
    newRow.insertCell(1).innerHTML = data.productName;
    newRow.insertCell(2).innerHTML = data.quantity;
    newRow.insertCell(3).innerHTML = data.price;

    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = `
    <a href="#" onClick="onEdit(this)" class="edit-btn">Edit</a>
    <a href="#" onClick="onDelete(this)" class="delete-btn">Delete</a>
`;

}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;  // Select the row containing the clicked Edit button

    // Populate the form fields with the current row values
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('productName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('productPrice').value = selectedRow.cells[3].innerHTML;
}


//UPDATE
function updateRecord(data) {
    selectedRow.cells[0].innerHTML = data.productCode;
    selectedRow.cells[1].innerHTML = data.productName;
    selectedRow.cells[2].innerHTML = data.quantity;
    selectedRow.cells[3].innerHTML = data.price;
    selectedRow = null;
}

//DELETE
function onDelete(td) {
    if (confirm('Are you sure you want to delete this product')) {
        const row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
function resetForm() {
    document.getElementById('productCode').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('productPrice').value = '';
    selectedRow = null;
}