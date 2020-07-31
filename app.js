'use strict';


var wishesAll = [];

function Wishes(name, date, Ctrue){
    this.name = name;
    this.date = date;
    this.comeTrue = Ctrue;
    wishesAll.push(this)
}
get();
var forma = document.querySelector('#forma');

forma.addEventListener('submit', (event)=>{
    event.preventDefault();
    // console.log(event)
    var inptedName = event.target[0].value;
    var inputedDate = event.target[1].value;
    if(inptedName !== '' && inputedDate !== ''){
        var comeTrue = randomNumberBetween(1, 99);
        new Wishes(inptedName, inputedDate, comeTrue);
        clean();
        render();
        set();
        // console.log(wishesAll);
    } else {
        alert(`please fill all the inputs!!`);
    }
})

var table = document.querySelector('#tableo');

function render(){
    // var namesTr = document.createElement('tr');
    // var ntd1 = document.createElement('td');
    // ntd1.textContent = `Wish Title`;
    // namesTr.appendChild(ntd1);
    // var ntd2 = document.createElement('td');
    // ntd2.textContent = `Expected Date`;
    // namesTr.appendChild(ntd2);
    // var ntd3 = document.createElement('td');
    // ntd3.textContent = `Your Wish will Come True After XD`;
    // namesTr.appendChild(ntd3);
    // var ntd4 = document.createElement('td');
    // ntd4.textContent = `Remove`;
    // namesTr.appendChild(ntd4);
    // table.appendChild(namesTr);
    if(wishesAll){
        clean();
        for(var i =0; i < wishesAll.length; i++){
            var mTr = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.textContent = wishesAll[i].name;
            mTr.appendChild(td1);
            var td2 = document.createElement('td');
            td2.textContent = wishesAll[i].date;
            mTr.appendChild(td2);
            var td3 = document.createElement('td');
            td3.textContent = `${wishesAll[i].comeTrue}years`;
            mTr.appendChild(td3);
            var td4 = document.createElement('td');
            var buton = document.createElement('button');
            buton.textContent = `X`;
            buton.id = i;
            td4.appendChild(buton);
            mTr.appendChild(td4);
            table.appendChild(mTr);
        }

    }
}

function clean(){
    if(wishesAll.length != 0){
        table.innerHTML = `<tr  class="mainTr">
        <td>Wish Title</td>
        <td>Expected Date</td>
        <td>Your Wish will Come True After XD</td>
        <td>Remove</td>
    </tr>`;
    }else{
        table.innerHTML = `<tr  class="mainTr">
        <td>Wish Title</td>
        <td>Expected Date</td>
        <td>Your Wish will Come True After XD</td>
        <td>Remove</td>
    </tr>
    <tr>
        <td colspan="4">No items yet :(</td>
    </tr>`;
    }
}



table.addEventListener('click', (event)=>{
    if(event.target.textContent == 'X'){
        var delteId = event.target.id;
        wishesAll.splice(delteId, 1);
        console.log(wishesAll);
        clean();
        render();
        set();
    }
})

function randomNumberBetween(min,max){ //Helper function..
    return Math.floor(Math.random()*(max-min+1)+min);
}

function set(){
    var cc = JSON.stringify(wishesAll);
    localStorage.setItem('WishList', cc);
}

function get(){
    var dd = localStorage.getItem('WishList');
    if(dd){
        wishesAll = JSON.parse(dd);
    }
}
render();
