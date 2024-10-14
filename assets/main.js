function createCalc() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        clearDisplay() {
            this.display.value=''
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        doMath() {
            let count = this.display.value;
            try {
                count = eval(count);
                if(!count) {
                    alert('This is invalid');
                    return;
                }
                this.display.value = count;
            } catch(e){
                alert('This is invalid');
                return;
            }
        },
        
        start() {
            this.btnClick();
            this.pressEnter()
        },
        pressEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.doMath();
                }
            });
        },
     btnClick () {
        document.addEventListener('click', function (e){
        const el = e.target;
            if(el.classList.contains('btn-num')){
                this.btnDisplay(el.innerText);
            }
            if(el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del')) {
                this.deleteOne();
            }
            if(el.classList.contains('btn-eq')) {
                this.doMath();
            }
}.bind(this));
},
 btnDisplay(value){
    this.display.value += value
 }
}}


const calculator = createCalc();
calculator.start()