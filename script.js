let addBtn = document.querySelector(`.add-btn`);
let userInput = document.querySelector(`.user-input`);
let listContainer = document.querySelector(`.list-container`);

let itemList = [];

function displayItems() {
    listContainer.innerHTML = ``;
    innerHtml = ``;
    for (let i = 0; i < itemList.length; i++) {
        innerHtml += `<div class="item">
                            <li>${itemList[i]}</li><buton class="delete"></buton>
                        </div>`
    }
    listContainer.innerHTML = innerHtml;
    saveData();
}

addBtn.addEventListener(`click`, () => {
    itemList.push(userInput.value);
    console.log(userInput.value);
    innerHtml = ``;
    userInput.value = ``;
    displayItems();
})

listContainer.addEventListener(`click`, (e) => {
    console.log(e.target.tagName)
    if (e.target.tagName === `LI`) {
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === `BUTON`) {
        e.target.parentElement.remove();
    }
})


