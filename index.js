let count = 0;
const countEl = document.getElementById("count");
const entriesList = document.getElementById("entries-list");

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    if (count > 0) {
        count--;
        countEl.textContent = count;
    }
}

function reset() {
    if (count !== 0) {
        saveEntry(count);
        count = 0;
        countEl.textContent = count;
    }
}

function saveEntry(value) {
    const entryItem = document.createElement("li");
    entryItem.textContent = `Count: ${value}`;
    entriesList.appendChild(entryItem);
}