// JavaScript Document
var arr =[0,1,2,3,4,5,6,7,8,9];
document.write(arr);
document.write("<p></p>");
arr.forEach(x => arr[x]=0); 
document.write(arr);
document.write("<p></p>");
arr =[0,1,2,3,4,5,6,7,8,9];
arr.forEach(x => arr[x]=arr[x]+1);
document.write(arr);
document.write("<p></p>");
var list =arr.join(' ');
document.write(list);
document.write("<p></p>");