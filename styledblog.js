import {myConfirm} from "./customdialog.js";
var blogArr = [
    {
        title: 'Title 1',
        date: '2020-07-20',
        summary: 'Sed ut modi illum ipsum. Quasi accusamus quas explicabo est quisquam fugit. Exercitationem eos reiciendis quam et sit ea sint. Maxime adipisci hic maiores aut omnis itaque veritatis. Assumenda cum necessitatibus et ex possimus vitae odio quos. Id et inventore vero dolores et non qui.'
    },
    {
        title: 'Title 2',
        date: '2020-07-20',
        summary: 'Sed ut modi illum ipsum. Quasi accusamus quas explicabo est quisquam fugit. Exercitationem eos reiciendis quam et sit ea sint. Maxime adipisci hic maiores aut omnis itaque veritatis. Assumenda cum necessitatibus et ex possimus vitae odio quos. Id et inventore vero dolores et non qui.'
    },
    {
        title: 'Title 3',
        date: '2020-07-20',
        summary: 'Sed ut modi illum ipsum. Quasi accusamus quas explicabo est quisquam fugit. Exercitationem eos reiciendis quam et sit ea sint. Maxime adipisci hic maiores aut omnis itaque veritatis. Assumenda cum necessitatibus et ex possimus vitae odio quos. Id et inventore vero dolores et non qui.'
    }

]

let cont = document.getElementById('content-div');


export function update(){
    for(let i = 0; i <blogArr.length; i++){
        let sec = document.createElement('section');
        let t1 = document.createElement('h2');
        let t2 = document.createElement('h3');
        let t3 = document.createElement('p');
        let editbtn = document.createElement('button');
        let editImg = document.createElement('img');
        let deletebtn = document.createElement('button');
        let deleteImg = document.createElement('img');
        
        t1.innerText = blogArr[i]['title'];
        t2.innerText = blogArr[i]['date'];
        t3.innerText = blogArr[i]['summary'];

        t1.className = 'titles';
        t2.className = 'dates';
        t3.className = 'summaries';

        deleteImg.src = './images/deletebtn.png'
        deleteImg.width = '20';
        deleteImg.height = '20';

        editImg.src = './images/editbtn.png'
        editImg.width = '20';
        editImg.height = '20';

        deletebtn.appendChild(deleteImg);
        deletebtn.className = 'blog-delete';
        deletebtn.addEventListener('click', confirm, true);

        editbtn.appendChild(editImg);
        editbtn.className = 'blog-edit';
        editbtn.addEventListener('click', edit, true);
        
        sec.appendChild(t1);
        sec.appendChild(t2);
        sec.appendChild(t3);
        sec.appendChild(editbtn);
        sec.appendChild(deletebtn);

        cont.appendChild(sec);

    } /* function to render page*/

}


function reset(){
    cont.innerHTML = '';
}

export function add(){
    let t1 = document.getElementById('add-title').value;
    let t2 = document.getElementById('add-date').value;
    let t3 = document.getElementById('add-summary').value;
    let newObj = {
        title: t1,
        date: t2,
        summary: t3
    }
    blogArr.push(newObj);

    console.log(blogArr);

    reset();
    update();
    document.getElementById('add-title').value = '';
    document.getElementById('add-date').value = '';
    document.getElementById('add-summary').value = '';

} /* function to add blog into blogArr */

function confirm(e){
    document.getElementById('confirm-dialog').showModal();

    document.querySelector('#confirm-ok').addEventListener('click', acc);
    document.querySelector('#confirm-cancel').addEventListener('click', cancel);


    function acc(){
        document.getElementById('confirm-dialog').close();
        remove(e)
        document.querySelector('#confirm-ok').removeEventListener('click', acc);
        document.querySelector('#confirm-cancel').removeEventListener('click', acc);
    }


    function cancel(){
        document.getElementById('confirm-dialog').close();
        document.querySelector('#confirm-ok').removeEventListener('click', acc);
        document.querySelector('#confirm-cancel').removeEventListener('click', acc);
    }


} /* called when delete button is pressed to confirm action */

export function edit(e){

    let editD = document.getElementById('edit-dialog')
    let sc;
    if(e.target.tagName== 'IMG'){
        sc = e.target.parentNode.parentNode;
    }
    else{
        sc = e.target.parentNode;
    }
    console.log(sc);
    let tit = sc.firstElementChild.innerText;
    console.log(tit);


    let id = blogArr.map(function(e) { return e.title; }).indexOf(tit);

    editD.querySelector('#edit-title').value = `${blogArr[id]['title']}`;
    editD.querySelector('#edit-date').value = `${blogArr[id]['date']}`;
    editD.querySelector('#edit-summary').value = `${blogArr[id]['summary']}`;
    editD.showModal();

    document.querySelector('#edit-ok').addEventListener('click', acc);
    document.querySelector('#edit-cancel').addEventListener('click', cancel);


    function acc(){
        document.getElementById('edit-dialog').close();
        let t1 = document.getElementById('edit-title').value;
        let t2 = document.getElementById('edit-date').value;
        let t3 = document.getElementById('edit-summary').value;
        let newObj = {
            title: t1,
            date: t2,
            summary: t3
        }
        blogArr.splice(id,1,newObj);
        reset();
        update();
        document.querySelector('#edit-ok').removeEventListener('click', acc);
        document.querySelector('#edit-cancel').removeEventListener('click', acc);
    }


    function cancel(){
        document.getElementById('edit-dialog').close();
        document.querySelector('#edit-ok').removeEventListener('click', acc);
        document.querySelector('#edit-cancel').removeEventListener('click', acc);
    }


    // console.log(id);
} /* function called when edit button is pressed to edit exisiting data */

export function remove(e){
// debugger
    let sc;
    if(e.target.tagName== 'IMG'){
        sc = e.target.parentNode.parentNode;
    }
    else{
        sc = e.target.parentNode;
    }
    console.log(sc);
    let tit = sc.firstElementChild.innerText;
    console.log(tit);


    let id = blogArr.map(function(e) { return e.title; }).indexOf(tit);
    blogArr.splice(id, 1);
    console.log(blogArr);
    reset();
    update();

    // console.log(id);
} /* function to remove object from blogArr */