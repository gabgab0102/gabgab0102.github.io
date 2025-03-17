document.addEventListener('DOMContentLoaded', () => {
    const display = document.forms[0].display;
    function append(val) {
        display.value += val;
    }

    function clear() {
        display.value = '';
    }

    function del() {
        display.value = display.value.toString().slice(0, -1);
    }

    function calculate() {
        display.value = eval(display.value);
    }

    document.querySelectorAll('input[type="button"]').forEach(button => {
        const value = button.value;

        if (value == 'AC') {
            button.addEventListener('click', clear);
        } else if (value == 'DEL') {
            button.addEventListener('click', del);
        } else if (value == '=') {
            button.addEventListener('click', calculate);
        } else {
            button.addEventListener('click', () => append(value));
        }
    });
});
