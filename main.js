// const enterNumber = (number) => {
//     console.log("entered Number: " + number);
// }

const insert = (num) =>{
    document.form.textview.value = document.form.textview.value+num;
}

const equal = () =>{
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value=eval(exp);
    }
}

const clean = () =>{
    document.form.textview.value=" ";
}

const back = () => {
    var exp = document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);
}

// const per = () =>{
//     document.form.textview.value = parseFloat(document.form.textview.value) / parseFloat(document.form.textview.value)*100;
//     console.log("per:", document.form.textview.value);
// }

const per = (num1) =>{
    document.form.textview.value = document.form.textview.value/0.1;
    // console.log("num:",num1);
    // console.log("per:", document.form.textview.value);
}

// const percentage = () =>{
//     let cal = 
//     document.form = `${parseFloat(document.form.textview.value) / 100}`
// }
// document.form.textview.value/100;



// function berechnen() {
//     var z1 = document.form.t1.value;
//     var z2 = document.form.t2.value;
//     var pr = (z1/z2)*100;
//     pr = ("" + pr).substr(0,("" + pr).indexOf(".")+3);
//     output = z1 + " von " + z2 + " sind " + pr + " Prozent";
//     alert(output);
//  }

// function percentage(x, y)
// {
// return (x / y) * 100;
// }

// console.log(percentage(7.81, 178.32) + "%");