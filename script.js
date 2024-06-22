document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (button.id === 'clear') {
                display.value = '';
            } else if (button.id === 'delete') {
                display.value = display.value.slice(0, -1);
            } else if (button.id === 'equals') {
                try {
                    display.value = eval(display.value) || '';
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});
