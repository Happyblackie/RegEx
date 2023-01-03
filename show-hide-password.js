const p = document.querySelector('input[name=password]');
//console.log(p);

//show password or hide password achieved

const c = document.querySelector('input[name=checkbox]');
c.addEventListener('change',function(e){
    if(c.checked){
        p.setAttribute('type', 'text');
        //p.setAttribute('style', 'color:red');
    }else{
        p.setAttribute('type', 'password');
    }
});