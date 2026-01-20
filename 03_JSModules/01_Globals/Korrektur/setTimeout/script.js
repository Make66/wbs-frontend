setTimeout(() => {
  const promotionMessage = document.createElement("div");

  promotionMessage.textContent =
    "Special Offer: Get 20% off your next purchase!";

  promotionMessage.className = "bg-red-500 p-4 rounded-lg text-center";

  document.getElementById("message-container").appendChild(promotionMessage);

  //   const messageContainer = document.getElementById("message-container");
  //   messageContainer.appendChild(promotionMessage);
}, 3000);
