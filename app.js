

var newd=document.getElementById('newd');
var newda=document.getElementById('newda');
var newdb=document.getElementById('newdb');
newd.style.display="none";
newda.style.display="none";
newdb.style.display="none";
function hide(){
    var name=document.getElementById('name');
    var nameval=name.value;
var result=document.getElementById('res');
var x=document.createElement("h2");
var y=document.createTextNode(name.value);
x.setAttribute("class","te");
x.appendChild(y);
result.appendChild(x);

    var proceed=document.getElementById('btnp');
    var dx=document.getElementById("stt");
dx.style.display="none";
newd.style.display="block";
newd.className+='hz fade-in';
}
var score=0;
function add(){
    newd.style.display="none";
    newda.style.display="block";
newda.className+='hz fade-in';
    var q1=document.getElementById('q1a');
    if(q1.checked == true){
        score=score+5;
        console.log(score);
    }        
}
function adda(){
    newda.style.display="none";
    newdb.style.display="block";
newdb.className+='hz fade-in';
    var q2=document.getElementById('q2c');
    if(q2.checked == true){
        score=score+5;
        console.log(score);
    }
}
var result=document.getElementById('res');
function addb(){
    newdb.style.display="none";
result.style.display="block";
result.className+='hz fade-in';
    var q3=document.getElementById('q3c');
    if(q3.checked == true){
        score=score+5;
        console.log(score);
    }
    var xa=document.createElement("h3");
    var ya=document.createTextNode('You scored '+score+'/15');
    xa.setAttribute("class","te");
    xa.appendChild(ya);
    result.appendChild(xa);
    
}
