const list = document.getElementById('draft-picks');
const items = list.querySelectorAll('li');

let draggingItem = null;

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        draggingItem = item;
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        draggingItem = null;
        item.classList.remove('dragging');
    });

    item.addEventListener('dragover', (event) => {
        event.preventDefault(); // Prevent default to allow drop
    });

    item.addEventListener('dragenter', () => {
        item.classList.add('over');
    });

    item.addEventListener('dragleave', () => {
        item.classList.remove('over');
    });

    item.addEventListener('drop', () => {
        if (draggingItem) {
            // Insert dragging item before the current item
            list.insertBefore(draggingItem, item);
        }
    });
});
