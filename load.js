 async function loadNetworks() {
        let response = await fetch('networks.json');
        let networks = await response.json();

        networks.forEach((network, i) => {
            let privateButtonsDiv = document.getElementById('private-buttons');
            let publicButtonsDiv = document.getElementById('public-buttons');

            let privateRpcUrl = network.privateRpcUrls[Math.floor(Math.random() * network.privateRpcUrls.length)];
            let publicRpcUrl = network.publicRpcUrls[Math.floor(Math.random() * network.publicRpcUrls.length)];

            let buttonPrivate = document.createElement('button');
            buttonPrivate.innerText = `Add ${network.chainName}`;
            buttonPrivate.onclick = () => addNetwork(network, privateRpcUrl);
            privateButtonsDiv.appendChild(buttonPrivate);

            let buttonPublic = document.createElement('button');
            buttonPublic.innerText = `Add ${network.chainName}`;
            buttonPublic.onclick = () => addNetwork(network, publicRpcUrl);
            publicButtonsDiv.appendChild(buttonPublic);
        });
    }
