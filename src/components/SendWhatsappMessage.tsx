const SendWhatsAppMessage = (message:string) => {

  const phoneNumber = '+2348133318545';
  // Remove any + signs or spaces
  const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
  // Encode the message for the URL
  const encodedMessage = encodeURIComponent(message);
  // WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
  // Open in new tab
  window.open(whatsappUrl, '_blank');
};

export default SendWhatsAppMessage;