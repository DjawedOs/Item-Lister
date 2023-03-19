const itemList = document.getElementById('items');
const form = document.getElementById('add-item');
const filter = document.getElementById('filter');

// add event on submit

form.addEventListener('submit',addItem);

// Delete event 

itemList.addEventListener('click',removeItem)

// add event on filter

filter.addEventListener('keyup',filterItems)

// create addItem function

function addItem(e){
    e.preventDefault();
    let itemToAdd = document.getElementById('itemToAdd').value;

    // create new li element
    let li = document.createElement('li');
    //add class 
    li.className = 'list-group-item';
    
    //add text node with input value
    li.appendChild(document.createTextNode(itemToAdd));

    // create a delete button element

    let delBtn = document.createElement('button');
    delBtn.className = 'btn-danger'
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    itemList.appendChild(li);

    
}

// remove item function

function removeItem(e){
    if(e.target.classList.contains('btn-danger')){
        if(confirm('Are you sure ?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}

// create filter function

function filterItems(e){
    // convert text to lowercase

    let text = e.target.value.toLowerCase();
    
    // get all the lis

    let items = itemList.getElementsByTagName('li');
     Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
          item.style.display='flex'  
        } 
        else {
            item.style.display ='none'
        }
     })

}
