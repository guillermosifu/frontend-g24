//querySelector y querySelectorAll


//esto con class

const inputName = document.querySelector('.input_name')
console.log(inputName)

//esto con id 

const inputEmail= document.querySelector('#input_email')
console.log(inputEmail)

// esto con nombre de tag

const form = document.querySelector('form')
console.log(form)


// utilizo all
//podemos iterar eun nodelist ya ques ompatble solo con for each

const inputs = document.querySelectorAll('input')
console.log(inputs)

// quiero filtar as los inputs que sean de tipo text

const arrayInputText = [];
inputs.forEach((input)=>{
    if(input.type ==="email")[
        arrayInputText.push(input)
    ]
})
console.log(arrayInputText)