// biyer condition    

var num= 70

if (num >= 20 && num <=22){
    document.write('sorry its not ur cup of tea')
}  
else if (num >=23 && num <=25){

    document.write('not enough mature')
} 
 else if (num >= 25 && num <=28){
    document.write('perfect')
} 
 else if (num >= 29 && num <=35){
    document.write('joldi bow khujo bhai')
} 
 else if (num >= 36 && num <=45){
    document.write('ki r korba jibon shesh')
} 
 else if (num >=46  && num <=80){
    document.write('Railway minister hoyar dorkar nai !!!')
} 
 else if (num >=81  && num <=95){
    document.write('hayat ase naki dekho etodur')
} else{
    alert('sorry this site is not for  u')
}



document.write('<br>')
document.write('<br>')

//odd/even numb er check

var num= 3

if (num % 2 == 0){
    document.write('even')
} else {
    document.write( 'odd')
}

document.write('<br>')
document.write('<br>')


var num= 10

if (num % 2 == 0){
    document.write('even')
} else {
    document.write( 'odd')
}

document.write('<br>')
document.write('<br>')

var num= 33

if (num % 2 == 0){
    document.write('even')
} else {
    document.write( 'odd')
}

document.write('<br>')
document.write('<br>')


//function


function sum(a,b){
    var num1 = a
    var num2 = b
    document.write(num1 + num2)
    document.write('<br>')

}
sum(20,10)


function sub(a,b){
    var num1 = a
    var num2 = b
    document.write(num1 / num2)
    document.write('<br>')

}
sub(20,10)




function multiplication (a,b){
    var num1 = a
    var num2 = b
    document.write(num1 * num2)
    document.write('<br>')
    
}
multiplication(20,10)

//button

function alertfunction(){
    alert('i am from function')
}
document.write('<br>')
document.write('<br>')

function textchance(){
    document.getElementById("btn").innerText= 'Done'
    document.getElementById("btn").style.color= 'green'
}