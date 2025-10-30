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
        if(buttons[i].length == 1) {
            possibleKeys.push(buttons[i]);
        }
    }

    document.body.onkeyup = function(event){
        if(event.key in possibleKeys && event.key != "C") {
            calculations.value+=event.key
        }
    };
}
