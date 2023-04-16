function countChars(obj){
    var newString = obj.value;
    var withoutSpaces = newString.replace(/\s/g, "");
    var length = withoutSpaces.length;
    var maxsize = 250;
    var remaining = maxsize - length;
    document.getElementById('charNum').innerHTML = length+" characters";
    document.getElementById('remainingChar').innerHTML = remaining+" remaining";
    const placeholder = document.getElementById('placeholder');
    if(length>0){
        placeholder.style.top = '330px'; 
        placeholder.style.fontSize = '11px';
        placeholder.style.backgroundColor = '#e9e9e9';
    }else{
        placeholder.style.top = ''; 
        placeholder.style.fontSize = '';
        placeholder.style.backgroundColor = '';
    }
}
