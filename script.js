document.addEventListener("DOMContentLoaded", () => {
    // Get all product elements
    const products = document.querySelectorAll(".product-grid .product");
    const popups = document.querySelectorAll(".popup-content");
    const popupContainer = document.getElementById("popup");
    const closeButtons = document.querySelectorAll(".close-popup");

    // Add click event listener to each product
    products.forEach((product, index) => {
        product.addEventListener("click", () => {
            // Show the correct popup
            const popupId = `popup-product-${index + 1}`;
            const popup = document.getElementById(popupId);

            if (popup) {
                popupContainer.style.display = "flex"; // Show the popup container
                popup.style.display = "block"; // Show the specific popup
            }
        });
    });

    // Add click event listener to all close buttons
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            popupContainer.style.display = "none"; // Hide the popup container
            popups.forEach(popup => (popup.style.display = "none")); // Hide all popups
        });
    });

    // Hide popup when clicking outside the content
    popupContainer.addEventListener("click", (e) => {
        if (e.target === popupContainer) {
            popupContainer.style.display = "none";
            popups.forEach(popup => (popup.style.display = "none"));
        }
    });
});
