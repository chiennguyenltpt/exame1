// Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả. (1đ)
// ●	Đầu vào: str 
// ●	Đầu ra: đảo ngược chuỗi và in ra kết quả
// ●	Ví dụ:
// ○	Cho: str = "program"; in ra: "margorp"
// ○	Cho: str = "data"; in ra: "atad"
// ●	Lưu ý: không sử dụng hàm reverse()




// let a= prompt("please input ")
// let x= [];
// for (i =0;i<=a.length;i++) {

//     x[i]= a[a.length-i]
//     x.push(x[i+1])

    
// } 
// let reverseStr = x.join('').replace(/ /g, '')
// console.log(reverseStr)


//  bai 2 
// Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ 
// được viết hoa. (1đ)
// ●	Đầu vào: str
// ●	Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// ●	Ví dụ
// ○	Cho "this is A Test"; In ra "This Is A Test"
// ○	Cho "hello rikkei academy"; In ra "Hello Rikkei Academy”

// let a = prompt("please input ").trim().split(" ")
// let x = a.map((str) =>{
    
//     return str[0].toUpperCase() + str.substring(1)
// })
// x= x.join(' ')
// console.log(x);



// bai 3Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (1đ)
// ●	Đầu vào: 1 mảng bất kỳ
// ●	Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// ●	Ví dụ
// ○	Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// ○	Cho ; In ra Arr=[1,2,3,4,5]

// let Arr=prompt("xin moi nhap mang cach nhau boi dau (,)").split(',')

// let newArr = Arr.filter(function(value, index) {
//     return Arr.indexOf(value) == index ;
// })
// console.log(newArr);


//bai 4 
// Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần. (2đ)
// ●	Đầu vào: 1 mảng bất kỳ
// ●	Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ●	Ví dụ
// ○	Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// array = prompt("xin moi nhap mang phan boi dau cach").split(',')
// var temp = 0;
// let newArr = []
// for (var i = 0; i < array.length; i++) {
//     for (var j = i; j < array.length; j++) {
//       if (array[j] < array[i]) {
//         temp = array[j];
//         array[j] = array[i];
//         array[i] = temp;
//       }
//     }
//     newArr.push[array[i]]
// }





// bai 5Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên nhân viên). 
// Xây dựng chương trình quản lý nhân viên với các chức năng 
// (Read, Create, Update, Delete)

// let staffRikkei = [{
//     'name':"Nguyen van A",
//     age:27,
//     id:1
// },
// {
//     'name' :'Hoang huu dat',
//     age:30,
//     id:2
// },

// {
//     'name':"Khoai thi san",
//     age:20,
//     id:3
// }]


// console.log(staffRikkei);


// let arrNumber = [1,2,3,4,5]

// let userIput

// do {
//     userIput = prompt('1:Read \n2:Add,\n3:Update\n4:Delete\n5:Quit')
// } while(arrNumber.includes(userIput))
// flag = true ;
// while(flag==true) {
//     switch (userIput) {
//         case '1' :
//             console.log(staffRikkei);
//             break
//         case '2': 
//             let name = prompt('please input name')
//             let age = prompt('please input age')
//             let id = prompt('please input id')
//             let newObject = {}
//             newObject.name = name
//             newObject.age = age
//             newObject.id = id
//             staffRikkei.push(newObject)
//             console.log(`${staffRikkei} \n ban da creat thanh cong`);
//             break;
//         case '3': 
//             let personUpdate
//             do {
//                 personUpdate = prompt("moi nhap ten")
//             } while(!staffRikkei.filter(function(item) {item['name'] ==personUpdate}))
//             console.log(personUpdate);

            
//             for (let i = 0; i<=staffRikkei.length;i++) {
//                 if (staffRikkei[i]['name'] ==personUpdate) {
//                     staffRikkei[i]['name'] = prompt("xin moi nhap ten")
//                     staffRikkei[i].age = +prompt('xin moi nhap tuoi')
//                     staffRikkei[i].id = +prompt('xin moi nhap id')
                    
//                 }
//                 console.log(staffRikkei);
                
//             }
//             break;
//         case '4' : 
//             let personDelete
//             do {
//                 personDelete = prompt("moi nhap ten muon xoa")
//             } while(!staffRikkei.filter(function(item) {item['name'] ==personDelete}))
            
//             for (let i = 0; i<=staffRikkei.length;i++) {
//                 if (staffRikkei[i]['name'] ==personDelete) {
//                     staffRikkei.splice(staffRikkei[i]['name'])
//                 }
//             }

//             console.log(staffRikkei);
//             break;
//         case '5' : 
//             flag = false
//         default :
//             console.log("loi khong ton tai");
                
        

            
            
                
                    

            
            
//     }
    
// }
   
// bai 6Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (3đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// ●	Ví dụ
// ○	Ngày 30/4/2019 là ngày hợp lệ
// ○	Ngày 29/2/2019 là ngày không hợp lệ
// ●	Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và 
// tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận 
// thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// ●	Ví dụ
// ○	Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// ○	Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021



let today = prompt('xin moi nhap ngay ban muon kiem tra (13/6/2020)').split('/')
let day = today[0];
let month = today[1];
let year = today[2];
console.log(day, month,year);
if (day > 0 && month > 0 && year > 0) {
    switch ( month) {
        case '1': case '3': case '5': case '7': case '8' : case '10':case '12' :
            if (0< day && day <= 31) {
                console.log(`ngay hop le`);
                today = new Date( `${year}-${month}-${day}`);
                const tomorrow = moment(today).add(1, 'days').toDate()
                console.log(tomorrow);
            } else {
                console.log("khong hop le");
            }
            
            break;
        case "4" : case '6' :case '9' :case '11': 
            if (0<day && day <=30) {
                console.log(`ngay hop le`);
                today = new Date( `${year}-${month}-${day}`);
                const tomorrow = moment(today).add(1, 'days').toDate()
                console.log(tomorrow);
                

                
                
            } else {
                console.log("khong hop le");
            }
            break
        case 2 :


        
            
    }
    
}


