// ==========================================
// Fast VPN Solutions — Live Payment Gateway
// Merchant ID: a2e02d07-2db5-4bfa-96ab-95a2cbb26214
// ==========================================

const CRYPTOMUS_MERCHANT_ID = "a2e02d07-2db5-4bfa-96ab-95a2cbb26214";

/**
* Handles payment processing for Fast VPN Solutions.
* Automatically generates a dynamic 2-hour Cryptomus invoice link.
*
* @param {string} planId - The ID of the selected package (e.g., '1m', '3m', '1y')
* @param {number} price - The amount to charge in USD (e.g., 10.00, 28.00)
*/
function processGatewayPayment(planId, price) {
    if (!planId || !price) {
        console.error("Invalid payment parameters.");
        alert("Error initiating payment. Please select a valid package.");
        return;
    }

    console.log(`[Cryptomus Gateway] Initiating payment for Plan: ${planId} ($${price})`);

    // Generate unique order reference to prevent duplicates
    const timestamp = Date.now();
    const orderId = `VPN_${planId}_${timestamp}`;

    // Dynamic Hosted Checkout URL (Cryptomus Approved Merchant)
    const cryptomusCheckoutUrl = `https://pay.cryptomus.com/pay/${CRYPTOMUS_MERCHANT_ID}?amount=${price}&currency=USD&order_id=${orderId}`;

    // Smooth redirect to live checkout page
    window.location.href = cryptomusCheckoutUrl;
}
