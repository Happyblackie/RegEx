//validation script
const inputs = document.querySelectorAll('input');

const patterns = {
    telephone : /^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}



//validation function
function validate(field,regex){
    //console.log(regex.test(field.value));//returns true or false
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

//loop throgh all the input fields
inputs.forEach(function(input){
    //add event listener to all
    input.addEventListener('keyup',function(e){
        //first log to the console
        //console.log(e.target.attributes.name.value);
        //validate(e.target, patterns['telephone']); we can pass telephone but this targets only limited input field
        validate(e.target, patterns[e.target.attributes.name.value]); //target all the input field as per their demand
    });
});
