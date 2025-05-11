// Auto-generates realistic fake chats
const messages = [
    { sender: "Alex", text: "Hey, did you see the project updates?", time: "10:30 AM", type: "their" },
    { sender: "You", text: "Not yet, will check now.", time: "10:32 AM", type: "your" },
    { sender: "Jordan", text: "Meeting at 3 PM - don’t forget!", time: "11:15 AM", type: "their" },
    { sender: "You", text: "Got it. Will prep the slides.", time: "11:17 AM", type: "your" }
];

function displayMessages() {
    const container = document.createElement('div');
    container.className = 'chat-area';
    
    messages.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${msg.type}-message`;
        msgDiv.innerHTML = `
            <strong>${msg.sender}</strong> <span class="time">${msg.time}</span><br>
            ${msg.text}
        `;
        container.appendChild(msgDiv);
    });
    
    document.body.appendChild(container);
}

displayMessages();
