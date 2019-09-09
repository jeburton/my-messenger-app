const socket = io()

// emits the message sent
const sendMessageJB = event => {  
  event.preventDefault();
  
  const newMessage = document.getElementById('inputMessageJB').value;
  
  socket.emit('JBMessage', newMessage);
   
}

// Adds a chat message to the dom
const addMessageJB = msg => {
  const newLi = document.createElement("li");
  const messageList = document.getElementById('messages');
  newLi.className = "liJB";

  const span = document.createElement("span")
  span.textContent = msg;
  
  newLi.appendChild(span);
  newLi.addEventListener("click", e => {
    e.target.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  })
  messageList.appendChild(newLi);
  document.getElementById('inputMessageJB').value = '';
  messageList.parentNode.scrollTop = messageList.parentNode.scrollHeight;

  
}
socket.emit("JBMessage", "Julian Connected")
socket.on('JBMessage', message => addMessageJB(message));

document.getElementById("formJB").addEventListener("submit", sendMessageJB);

