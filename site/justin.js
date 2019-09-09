(() => {
  const socket = io();

  const addMessage = msg => {
    const li = document.createElement("li")
    li.className = "JMli"
    li.textContent = msg
    const messageList = document.querySelector("#messages")
    
    messageList.appendChild(li)
    messageList.parentNode.scrollTop = messageList.parentNode.scrollHeight;

    li.addEventListener("click", e => {
      e.target.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    })
  }

  /** @param {Event} e */
  const sendMessageJM = e => {
    e.preventDefault()
    const JMinput = document.querySelector("#inputMessageJM")
    const message = JMinput.value
    JMinput.value = ""
    socket.emit("JMMessage", message)
  }

  
  socket.emit("JMMessage", "Justin Connected")
  socket.on("JMMessage", msg => addMessage(msg))

  document.getElementById("formJM").addEventListener("submit", sendMessageJM)
})()