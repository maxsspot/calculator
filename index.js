function buttonsWork() {
    const buttons = document.getElementsByTagName("button");
    const calculations = document.getElementById("calculations");
    const showExtraKeys = document.getElementById("extraKeysControls");
    let isOpen = true;

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
                    calculations.value=error;
                }
            }

            //calculations.scrollLeft = calculations.scrollWidth - calculations.clientWidth;
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
}
