import {remove} from './styledblog.js';

export function myAlert(s){
    s.showModal();
    // document.getElementById('alert-ok').addEventListener('click', hide)
    s.querySelector('#alert-ok').addEventListener('click', function(){
        s.close();
    })
} /* function for alert */

export function myConfirm(s){

    
    s.showModal();


    s.querySelector('#confirm-ok').addEventListener('click', acc);
    s.querySelector('#confirm-cancel').addEventListener('click', rej);

    function acc(e){
        s.close();
        if(document.querySelector('output#out')){
            let main = e.target.parentNode.parentNode;
            main.querySelector('#out').innerHTML = `Confirm Result: True`;
            main.querySelector('#out').style.display = 'unset';
        }

        // if(document.title == 'CRUD'){
        //     remove()
        // }
        s.querySelector('#confirm-ok').removeEventListener('click', acc);
        s.querySelector('#confirm-cancel').removeEventListener('click', rej);
    }
    

    function rej(e){
        s.close();
        if(document.querySelector('output#out')){
            let main = e.target.parentNode.parentNode;
            main.querySelector('#out').innerHTML = `Confirm Result: False`;
            main.querySelector('#out').style.display = 'unset';
        }
        s.querySelector('#confirm-ok').removeEventListener('click', acc);
        s.querySelector('#confirm-cancel').removeEventListener('click', rej);
    }





} /* function for confirm */

export function myPrompt(s){

    s.showModal();

    s.querySelector('#prompt-ok').addEventListener('click', acc);
    s.querySelector('#prompt-cancel').addEventListener('click', rej);

    function acc(e){
        s.close();
        console.log(1);

        if(document.querySelector('output#out')){
            let main = e.target.parentNode.parentNode;
            let name = main.querySelector('#prompt-name').value;
            let cleaned = DOMPurify.sanitize(name);
            main.querySelector('#out').innerHTML = `Prompt Response: ${cleaned}`;
            main.querySelector('#out').style.display = 'unset';
        }
        s.querySelector('#prompt-ok').removeEventListener('click', acc);
        s.querySelector('#prompt-cancel').removeEventListener('click', rej);
    }

    function rej(e){
        s.close();
        console.log(2);

        if(document.querySelector('output#out')){
            let main = e.target.parentNode.parentNode;
            main.querySelector('#out').innerHTML = `User did not enter anything.`;
            main.querySelector('#out').style.display = 'unset';
        }
        s.querySelector('#prompt-ok').removeEventListener('click', acc);
        s.querySelector('#prompt-cancel').removeEventListener('click', rej);
    }

    document.getElementById('prompt-name').value = '';

} /* function for prompt */





