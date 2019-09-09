// @ts-check


//import { io } from "/socket.io/socket.io.js"
const socket = io();
const messageForm = document.querySelector("#formRS");

const buildMessage = message => {
    // add content to message containers
    const container = document.createElement("li");
    const textContainer = document.createElement("span");
    textContainer.innerHTML = message;
    container.appendChild(textContainer);
    
    // decorate new message containers
    container.classList.add("rudy-message");
    return container;
}

// shows the message in the chat box container 
const showMessage = message => {
    const messageBox = document.querySelector("#messages");
    messageBox.appendChild(buildMessage(message));
}

const sendMessage = event => {
    event.preventDefault(); 
    const message = document.querySelector("#inputMessageRS");
    socket.emit("RSMessage", message.value)
}

const init = () => {
    socket.emit("RSMessage", "Rudy Connected :3")
    socket.on("RSMessage", message => showMessage(message))
    messageForm.addEventListener("submit", sendMessage); 
}

init();
