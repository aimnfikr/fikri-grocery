document.addEventListener('DOMContentLoaded', function () {

    // Function to calculate individual item total
    function calculateItemTotal(quantityId, price, totalId) {
        const quantity = parseInt(document.getElementById(quantityId).value) || 0;
        const itemTotal = quantity * price;
        document.getElementById(totalId).textContent = itemTotal.toFixed(2);
        return itemTotal;
    }

    // Function to calculate total of all items
    function calculateTotal() {
        // Calculate individual item totals
        const espressoTotal = calculateItemTotal('espresso-quantity', 7, 'espresso-total');
        const cappuccinoTotal = calculateItemTotal('cappuccino-quantity', 7, 'cappuccino-total');
        const latteTotal = calculateItemTotal('latte-quantity', 7, 'latte-total');

        const greenTeaTotal = calculateItemTotal('green-tea-quantity', 6, 'green-tea-total');
        const milkTeaTotal = calculateItemTotal('milk-tea-quantity', 6, 'milk-tea-total');
        const originalTeaTotal = calculateItemTotal('original-tea-quantity', 5, 'original-tea-total');

        const cheeseCakeTotal = calculateItemTotal('cheese-cake-quantity', 11, 'cheese-cake-total');
        const redVelvetCakeTotal = calculateItemTotal('red-velvet-cake-quantity', 9, 'red-velvet-cake-total');
        const chocolateCakeTotal = calculateItemTotal('chocolate-cake-quantity', 10, 'chocolate-cake-total');

        // Calculate grand total
        const grandTotal = espressoTotal + cappuccinoTotal + latteTotal +
            greenTeaTotal + milkTeaTotal + originalTeaTotal +
            cheeseCakeTotal + redVelvetCakeTotal + chocolateCakeTotal;

        // Display the grand total
        document.getElementById('grand-total').textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
    }

    // Reset Button
    document.getElementById("reset-button").addEventListener("click", function () {
        // Reset all input values and totals
        resetPurchaseForm();
    });

    function resetPurchaseForm() {
        // Reset Coffee
        document.getElementById("espresso-quantity").value = 0;
        document.getElementById("cappuccino-quantity").value = 0;
        document.getElementById("latte-quantity").value = 0;
    
        // Reset Tea
        document.getElementById("green-tea-quantity").value = 0;
        document.getElementById("milk-tea-quantity").value = 0;
        document.getElementById("original-tea-quantity").value = 0;
    
        // Reset Pastry
        document.getElementById("cheese-cake-quantity").value = 0;
        document.getElementById("red-velvet-cake-quantity").value = 0;
        document.getElementById("chocolate-cake-quantity").value = 0;
    
        // Reset totals
        calculateTotal();
    }

    // Add event listener to the calculate button
    const calculateButton = document.getElementById('calculate-button');
    calculateButton.addEventListener('click', calculateTotal);

    // Initial update
    calculateTotal();
});
