function buttonsWork() {
    const buttons = document.getElementsByTagName("button");
    const calculations = document.getElementById("calculations");
    const showExtraKeys = document.getElementById("extraKeysControls");
    let isOpen = true;
    possibleKeys = []
    
    for (i=0;i<buttons.length;i++) {
        buttons[i].onclick = function () {
            if (this.textContent == "DEL") {
                calculations.value = calculations.value.slice(0,-1);
            } else if (this.textContent == "C") {
                calculations.value="";
            } else if(this.textContent != "=") {
                calculations.value+=this.textContent;
            } else {
                try {
                    calculations.value=math.evaluate(calculations.value);
                } catch (error) {
                    calculations.value="Error";
                }
            }
        }
    }

    showExtraKeys.onclick = function () {
        const extraKeys = document.getElementById("extraKeys");
        
        if (!isOpen) {
            extraKeys.style.visibility="visible";
            isOpen=true;
            showExtraKeys.textContent="Hide Extra Keys ▼";
        } else {
            extraKeys.style.visibility="hidden";
            isOpen=false;
            showExtraKeys.textContent="Show Extra Keys ▲";
        }
        
        document.getElementById("delete").style.visibility="visible";
        document.getElementById("clear").style.visibility="visible";
    }
    
    for(i=0;i<buttons.length;i++) {
        if(buttons[i].textContent.length == 1) {
            possibleKeys.push(buttons[i].textContent);
        }
    }

    document.body.onkeyup = function(event){
        if(possibleKeys.includes(event.key) && event.key != "C" && event.key != "=") {
            calculations.value+=event.key
        } else if (event.key == "=" || event.key == "Enter") {
            try {
                calculations.value=math.evaluate(calculations.value);
            } catch (error) {
                calculations.value="Error";
            }
        } else if (event.key == "Backspace") {
            calculations.value = calculations.value.slice(0,-1);
        } else if (event.key.toLowerCase() == "c") {
            calculations.value="";
        }
    };
}
