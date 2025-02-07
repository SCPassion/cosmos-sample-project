const chainId = "cosmoshub-4";

const connectBtn = document.getElementById('connect')
let offlineSigner

connectBtn.addEventListener('click', async () => {
    console.log("connect button clicked");

    if(!window.keplr) {
        alert("Please install keplr extension")
    }

    try {
        await keplr.enable(chainId);
        offlineSigner = window.getOfflineSigner(chainId)
        const accounts = await offlineSigner.getAccounts()
        document.getElementById('address').textContent = 'Connected: ' + accounts[0].address
        connectBtn.textContent = 'Connected'
        connectBtn.disabled = true
    } catch(err) {
        console.error(err)
    }
})