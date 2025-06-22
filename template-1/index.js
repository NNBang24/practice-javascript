const inputId = document.querySelector('.input_id');
const inputName = document.querySelector('.input_name');
const inputPrice = document.querySelector('.input_price');
const buttonClick1 = document.querySelector('.button_click1');
const localData = localStorage.getItem('productList')
let productList = [];
if (localData !== null) {
    productList = JSON.parse(localData);
}
const editAction = (even) => {
    const editButton = even.target;
    editButton.classList.add('hidden');
    const deleteButton = editButton.nextElementSibling;
    deleteButton.classList.add('hidden');
    const saveButton = deleteButton.nextElementSibling;
    saveButton.classList.remove('hidden');
    const cancelButton = saveButton.nextElementSibling;
    cancelButton.classList.remove('hidden');
    const tdElement = editButton.parentElement;
    const tdElementPrice = tdElement.previousElementSibling;
    const tdElementName = tdElementPrice.previousElementSibling;
    const labelPrice = tdElementPrice.querySelector('.label_price');
    labelPrice.classList.add('hidden');
    const labelName = tdElementName.querySelector('.label_name');
    labelName.classList.add('hidden');
    const inputName = tdElementName.querySelector('.input-name');
    inputName.classList.remove('hidden')
    const inputPrice = tdElementPrice.querySelector('.input-price');
    inputPrice.classList.remove('hidden')
    inputName.value = labelName.textContent;
    inputPrice.value = labelPrice.textContent;
}
const deleteAction = (even) => {
    const deleteButton = even.target;
    const tdElement = deleteButton.parentElement;
    const tdElementPrice = tdElement.previousElementSibling;
    const tdElementName = tdElementPrice.previousElementSibling;
    const tdElementId = tdElementName.previousElementSibling;
    const trElement = tdElementId.parentElement;
    const productId = tdElementId.textContent.trim()
    const isConfirm = confirm("Bạn chắc chắn muốn xoá id: " + productId);
    if (isConfirm) {
        const index = productList.findIndex(p => p.id === productId);
        if (index !== -1) {
            productList.splice(index, 1);
            localStorage.setItem('productList', JSON.stringify(productList));
            trElement.remove();
        }
    }
}
const saveAction = (even) => {
    const saveButton = even.target;
    const cancelButton = saveButton.nextElementSibling;
    const deleteButton = saveButton.previousElementSibling;
    const editButton = deleteButton.previousElementSibling;
    //
    const tdElement = editButton.parentElement;
    const tdElementPrice = tdElement.previousElementSibling;
    const tdElementName = tdElementPrice.previousElementSibling;
    const tdElementId = tdElementName.previousElementSibling;
    //
    const labelPrice = tdElementPrice.querySelector('.label_price');
    const inputPrice = labelPrice.nextElementSibling;
    const labelName = tdElementName.querySelector('.label_name');
    const inputName = labelName.nextElementSibling;
    const productId = tdElementId.textContent.trim();
    if (inputName.value.trim() === '' || inputPrice.value.trim() === '') {
        alert('khong duoc bo trong ');
        return;
    }
    const isConfirm = confirm("Bạn chắc chắn muon luu lai");
    if (isConfirm) {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].id === productId) {
                productList[i].name = inputName.value.trim();
                productList[i].price = inputPrice.value.trim();
                break;
            }
        }
    }
    saveButton.classList.add('hidden')
    cancelButton.classList.add('hidden');
    deleteButton.classList.remove('hidden')
    editButton.classList.remove('hidden');
    labelName.textContent = inputName.value;
    labelPrice.textContent = inputPrice.value;
    inputName.classList.add('hidden');
    inputPrice.classList.add('hidden');
    labelName.classList.remove('hidden');
    labelPrice.classList.remove('hidden');
    localStorage.setItem('productList', JSON.stringify(productList));
    location.reload();

}
const cancelAction = (even) =>{
    const cancelButton = even.target ;
    const saveButton = cancelButton.previousElementSibling;
    const deleteButton = saveButton.previousElementSibling;
    const editButton = deleteButton.previousElementSibling ;
    const tdElement = editButton.parentElement ;
    const tdElementPrice = tdElement.previousElementSibling ;
    const tdElementName = tdElementPrice.previousElementSibling ;
    const labelPrice = tdElementPrice.querySelector('.label_price');
    const inputPrice = labelPrice.nextElementSibling;
    const labelName = tdElementName.querySelector('.label_name');
    const inputName = labelName.nextElementSibling;
    cancelButton.classList.add('hidden');
    saveButton.classList.add('hidden');
    deleteButton.classList.remove('hidden');
    editButton.classList.remove('hidden');
    inputPrice.classList.add('hidden');
    inputName.classList.add('hidden');
    labelPrice.classList.remove('hidden');
    labelName.classList.remove('hidden');

}

const loadProductList = () => {
    productList.forEach(product => {
        const trEl = document.createElement('tr');
        trEl.innerHTML = `
        <td>
            <label class="label_id">${product.id}</label>
        </td>
        <td>
            <label class="label_name">${product.name}</label>
            <input class="input-name hidden" />
        </td>
        <td>
            <label class="label_price">${product.price}đ</label>
            <input type="number"  class="input-price hidden" />
        </td>
        <td>
            <a class="action-button edit-button" href="#">Edit</a>
            <a class="action-button delete-button" href="#">Delete</a>
            <button class="save-button hidden">Lưu</button>
            <button class="cancel-button hidden">Quay Lại</button>
        </td> 
        `
        // edit
        const editButton = trEl.querySelector('.edit-button');
        editButton.addEventListener('click', editAction);
        //delete
        const deleteButton = trEl.querySelector('.delete-button');
        deleteButton.addEventListener('click', deleteAction);
        //save
        const saveButton = trEl.querySelector('.save-button');
        saveButton.addEventListener('click', saveAction);
        //cancel
        const cancelButton = trEl.querySelector('.cancel-button');
        cancelButton.addEventListener('click', cancelAction);

        const tbodyEl = document.querySelector('tbody');
        tbodyEl.appendChild(trEl);
    })
}
loadProductList();


buttonClick1.addEventListener('click', () => {
    if (inputId.value.trim() === '' || inputName.value.trim() === '' || inputPrice.value.trim() === '') {
        alert('khong duoc bo trong');
        return;
    };
    // tim id co trung hay khong 
    const target = productList.find(item => {
        return item.id === inputId.value;
    });

    if (target) {
        alert('san pham trung ID');
        return;
    };

    // them du lei vao man
    productList.push({
        id: inputId.value,
        name: inputName.value,
        price: inputPrice.value
    });

    // lu vao localStorage 
    localStorage.setItem('productList', JSON.stringify(productList));

    // them html 
    const trEl = document.createElement('tr');
    trEl.innerHTML = `
        <td>
            <label class="label_id">${inputId.value}</label>
        </td>
        <td>
            <label class="label_name">${inputName.value}</label>
            <input class="input-name hidden" />
        </td>
        <td>
            <label class="label_price">${inputPrice.value}đ</label>
            <input type="number" class="input-price hidden" />
        </td>
        <td>
        <a class="action-button edit-button" href="#">Edit</a>
        <a class="action-button delete-button" href="#">Delete</a>
        <button class="save-button hidden">Lưu</button>
        <button class="cancel-button hidden">Quay Lại</button>
        </td>

    `
    // edit
    const editButton = trEl.querySelector('.edit-button');
    editButton.addEventListener('click', editAction);
    //delete
    const deleteButton = trEl.querySelector('.delete-button');
    deleteButton.addEventListener('click', deleteAction);
    //save
    const saveButton = trEl.querySelector('.save-button');
    saveButton.addEventListener('click', saveAction);
    //cancel
    const cancelButton = trEl.querySelector('.cancel-button');
    cancelButton.addEventListener('click', cancelAction);

    const tbodyEl = document.querySelector('tbody');
    tbodyEl.appendChild(trEl);

    // sau khi clicl xong thi cac input rong 
    inputId.value = '';
    inputName.value = '';
    inputPrice.value = '';
    alert('luu thanh cong')
});