// BTCPay Server Configuration
const BTCPAY_URL = "https://btcpay.zepaycrypto.online";
const STORE_ID = "BrYeNGdYrKo1yYN5nZB3LVkPXABemfzGsD2StA7atYZW";
const API_KEY = "9cb3026748ff1898928e913e977c33c1829492f2";

// Global Payment Handler Function
async function payViaCrypto(amount, title) {
    try {
        const response = await fetch(`${BTCPAY_URL}/api/v1/stores/${STORE_ID}/invoices`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `token ${API_KEY}`
            },
            body: JSON.stringify({
                "amount": amount,
                "currency": "USD",
                "metadata": {
                    "itemDesc": title,
                    "orderId": "VPN-" + Date.now()
                }
            })
        });

        const data = await response.json();
        if (data.checkoutLink) {
            window.location.href = data.checkoutLink;
        } else {
            alert("Payment error: Invoice generate nahi ho saka.");
        }
    } catch (err) {
        console.error("Payment Gateway Error:", err);
        alert("Payment gateway connection failed.");
    }
              }
