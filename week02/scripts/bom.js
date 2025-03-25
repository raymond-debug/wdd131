const input = document.querySelector('#favcap');
const button = document.querySelector('button');
const list = document.querySelector('______');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
li.append(li);
// Get the add chapter button and input field elements
var addChapterButton = document.getElementById('add-chapter-button');
var chapterInput = document.getElementById('chapter-input');
var chapterList = document.getElementById('chapter-list');

// Add event listener to the add chapter button
addChapterButton.addEventListener('click', function() {
  // Check if the input is not blank
  if (chapterInput.value.trim() !== '') {
    // Move the code from the previous activity into this if block
    var newListItem = document.createElement('li');
    newListItem.textContent = chapterInput.value;
    
    // Add a delete button to the list item
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      chapterList.removeChild(newListItem);
    });
    newListItem.appendChild(deleteButton);
    // Add the new list item to the chapter list
    chapterList.appendChild(newListItem);
        
    // Clean up the interface by clearing the input value
    chapterInput.value = '';
    } else {
    // If the input is blank, focus on the input field
    chapterInput.focus();
}

    // Whether or not a list item was created, focus on the input element
    chapterInput.focus();
    });

