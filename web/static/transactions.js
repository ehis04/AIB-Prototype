function filterTransactions() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const dates = document.querySelectorAll('.date');

    dates.forEach(date => {
        const transactions = [];
        let nextElement = date.nextElementSibling;

        while (nextElement && nextElement.classList.contains('today')) {
            transactions.push(nextElement);
            nextElement = nextElement.nextElementSibling;
        }

        let anyVisible = false;
        transactions.forEach(transaction => {
            const leftText = transaction.querySelector('.left-text')?.innerText.toLowerCase() || '';
            const amountText = transaction.querySelector('.right-textd, .right-textu')?.innerText.toLowerCase() || '';

            if (
                leftText.includes(input) ||
                amountText.includes(input) ||
                date.innerText.toLowerCase().includes(input)
            ) {
                transaction.style.display = 'block';
                anyVisible = true;
            } else {
                transaction.style.display = 'none';
            }
        });

        date.style.display = anyVisible ? 'block' : 'none';
    });
}

function openMonthPicker() {
    const monthPicker = document.createElement('select');
    const months = [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'
    ];

    monthPicker.setAttribute('id', 'month-picker');
    monthPicker.style.position = 'fixed';
    monthPicker.style.top = '50%';
    monthPicker.style.left = '50%';
    monthPicker.style.transform = 'translate(-50%, -50%)';
    monthPicker.style.zIndex = '1000';
    monthPicker.style.padding = '10px';
    monthPicker.style.border = '1px solid black';
    monthPicker.style.borderRadius = '5px';
    monthPicker.style.backgroundColor = 'white';

    months.forEach(month => {
        const option = document.createElement('option');
        option.value = month.toLowerCase();
        option.innerText = month;
        monthPicker.appendChild(option);
    });

    const confirmButton = document.createElement('button');
    confirmButton.innerText = 'Filter';
    confirmButton.style.marginLeft = '10px';
    confirmButton.onclick = function () {
        const selectedMonth = monthPicker.value;
        document.body.removeChild(monthPicker);
        document.body.removeChild(confirmButton);
        filterTransactionsByMonth(selectedMonth);
    };

    document.body.appendChild(monthPicker);
    document.body.appendChild(confirmButton);
}

function toggleMonthPicker() {
    const monthPicker = document.getElementById('month-picker');
    const overlay = document.getElementById('overlay');
    const calendarIcon = document.querySelector('.calendar-icon');
    if (monthPicker.style.display === 'grid') {
        monthPicker.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        const rect = calendarIcon.getBoundingClientRect();
        monthPicker.style.display = 'grid';
        monthPicker.style.top = `${rect.top}px`;
        monthPicker.style.right = `${window.innerWidth - rect.left + 10}px`;
        overlay.style.display = 'block';
    }
}

function selectMonth(selectedMonth) {
    toggleMonthPicker();
    filterTransactionsByMonth(selectedMonth);
}

function hideMonthPicker() {
    document.getElementById('month-picker').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}



function filterTransactionsByMonth(selectedMonth) {
    const dates = document.querySelectorAll('.date');
    dates.forEach(date => {
        const dateValue = date.getAttribute('data-date');
        if (!dateValue) return;

        const transactionMonth = new Date(dateValue).toLocaleString('default', { month: 'long' }).toLowerCase();
        const transactions = [];
        let nextElement = date.nextElementSibling;

        while (nextElement && nextElement.classList.contains('today')) {
            transactions.push(nextElement);
            nextElement = nextElement.nextElementSibling;
        }

        let anyVisible = false;
        transactions.forEach(transaction => {
            if (transactionMonth.includes(selectedMonth)) {
                transaction.style.display = 'block';
                anyVisible = true;
            } else {
                transaction.style.display = 'none';
            }
        });

        date.style.display = anyVisible ? 'block' : 'none';
    });
}
