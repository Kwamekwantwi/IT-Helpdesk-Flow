**IT Request Automation & Ticketing Sync**

This Google Apps Script automates the bridge between a Google Form and a Ticketing System (YouTrack). It ensures that every IT request is immediately logged as a ticket while simultaneously keeping the user and the IT team informed.

**🚀 Key Features**
YouTrack Integration: Automatically forwards form responses to companydomain@youtrack.cloud to create/update support tickets.

Intelligent Name Extraction: Parses the sender's email address to extract a clean, capitalized name (e.g., john.doe@company.com → John doe) for personalized responses.

Dual-Channel Notifications:

To IT Team: Sends a full summary of the request.

To User: Sends an immediate "Acknowledgment Receipt" to improve user experience and reduce "follow-up" inquiries.

Smart CC Logic: Automatically CCs the Security & IT (itdeprtmnt@kowri.app) alias on all outgoing alerts for visibility.

**🛠️ How It Works**
The script is triggered on every Form Submit event:

It captures the raw values from the Google Form.

It identifies the submitter's email and cleans it to use in the greeting.

It builds a structured body containing all user inputs.

It dispatches two separate emails using the MailApp service.

**📋 Installation**
Open your Google Sheet linked to the IT Request Form.

Go to Extensions > Apps Script.

Paste the code from Code.gs into the editor.

Set up the Trigger:

Click the Clock icon (Triggers) on the left sidebar.

Add a new trigger.

Choose sendEmailOnFormSubmit as the function to run.

Select On form submit as the event type.

Save and authorize the necessary permissions.

**💻 Technical Details**
The script uses JavaScript's regex and string manipulation to ensure the generated name looks professional:

JavaScript

extractedName = rawName.replace(/[._]/g, " "); 
extractedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);


**📄 License**
This project is open-source and available under the MIT License.
