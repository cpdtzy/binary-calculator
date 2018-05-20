(function () {
    const res = document.getElementById('res');
    const btn0 = document.getElementById('btn0');
    const btn1 = document.getElementById('btn1');
    const btnClr = document.getElementById('btnClr');
    const btnEql = document.getElementById('btnEql');
    const btnSum = document.getElementById('btnSum');
    const btnSub = document.getElementById('btnSub');
    const btnMul = document.getElementById('btnMul');
    const btnDiv = document.getElementById('btnDiv');

    let [value1, value2] = [0, 0];

    addValue(btn1, 1);
    addValue(btn0, 0);
    addSymbol(btnSum, '+');
    addSymbol(btnSub, '-');
    addSymbol(btnMul, '*');
    addSymbol(btnDiv, '/');

    btnClr.onclick = () => {
        res.innerHTML = '';
    }
    
    function addValue(element, value) {
        element.onclick = () => {

            res.innerHTML += value;
        }
    }

    function addSymbol(element, symbolValue) {

        element.onclick = () => {
            value1 = res.innerHTML;

            if (!value1) 
                alert("Please add value.");
            else {
                value1 = res.innerHTML;
                res.innerHTML += ' ' + symbolValue + ' ';
            }
        }
    }
})();