const liArray = [];
const allBtn = document.querySelectorAll('.my-btn-class');
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const parentUl = document.getElementById('olListPlayer');
        const newLi = document.createElement('li');
        newLi.innerText = event.target.parentNode.parentNode.children[1].children[0].innerText;
        liArray.push(newLi);
        if (liArray.length > 5) {
            alert('You can not add more than 5 items elements!')
        } else {
            parentUl.appendChild(newLi);
            btn.disabled = true;
        }
    })
}
