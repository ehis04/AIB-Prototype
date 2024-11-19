<script>
    function filterTransactions() {
        const input = document.getElementById('search-input').value.toLowerCase();
        const transactions = document.querySelectorAll('.today');

        transactions.forEach(transaction => {
            const leftText = transaction.querySelector('.left-text').innerText.toLowerCase();
            const dateText = transaction.closest('.date')?.querySelector('h1').innerText.toLowerCase();

            if (leftText.includes(input) || dateText?.includes(input)) {
                transaction.style.display = 'block';
                transaction.closest('.date').style.display = 'block';
            } else {
                transaction.style.display = 'none';

                // Hide the associated date if no visible transactions
                const siblingTransactions = transaction.closest('.date').nextElementSibling;
                if (!siblingTransactions || Array.from(siblingTransactions).every(
                    sibling => sibling.style.display === 'none'
                )) {
                    transaction.closest('.date').style.display = 'none';
                }
            }
        });
    }
</script>

