//countChars returns the amount of chars in the string and regulates
// the position of the placeholder if the textbox is not empty
function countChars(obj){
    var initial_length = obj.value.length;
    var newString = obj.value;
    var withoutSpaces = newString.replace(/\s/g, "");
    var length = withoutSpaces.length;
    //'length' returns the length of the text without including whitespace
    var maxsize = 250;
    var remaining = maxsize - length;
    obj.setAttribute("maxlength", maxsize + initial_length - length);
    //by adding 'initial_length - length' to maxlength, we make sure that
    //spaces don't count as characters
    document.getElementById('charNum').innerHTML = length+" characters";
    document.getElementById('remainingChar').innerHTML = remaining+" remaining";
    const placeholder = document.getElementById('placeholder');
    //Below section prevents the placeholder from returning to the textbox
    //when the user clicks away while there's text written
    if(length>0){
        placeholder.style.top = '330px'; 
        placeholder.style.fontSize = '10.5px';
        placeholder.style.backgroundColor = '#e9e9e9';
    }else{
        placeholder.style.top = ''; 
        placeholder.style.fontSize = '';
        placeholder.style.backgroundColor = '';
    }
}
