const ItemList = document.querySelector('.items-list');
const input = document.querySelector('.input');
const plus = document.querySelector('.plus');


let i = 0;
input.addEventListener('change',(e) => {
    const target = e.target;
    let value = target.value;
    
    const itemContainer = document.createElement('div');
    itemContainer.setAttribute('class', 'item-container');
    itemContainer.innerHTML =`
    <div class="item">
        <span class="item-name">${value}</span>
        <button class="tresh-icon" data-num=${i} >
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="line"></div>
    `
    ItemList.appendChild(itemContainer);


    const deleteIcon = document.querySelector(`[data-num = '${i}']`);
    deleteIcon.addEventListener('click',(event) => {
        let target = event.target;

        if(target.nodeName === 'I') {
            target = target.parentNode;
        }

        const item = target.parentNode;
        const itemContainer = item.parentNode;
        itemContainer.remove();
    })
    i++;
    input.value = "";
})
