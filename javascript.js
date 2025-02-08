document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded");

  // Get elements by their IDs
  const toggleButton = document.getElementById("chatbox-btn");
  const chatbox = document.getElementById("chatbox");
  const closeButton = document.getElementById("close-chatbot");
  const chatlogs = document.getElementById("chatlogs");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("send-button");

  // Predefined scripted responses with clickable links
  const scriptedResponses = {
    "hi": "Hello! How can I help you?",
    "how are you": "I'm doing great! How about you?",
    "bye": "Goodbye! Have a nice day!",
    "info": "You can contact us directly by visiting our <a href='contact.html' class='text-blue-600'>Contact Us</a> page.",
    "default": "For more information, please visit our website at <a href='about.html' class='text-blue-600'>AI.com</a>"
  };

  // Function to get the scripted response based on the message
  function getScriptedResponse(message) {
    return scriptedResponses[message] || scriptedResponses["default"];
  }

  // Function to send a message and display the chatbot's response
  function sendMessage() {
    const message = userInput.value.trim().toLowerCase();
    if (!message) return; // Don't send empty messages

    // Append user's message to chat logs
    chatlogs.innerHTML += `<div class="chat-message user bg-gray-200 p-2 rounded-lg mb-2 text-right">${message}</div>`;
    userInput.value = ""; // Clear the input field

    // Scroll to the latest message
    chatlogs.scrollTop = chatlogs.scrollHeight;

    // Simulate a delay for bot response
    setTimeout(() => {
      const botReply = getScriptedResponse(message);
      chatlogs.innerHTML += `<div class="chat-message bot bg-blue-100 p-2 rounded-lg mb-2 text-left">${botReply}</div>`;
      chatlogs.scrollTop = chatlogs.scrollHeight;
    }, 1000);
  }

  // Listen for click on the Send button
  sendButton.addEventListener("click", sendMessage);

  // Also listen for Enter keypress in the input field
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Toggle chatbox visibility when the toggle button is clicked
  toggleButton.addEventListener("click", function () {
    chatbox.classList.toggle("hidden");
  });

  // Close the chatbox when the close button is clicked
  closeButton.addEventListener("click", function () {
    chatbox.classList.add("hidden");
  });
});
