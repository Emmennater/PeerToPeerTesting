
(function start() {
  const net = new Network();
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById("send");

  sendButton.onclick = () => {
    const peerId = prompt("Recipient ID:");
    net.send(peerId, messageInput.value)
  }

})();

document.getElementById("copyid").addEventListener("click", function() {
  var textToCopy = document.getElementById("peerid").innerText;
  navigator.clipboard.writeText(textToCopy).then(function() {
    document.getElementById("copyicon").innerHTML = '✓';
    // alert("Copied to clipboard!");
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
});
