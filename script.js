const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("🧑‍💻 " + message, "user");
  userInput.value = "";

  // Temporary AI typing animation
  const aiMsg = document.createElement("div");
  aiMsg.classList.add("message", "ai");
  chatBox.appendChild(aiMsg);

  let dots = 0;
  const typing = setInterval(() => {
    aiMsg.textContent = "🤖 typing" + ".".repeat(dots % 4);
    dots++;
  }, 400);

  setTimeout(() => {
    clearInterval(typing);
    // Dummy response for now
    aiMsg.textContent = "🤖 Salaam! I'm 360 AI Me — your halal productivity partner 😎";
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 2000);
}
