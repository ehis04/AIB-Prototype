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
            const leftText = transaction.querySelector('.left-text').innerText.toLowerCase();
            const amountText = transaction.querySelector('.right-text').innerText.toLowerCase();

            if (leftText.includes(input) || amountText.includes(input) || date.innerText.toLowerCase().includes(input)) {
                transaction.style.display = 'block';
                anyVisible = true;
            } else {
                transaction.style.display = 'none';
            }
        });


        if (anyVisible) {
            date.style.display = 'block';
        } else {
            date.style.display = 'none';
        }
    });
}

function goBackOrHome() {
    if (document.referrer) {
       
        window.history.back();
    } else {
       
        window.location.href = '/';
    }
}
