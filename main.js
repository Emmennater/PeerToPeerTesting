
(function start() {
  const net = new Network();
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById("send");

  sendButton.onclick = () => {
    const peerId = prompt("Recipient ID:");
    net.send(peerId, messageInput.value)
  }

})();
