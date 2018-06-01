(function () {
    const res = document.getElementById('res');
    const btnClr = document.getElementById('btnClr');
    const btnEql = document.getElementById('btnEql');

    addValue("btn1", 1);
    addValue("btn0", 0);
    addSymbol("btnSum", '+');
    addSymbol("btnSub", '-');
    addSymbol("btnMul", '*');
    addSymbol("btnDiv", '/');

    // clear value
    btnClr.onclick = () => {
        res.innerHTML = '';
    }

    btnEql.onclick = () => {
        const value = res.innerHTML;
        const test = new RegExp('[\+\-\/\*]', 'ig');

        if ( !value ) {
            alert("Please add value.");

        } else if( !test.test(value) ) {
            alert("Please add symbol.");

        } else {
            getAnswer(value);
        }

        function getAnswer(value: string): void {
            const sum = /\+/ig;
            const sub = /\-/ig;
            const mul = /\*/ig;
            const div = /\//ig;

            if (sum.test(value)) 
                getFinished(value, ' + ');

            else if(sub.test(value))
                getFinished(value, ' - ');

            else if(mul.test(value))
                getFinished(value, ' * ');
            
            else if(div.test(value))
                getFinished(value, ' / ');

            function getFinished(value2: string, symbol: string): void {
                const number: string[] = value2.split(symbol);

                // continue not finish.
                const calculation = new BinaryCalculation(number[0], number[1]);
                let answer: string;
                switch(symbol) {
                    case ' + ':
                        answer = calculation.sum(); 
                    break;
                    case ' - ':
                        answer = calculation.sub();
                    break;
                    case ' * ':
                        answer = calculation.mul();
                    break;
                    case ' / ':
                        answer = calculation.div();
                    break;
                }

                res.innerHTML = answer;
            }
        }
    }
    
    function addValue(element: string, value: number): void {
        const obj = document.getElementById(element);

        obj.onclick = () => {

            res.innerHTML += value;
        }
    }

    function addSymbol(element: string, symbolValue: string): void {
        const obj = document.getElementById(element);

        obj.onclick = () => {
            const test = new RegExp('[\+\-\/\*]', 'ig');
            let value1 = res.innerHTML;

            if (!value1) 
                alert("Please add value.");

            else if(test.test(value1))
                return;
                
            else {
                value1 = res.innerHTML;
                res.innerHTML += ' ' + symbolValue + ' ';
            }
        }
    }

    // binary calculation formula
    class BinaryCalculation {
        number: number;
        number2: number;

        constructor(public value: string, public value1: string) {
            this.number = parseInt(value, 2);
            this.number2 = parseInt(value1, 2);
        }

        public sum() {
            const sum: number = this.number + this.number2;
            
            return sum.toString(2);
        }

        public sub() {
            const sub: number = this.number - this.number2;

            return sub.toString(2);
        }

        public mul() {
            const mul: number = this.number * this.number2;

            return mul.toString(2);
        }

        public div() {
            const mul: number = this.number / this.number2;

            return Math.round( Number( mul.toString(2) ) ).toString();
        }
    }
})();