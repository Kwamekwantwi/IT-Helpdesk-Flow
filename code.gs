function sendEmailOnFormSubmit(e) {
  var recipient = "Placeholder email"; 
  var additionalCC = "sit@kowri.app"; 
  var subject = "IT Request";
  
  var responses = e.values;
  var senderEmail = responses[1]; // Index 1 is the email address
  
  // LOGIC: Extract name from email (e.g., "j.doe" from "j.doe@company.com")
  var extractedName = "User"; // Default fallback
  if (senderEmail && senderEmail.includes("@")) {
    var rawName = senderEmail.split("@")[0]; // Takes everything before the @
    // Optional: Replace dots or underscores with spaces and capitalize
    extractedName = rawName.replace(/[._]/g, " "); 
    extractedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
  }
  
  // 1. Build the body for the IT Team
  var body = "New IT Request Submitted:\n\n";
  for (var i = 1; i < responses.length; i++) { 
    body += responses[i] + "\n";
  }
  
  // Send notification to IT Team
  MailApp.sendEmail({
    to: recipient,
    cc: senderEmail + "," + additionalCC, 
    subject: subject,
    body: body
  });

  // 2. Send Acknowledgment to the Form Submitter
  var acknowledgmentSubject = "IT Request Acknowledgment";
  var acknowledgmentBody = "Dear " + extractedName + ",\n\n" +
                           "This is to acknowledge that the Security & IT Team has received your request.\n" +
                           "We are currently reviewing the details and will assist you as soon as possible.\n\n" +
                           "Thank you for your patience.\n\n" +
                           "Best Regards,\n" +
                           "Security & IT Team";

  if (senderEmail) {
    MailApp.sendEmail({
      to: senderEmail,
      subject: acknowledgmentSubject,
      body: acknowledgmentBody
    });
  }
}
