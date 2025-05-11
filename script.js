// Sample messages (replace with your Instagram chats)
const messages = [
    { sender: "John", text: "Hey, did you see the report?", time: "10:30 AM" },
    { sender: "You", text: "Not yet, I'll check now.", time: "10:32 AM" },
    { sender: "John", text: "Thanks! It's urgent.", time: "10:33 AM" }
];

const container = document.getElementById('message-container');

messages.forEach(msg => {
    const messageEl = document.createElement('div');
    messageEl.className = 'message';
    messageEl.innerHTML = `
        <strong>${msg.sender}</strong> (${msg.time}):<br>
        ${msg.text}
    `;
    container.appendChild(messageEl);
});