
class Network {
    constructor() {
        this.id = null;
        this.peer = new Peer();
        this.peer.on('open', id => {
            this.id = id;
            document.getElementById("peerid").innerHTML = id;
            document.getElementById("copyicon").style.visibility = "visible";
        });
        this.peer.on('connection', conn => {
            appendMessage("Message received: " + conn.peer);
        });
    }

    send(id, msg) {
        let peer = new Peer(msg);
        peer.on('open', () => {
            console.log("OPEN!");
            let conn = peer.connect(id);
            conn.on('open', conn => {
                appendMessage("Message sent!");
            });
            conn.on('error', function (err) {
                console.error(err);
                alert('An error occurred while trying to connect to the peer.');
            });
        })
    }
}

function appendMessage(message) {
    const messageDisplay = document.getElementById('messageDisplay');
    messageDisplay.innerHTML += '<p>' + message + '</p>';
}
