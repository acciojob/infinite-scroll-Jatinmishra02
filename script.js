//your code here!

document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('list');
    const listItem = list.getElementsByTagName('li');

    function addListItem() {
        const listItemCount = listItem.length;
        for (let i = listItemCount + 1; i <= listItemCount + 2; i++) {
            const li = document.createElement('li');
            li.textContent = 'List Item ' + i;
            list.appendChild(li);
        }
    }

    addListItem(); // Add initial 10 list items

    list.addEventListener('scroll', function() {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            addListItem();
        }
    });
});
