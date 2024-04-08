function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}

// Call the function to bind the event listener
addingEventListener();
