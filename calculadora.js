function calculator() {
    const operation = Number(prompt('Choose an operation:\n 1 - Add (+)\n 2 - Subtract (-)\n 3 - Multiply (*)\n 4 - Real Divide (/)\n 5 - Full Divide(%)\n 6 - Power(**)'));

    if (!operation || operation >= 7) {
        alert('Invalid operation')
        calculator();
    } else {
        let n1 = Number(prompt('Insert first value:'));
        let n2 = Number(prompt('Insert second value:'));
        let result;

        if (!n1 || !n2) {
            alert('Invalid operator')
            calculator();
        } else {
            function add() {
                result = n1 + n2
                alert(`${n1} + ${n2} = ${result}`)
                newOperation();
            }
            function subtract() {
                result = n1 - n2
                alert(`${n1} - ${n2} = ${result}`)
                newOperation();
            }
            function multiply() {
                result = n1 * n2
                alert(`${n1} * ${n2} = ${result}`)
                newOperation();
            }
            function realDivide() {
                result = n1 / n2
                alert(`${n1} / ${n2} = ${result}`)
                newOperation();
            }
            function fullDivide() {
                result = n1 % n2
                alert(`The rest of the division between ${n1} and ${n2} is ${result}`)
                newOperation();
            }
            function power() {
                result = n1 ** n2
                alert(`${n1} to the power of ${n2} is ${result}`)
                newOperation();
            }

            function newOperation() {
                let option = prompt('Do you wish to make another operation?\n 1 - Yes\n 2 - No');

                if (option == 1) {
                    calculator();
                } else if (option == 2) {
                    alert('See ya!')
                } else {
                    alert('Please choose a valid option!')
                    newOperation();
                }
            }

            // if (operation == 1) {
            //     add();
            // } else if (operation == 2) {
            //     subtract();
            // } else if (operation == 3) {
            //     multiply();
            // } else if (operation == 4) {
            //     realDivide();
            // } else if (operation == 5) {
            //     fullDivide();
            // } else if (operation == 6) {
            //     power();
            // }

            switch (operation) {
                case 1:
                    add();
                    break;
                case 2:
                    subtract();
                    break;
                case 3:
                    multiply();
                    break;
                case 4:
                    realDivide();
                    break;
                case 5:
                    fullDivide();
                    break;
                case 5:
                    power();
                    break;
            }
        }

    }
}


calculator();