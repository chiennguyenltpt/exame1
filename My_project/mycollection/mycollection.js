let product = [{name:'baz',dame:'30%',clid:'0%',img:'./image/anh1.jpeg',price:50 , id:0},
                {name:'ARC',dame:'60%',clid:'10%',img:'./image/anh2.jpeg',price:30,id:1},
                {name:'ADS',dame:'70%',clid:'90%',img:'./image/anh3.jpg',price:40,id:2},
                {name:'AEK-971',dame:'45%',clid:'80%',img:'./image/anh4.jpeg',price:60,id:3},
                {name:'AG-043',dame:'38%',clid:'20%',img:'./image/anh5.jpeg',price:70,id:4},
                {name:'AK-9',dame:'46%',clid:'0%',img:'./image/anh6.jpeg',price:90,id:5},
                {name:'AK74',dame:'70%',clid:'20%',img:'./image/anh7.jpeg',price:100,id:6},
                {name:'AK-103',dame:'70%',clid:'70%',img:'./image/anh8.jpeg',price:20,id:7},
                {name:'AKM',dame:'10%',clid:'30%',img:'./image/anh9.jpeg',price:57,id:8},
                {name:'AMD-65',dame:'80%',clid:'30%',img:'./image/anh10.jpeg',price:69,id:9},
                {name:'AMD-62',dame:'20%',clid:'60%',img:'./image/anh11.jpeg',price:39,id:10},
                {name:'AMP-69',dame:'50%',clid:'20%',img:'./image/anh12.jpeg',price:200,id:11},
                {name:'BARRET  REC7',dame:'1000%',clid:'100%',img:'./image/anh12.jpeg',price:1000,id:12},
                {name:'Beretta',dame:'1000%',clid:'100%',img:'./image/anh13.jpeg',price:999,id:13},
                {name:'BSA 28P',dame:'1000%',clid:'100%',img:'./image/anh14.jpeg',price:699,id:14},
                {name:'CZ 2000',dame:'1000%',clid:'100%',img:'./image/anh15.jpeg',price:499,id:15},
];
localStorage.setItem("product",JSON.stringify(product))

// chuyen ve trang home
function moveHome() {
    window.location.href ='/projectone/index-Home.html'
}

// show user name 
function  showName() {
    console.log(localStorage.getItem('inforAccount'));
    let name = JSON.parse(localStorage.getItem('inforAccount')).username;
    console.log(localStorage.getItem('inforAccount'));
    document.querySelector('.user h3').textContent = name
}


// newproduct 
function newproduct() {
    let listImg = ['./image/anh1.jpeg','./image/anh2.jpeg','./image/anh3.jpg','./image/anh4.jpeg','./image/anh5.jpeg','./image/anh6.jpeg','./image/anh8.jpeg','./image/anh9.jpeg','./image/anh10.jpeg','./image/anh11.jpeg','./image/anh12.jpeg','./image/anh13.jpeg','./image/anh14.jpeg','./image/anh15.jpeg',]
    let layOut = document.getElementById('show-product')
    let layOutSum="";
    for (let i = 0; i < listImg.length; i++) {
        layOutSum+=`
        <div class="layout-content" >
             <img class='gun' onclick='showDetail("${i}")' id = "${i}" src="${listImg[i]}" alt="">
        </div>`
        
    }
    layOut.innerHTML=layOutSum
    

}

// trend product

function trendProduct () {

    let listImg = ['./image/anh5.jpeg','./image/anh4.jpeg','./image/anh3.jpg','./image/anh9.jpeg','./image/anh6.jpeg','./image/anh8.jpeg','./image/anh14.jpeg','./image/anh5.jpeg','./image/anh10.jpeg','./image/anh11.jpeg','./image/anh1.jpeg','./image/anh8.jpeg','./image/anh7.jpeg','./image/anh5.jpeg',]
    let layOut = document.getElementById('show-product')
    let layOutSum="";
    for (let i = 0; i < listImg.length; i++) {
        layOutSum+=`
        <div class="layout-content" >
             <img class='gun' onclick='showDetail("${i}")' id = "${i}" src="${listImg[i]}" alt="">
        </div>`
    }
    layOut.innerHTML=layOutSum
}

// sale function
function saleProduct () {
    let listImg = ['./image/anh4.jpeg','./image/anh15.jpeg','./image/anh3.jpg','./image/anh8.jpeg','./image/anh2.jpeg','./image/anh5.jpeg','./image/anh9.jpeg','./image/anh1.jpeg','./image/anh11.jpeg','./image/anh15.jpeg','./image/anh1.jpeg','./image/anh7.jpeg','./image/anh14.jpeg','./image/anh6.jpeg',]
    let layOut = document.getElementById('show-product')
    let layOutSum="";
    for (let i = 0; i < listImg.length; i++) {
        layOutSum+=`
        <div class="layout-content">
             <img class="gun" onclick='showDetail("${i}")' id = "${i}" src="${listImg[i]}" alt="">
        </div>`       
    }
    layOut.innerHTML=layOutSum  
}
// show product
function showDetail(id) {
    let imgname =  document.getElementsByClassName("gun");
    let getid = imgname[id].id;
    let getNameImg = document.getElementById(getid).getAttribute('src')
    
    let product = JSON.parse(localStorage.getItem('product'))
    
    for (key of product){ 
        if (key['img'].includes(getNameImg)) {
            let value = key
            break
        }
    }
    console.log(getNameImg);
    document.querySelector(".descrise-product img").setAttribute("src" ,`${getNameImg}`)
    document.querySelectorAll(".descrise-product span")[0].innerHTML = key.name
    document.querySelectorAll(".descrise-product span")[1].innerHTML = key.dame
    document.querySelectorAll(".descrise-product span")[2].innerHTML = key.clid
    document.querySelector('.price span').textContent = key.price
}



//  buy NOW

function buyNow() {
    document.getElementById("show-product").style.visibility = "hidden" 

    let imgname =  document.getElementById('descrise-product').getAttribute('src')
    console.log(imgname);
    let product = JSON.parse(localStorage.getItem('product'))
    for (key of product){ 
        if (key['img']==imgname) {
            let value = key
            break
        }
    }

    let layOut = ` <div class="layout-content" >
                    <img class='gun' id="" src="${imgname}" alt="">
                </div>
                <div class="total">
                    <p>Name : <span>${key.name}</span></p><br>
                    <p>Price : <span>${key.price}</span>$</p>
                </div>
                <div class="bnt-buynow">
                    <button>Checkout</button>
                    <button>Cancel</button><br>
                    <small>bạn đã mua thành công!!</small>
                </div>`
    let layOutSum = document.getElementById("buy-product")
    layOutSum.innerHTML = layOut
}