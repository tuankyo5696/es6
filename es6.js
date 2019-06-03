// Practice #1
// How to prevent change value when declare a variable with const and Object 

const test = {
    name: 'Tuan'
}
Object.freeze(test)
test.name = 'Phuc'

console.log(test);

// How to implement const ES5 ? Let's code
 
var constants = (function(){
    var a = 9;  
    return {
      get CONST(){
        return a;
      }
    }
  })();

constants.CONST = 8; 
constants.CONST = 10;
console.log(constants.CONST);

// Practice #2

// The result of Inner is  21
// Explain :
/*Bởi vì dùng let nó chỉ có thể truy cập được trong block bao quanh nó
nên khi ta tạo thêm một let x= 15 thì x lúc này không còn là x ban đầu nữa
và x này chỉ được dùng trong phạm vi trong block {} của if */

// The result of Outer is 15
// Explain :
/*Bởi vì khi dùng let x = 15 nó được truy cập trong block {} của 
  nguyên function nên khi không có sự thay đổi của x trong block {} 
  thì x vẫn có giá trị là 15
  */


// Practice 3
/*
  Block code 1
    what is value of index: 10
    what is value of index: 10
    what is value of index: 10
    what is value of index: 10  
    what is value of index: 10
    what is value of index: 10
    what is value of index: 10
    what is value of index: 10
    what is value of index: 10  
    what is value of index: 10
*/
// Explain:
/* Vấn đề là ở chỗ hàm setTimeOut bởi vì chờ sau một khoảng thời gian
thì nó mới console.log ra giá trị trong khi đó khi ta dùng biến var
giá trị của biến i bên trong hàm callback luôn là giá trị cuối cùng
của i trong vòng lặp
. */

    /* Block code 2
        what is value of index: 0
        what is value of index: 1
        what is value of index: 2
        what is value of index: 3
        what is value of index: 4
        what is value of index: 5
        what is value of index: 6
        what is value of index: 7
        what is value of index: 8
        what is value of index: 9
  */
// Explain 
/* 
 Bởi vì let phạm vi trong 1 block {} nên nó phải đợi sau khi thực thi
 xong trong block {} thì biến j mới được callback và giá trị tăng lên 1
*/

// In block 1, keep for loop, how to print the result like the block code 2
const l = 10 , ms = 100;

for(var i = 0 ; i < l ; i++){
    console.log(`what is value of indexx : ${i}`)
}