function buttonsWork() {
    const buttons = document.getElementsByTagName("button");
    const calculations = document.getElementById("calculations");
    const showExtraKeys = document.getElementById("extraKeysControls");
    let isOpen = false;

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
                    calculations.value="Error In Calculation";
                }
            }
        }
    }

    showExtraKeys.onclick = function () {
        const extraKeys = document.getElementById("extraKeys");
        
        if (!isOpen) {
            extraKeys.style.opacity="1";
            isOpen=true;
            showExtraKeys.textContent="Hide Extra Keys ▼";
        } else {
            extraKeys.style.opacity="0";
            isOpen=false;
            showExtraKeys.textContent="Show Extra Keys ▲";
        }
        
        document.getElementById("delete").style.opacity="1";
        document.getElementById("clear").style.opacity="1";
    }
}
