const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    const newItem = document.getElementById('item').value;
    const description = document.getElementById('description').value; 

    
    const li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';

    const newText= document.createTextNode(newItem);
    const descriptionNode = document.createTextNode(" "+description); 

    li.appendChild(newText);
    li.appendChild(descriptionNode);

      
    const deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);


    // var newItem = document.getElementById('item').value;
    // var li = document.createElement('li');
    // //Add class
    // li.className = 'list-group-item';

    //li.appendChild(document.createTextNode(newItem));
    const EditBtn = document.createElement('button');
    EditBtn.className = 'btn  btn-sm float-right editBtn';
    EditBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(EditBtn);
    itemList.appendChild(li);
}

    //Remove item
    function removeItem(e)
    {
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                const li=e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }




    //filter Items
    function filterItems(e)
    {
        //convert text to lowercase
        const text =e.target.value.toLowerCase();

        const items = itemList.getElementsByTagName('li');
        Array.from(items).forEach(function(item){
            const itemName = item.firstChild.textContent;
            const description = item.childNodes[1].textContent;

            if(itemName.toLowerCase().indexOf(text) !=-1 || description.toLowerCase().indexOf(text) !=-1){
               item.style.display='block';
              }
               else {
            item.style.display ='none';
              }
        });
    }