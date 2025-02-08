document.addEventListener("DOMContentLoaded", function () {
    const quantityInputs = document.querySelectorAll(".quantity");
    const removeButtons = document.querySelectorAll(".remove-btn");
    const subtotalElement = document.getElementById("subtotal");

    function updateTotal() {
        let subtotal = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            const price = parseFloat(item.querySelector(".price").textContent.replace("$", ""));
            const quantity = parseInt(item.querySelector(".quantity").value);
            const totalElement = item.querySelector(".total-price");
            const total = price * quantity;
            totalElement.textContent = `Rs${total.toFixed(2)}`;
            subtotal += total;
        });
        subtotalElement.textContent = `Rs${subtotal.toFixed(2)}`;
    }

    quantityInputs.forEach(input => {
        input.addEventListener("input", updateTotal);
    });

    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".cart-item").remove();
            updateTotal();
        });
    });

    updateTotal();
});
