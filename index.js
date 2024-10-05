var nameInput=document.getElementById("productName")
var priceInput=document.getElementById("productPrice")
var catogoryInput=document.getElementById("productCategory")
var descriptionInput=document.getElementById("productDescription")
var productlist=[];
var currentIndex=0;
if(localStorage.getItem("list")==null){
    productlist=[]
  }
   else{
  productlist=JSON.parse(localStorage.getItem("list"))
      displayData()
   }
function addProduct(){
    var product = {
     name:nameInput.value,
     price:priceInput.value,
     catogory:catogoryInput.value,
     desc:descriptionInput.value    
    }
    productlist.push(product)
    localStorage.setItem("list",JSON.stringify(productlist))
    console.log(productlist)
    displayData()
}

function displayData(){
    var temp=""
    for(var i=0;i<productlist.length;i++){
        temp += `
                <tr>
                             <td>`+ i + `</td>
                         <td>` + productlist[i].name + `</td>
                         <td>` + productlist[i].price + `</td>
                             <td>`+ productlist[i].catogory + `</td>
                             <td>`+ productlist[i].desc + `</td>
                             <td>
        
                                 <button class="btn btn-outline-warning" onclick="updateProduct(`+i+`)">Update</button>
                             </td>
                             <td>
        
                                 <button class="btn btn-outline-danger" onclick="delate(`+i+`)">delete</button>
                         </td>
                     </tr>
                
                `
    }
    document.getElementById("demo").innerHTML=temp
}
function clearForm(){
    nameInput.value="",
    priceInput.value="",
    catogoryInput.value="",
    descriptionInput.value=""

}
function delate(index){
    productlist.splice(index,1)
    localStorage.setItem("list",JSON.stringify(productlist))
    displayData(productlist)

}
function updateProduct(x){
    currentIndex=x;
    nameInput.value=productlist[currentIndex].name
    priceInput.value=productlist[currentIndex].price
    catogoryInput.value=productlist[currentIndex].catogory
    descriptionInput.value=productlist[currentIndex].desc
    document.getElementById("btn-add").style.display="none"
    document.getElementById("btn-edit").style.display="inline-block"

}
function addEdit(){
   productlist[currentIndex].name= nameInput.value,
   productlist[currentIndex].price=priceInput.value,
   productlist[currentIndex].catogory=catogoryInput.value,
   productlist[currentIndex].desc=descriptionInput.value
  
   displayData(productlist[currentIndex])
   
}
function search(term){
    var temp=""
    for(var i=0;i<productlist.length;i++){
        if(productlist[i].name.toLowerCase().includes(term.toLowerCase())){

            temp += `
            <tr>
                         <td>`+ i + `</td>
                     <td>` + productlist[i].name + `</td>
                     <td>` + productlist[i].price + `</td>
                         <td>`+ productlist[i].catogory + `</td>
                         <td>`+ productlist[i].desc + `</td>
                         <td>
    
                             <button class="btn btn-outline-warning" onclick="updateProduct(`+i+`)">Update</button>
                         </td>
                         <td>
    
                             <button class="btn btn-outline-danger" onclick="delate(`+i+`)">delete</button>
                     </td>
                 </tr>
            
            `
}
document.getElementById("demo").innerHTML=temp

        }
    }

    









// var nameInput = document.getElementById("productName")
// var priceInput = document.getElementById("productPrice")
// var catogoryInput = document.getElementById("productCategory")
// var descriptionInput = document.getElementById("productDescription")
// var productlist = [];
// var currentIndex=0;
// if(localStorage.getItem("list")==null){
//     productlist=[]
// }
// else{
//     productlist=JSON.parse(localStorage.getItem("list"))
//     displayData()
// }

// function addProduct() {
//     var product = {
//         name: nameInput.value,
//         price: priceInput.value,
//         catogory: catogoryInput.value,
//         desc: descriptionInput.value,
//     }
//     productlist.push(product)
//     localStorage.setItem("list",JSON.stringify(productlist))
//     console.log(productlist)
//     displayData()
// }
// function displayData() {
//     var temp = ""
//     for (var i = 0; i < productlist.length; i++) {
//         temp += `
//         <tr>
//                     <td>`+ i + `</td>
//                 <td>` + productlist[i].name + `</td>
//                 <td>` + productlist[i].price + `</td>
//                     <td>`+ productlist[i].catogory + `</td>
//                     <td>`+ productlist[i].desc + `</td>
//                     <td>

//                         <button class="btn btn-outline-warning" onclick="updateProduct(`+i+`)">Update</button>
//                     </td>
//                     <td>

//                         <button class="btn btn-outline-danger" onclick="delate(`+i+`)">delete</button>
//                     </td>
//                 </tr>
        
//         `
//     }
   

//     document.getElementById("demo").innerHTML = temp
// }
// function clearForm() {
//     nameInput.value = ""
//     priceInput.value = ""
//     catogoryInput.value = ""
//     descriptionInput.value = ""

// }
// function updateProduct(x){
//     currentIndex=x;
//     nameInput.value = productlist[x].name
//     priceInput.value = productlist[x].price
//     catogoryInput.value =productlist[x].catogory
//     descriptionInput.value = productlist[x].desc
//     document.getElementById("btn-add").style.display="none"
//     document.getElementById("btn-edit").style.display="inline-block"
  
// }

// function addEdit(){
//     var product = {
//         name: nameInput.value,
//         price: priceInput.value,
//         catogory: catogoryInput.value,
//         desc: descriptionInput.value
//     }

//     productlist[currentIndex]=product;
// }

// function delate(y){
//    productlist.splice(y,1);
//    localStorage.setItem("list",JSON.stringify(productlist))
//    displayData(productlist)
// }
// var myImage=document.querySelector("#myImage")
// document.addEventListener("mousemove",function(event){
//     myImage.style.top=event.clientY
//     myImage.style.left=event.clientX
// })