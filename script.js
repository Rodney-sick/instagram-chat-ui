// Sample messages (replace with your Instagram chats)
const messages = [
    { sender: "You", text: "This is my secret chat!", time: "2:30 PM" },
    { sender: "Friend", text: "Looks professional!", time: "2:31 PM" }
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
