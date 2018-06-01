(function () {
    var res = document.getElementById('res');
    var btnClr = document.getElementById('btnClr');
    var btnEql = document.getElementById('btnEql');
    addValue("btn1", 1);
    addValue("btn0", 0);
    addSymbol("btnSum", '+');
    addSymbol("btnSub", '-');
    addSymbol("btnMul", '*');
    addSymbol("btnDiv", '/');
    btnClr.onclick = function () {
        res.innerHTML = '';
    };
    btnEql.onclick = function () {
        var value = res.innerHTML;
        var test = new RegExp('[\+\-\/\*]', 'ig');
        if (!value) {
            alert("Please add value.");
        }
        else if (!test.test(value)) {
            alert("Please add symbol.");
        }
        else {
            getAnswer(value);
        }
        function getAnswer(value) {
            var sum = /\+/ig;
            var sub = /\-/ig;
            var mul = /\*/ig;
            var div = /\//ig;
            if (sum.test(value))
                getFinished(value, ' + ');
            else if (sub.test(value))
                getFinished(value, ' - ');
            else if (mul.test(value))
                getFinished(value, ' * ');
            else if (div.test(value))
                getFinished(value, ' / ');
            function getFinished(value2, symbol) {
                var number = value2.split(symbol);
                var calculation = new BinaryCalculation(number[0], number[1]);
                var answer;
                switch (symbol) {
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
    };
    function addValue(element, value) {
        var obj = document.getElementById(element);
        obj.onclick = function () {
            res.innerHTML += value;
        };
    }
    function addSymbol(element, symbolValue) {
        var obj = document.getElementById(element);
        obj.onclick = function () {
            var test = new RegExp('[\+\-\/\*]', 'ig');
            var value1 = res.innerHTML;
            if (!value1)
                alert("Please add value.");
            else if (test.test(value1))
                return;
            else {
                value1 = res.innerHTML;
                res.innerHTML += ' ' + symbolValue + ' ';
            }
        };
    }
    var BinaryCalculation = (function () {
        function BinaryCalculation(value, value1) {
            this.value = value;
            this.value1 = value1;
            this.number = parseInt(value, 2);
            this.number2 = parseInt(value1, 2);
        }
        BinaryCalculation.prototype.sum = function () {
            var sum = this.number + this.number2;
            return sum.toString(2);
        };
        BinaryCalculation.prototype.sub = function () {
            var sub = this.number - this.number2;
            return sub.toString(2);
        };
        BinaryCalculation.prototype.mul = function () {
            var mul = this.number * this.number2;
            return mul.toString(2);
        };
        BinaryCalculation.prototype.div = function () {
            var mul = Math.round(this.number / this.number2);
            return mul.toString(2);
        };
        return BinaryCalculation;
    }());
})();

//# sourceMappingURL=binaryCalculator.js.map
