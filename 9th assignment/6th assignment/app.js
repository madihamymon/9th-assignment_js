// Task: 1
// var firstname= prompt("ENTER YOUR FIRST NAME")
// var lastname= prompt("ENTER YOUR LAST NAME")
// alert("hello " + firstname +" "+ lastname )

// Task: 2
// var fav= prompt("ENTER YOUR FAV MOBILE PHONE MODEL")
// document.write("My Favourite Phone Model is " + fav+" <br>"+ "Length of string is "+ fav.length )

// Task: 3
// var str = "Pakistani.";
//   var n = str.indexOf("n");
//   document.write("String:" + str+ "<br>"+"Index of 'n' is: "+n)

// Task: 4
//   var str = "Hello World.";
//   var n =  str.lastIndexOf("l")
//   document.write("String:" + str+ "<br>"+"Index of 'l' is: "+n)



// Task: 5
//   var str = "Pakistani";
//   var res = str.charAt(3)
//   document.write("String:" + str+ "<br>"+"Character at Index '3' is: "+res)



// Task: 7
//   var city = "Hyderabad";
// var res = city.replace("Hyder", "Islam");
// document.write("City:" + city+ "<br>"+"After Replacement: "+res)

 // Task: 8
// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// var res = message.replace("and", "&");
// document.write(res)

// Task: 9
// var text = '472';
// var integer = parseInt(text, 10);
// document.write("Value:" + text+ "<br>" +"Type: String"+"<br>"+ "Value:" + integer+ "<br>" +"Type: Number")

// Task: 10
// var str = "peanuts";
// var res = str.toUpperCase();
// document.write("User Input: " + str+ "<br>" +"Uppercase: "+ res)


// Task: 11
// var str = "javascript"
// var res= str.split(' ') .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
// .join(' ')
// document.write("User Input: "+ str+ "<br>" +"Title case: "+ res

// )


// Task: 12
// var num = "35.36"
// var res= num.replace(".", "");
// document.write("Number: "+ num+ "<br>" +"Result: "+ res)




        //Task: 17
// var str = "Pakistan"; 
//             var res = str.charAt(str.length-1); 
//             document.write("User Input: "+ str+ "<br>" +"Last Character Of Input: "+res)
              



                 //Task: 18      
//             function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
 
// document.write("Text: The quick brown fox jumps over the lazy dog"+ "<br>"+
//  "There are "+ count("The quick brown fox jumps over the lazy dog", 'the')+ " occurrences of word 'the' ");
