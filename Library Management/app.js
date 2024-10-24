// Get references to DOM elements
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list").querySelector("tbody");

// Add book event listener to the form
bookForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Get the values from the input fields
    const title = document.getElementById("book-title").value;
    const bookAuthor = document.getElementById("book-author").value;
    const ISBN = document.getElementById("ISBN-No").value;

    // Call function to add book to the list
    addToBookList(title, bookAuthor, ISBN);

    // Clear the form after adding the book
    bookForm.reset();
});

// Function to add a book to the table
function addToBookList(title, bookAuthor, ISBN) {
    // Create a new table row
    const row = document.createElement("tr");

    // Fill the row with the book data
    row.innerHTML = `
        <td>${title}</td>
        <td>${bookAuthor}</td>
        <td>${ISBN}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Append the new row to the book list
    bookList.appendChild(row);

    // Add click event listener to the delete button
    row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove(); // Remove the row on click
    });
}
