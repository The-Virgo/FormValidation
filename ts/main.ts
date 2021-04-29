window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    hasText("firstName", "First name is required");
    hasText("lastName", "Last name is required");
}

/**
 * Returns true if the text box with the given id
 * has some text inside it
 * @param id The id of the <input type="text" to vaidate
 * @param errMsg The message to display in the sibling span of the textbox
 * @returns 
 */
function hasText(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
