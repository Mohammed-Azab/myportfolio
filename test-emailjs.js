// EmailJS Test Script
// Node.js v22 has native fetch support

// Your EmailJS configuration
const emailConfig = {
  serviceId: "service_rfknbuc",
  templateId: "template_cg05woc",
  publicKey: "yK6rOh_8CjuN9291T",
  recipientEmail: "mohammed@azab.io",
};

// Test data
const testData = {
  from_name: "Test User",
  from_email: "test@example.com",
  subject: "Test Email from Terminal",
  message:
    "This is a test message sent from the terminal to verify EmailJS configuration.",
  to_email: emailConfig.recipientEmail,
};

async function testEmailJS() {
  console.log("🧪 Testing EmailJS Configuration...");
  console.log("📧 Service ID:", emailConfig.serviceId);
  console.log("📄 Template ID:", emailConfig.templateId);
  console.log("🔑 Public Key:", emailConfig.publicKey.substring(0, 8) + "...");
  console.log("📨 Test Data:", testData);
  console.log("");

  try {
    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: emailConfig.serviceId,
          template_id: emailConfig.templateId,
          user_id: emailConfig.publicKey,
          template_params: testData,
        }),
      }
    );

    const responseText = await response.text();

    console.log("📊 Response Status:", response.status);
    console.log("📊 Response Status Text:", response.statusText);
    console.log("📊 Response Body:", responseText);

    if (response.ok) {
      console.log("✅ SUCCESS: Email sent successfully!");
      return true;
    } else {
      console.log("❌ FAILED: Email sending failed");

      // Parse specific error types
      if (response.status === 400) {
        if (responseText.includes("template ID not found")) {
          console.log(
            "🚨 ERROR: Template ID 'template_cg05woc' not found in your EmailJS dashboard"
          );
          console.log(
            "💡 SOLUTION: Go to https://dashboard.emailjs.com/admin/templates and create the template or use an existing one"
          );
        } else if (responseText.includes("service ID not found")) {
          console.log("🚨 ERROR: Service ID 'service_rfknbuc' not found");
          console.log(
            "💡 SOLUTION: Check your EmailJS dashboard for the correct service ID"
          );
        } else {
          console.log("🚨 ERROR: Bad request - check your configuration");
        }
      } else if (response.status === 401) {
        console.log("🚨 ERROR: Unauthorized - check your public key");
      } else if (response.status === 403) {
        console.log("🚨 ERROR: Forbidden - check your EmailJS account limits");
      }

      return false;
    }
  } catch (error) {
    console.log("❌ NETWORK ERROR:", error.message);
    console.log("🚨 This might be a connectivity issue or CORS problem");
    return false;
  }
}

// Test alternative template IDs
async function testAlternativeTemplates() {
  console.log("\n🔄 Testing alternative template approaches...");

  const alternativeTemplates = [
    "template_basic",
    "template_default",
    "template_contact",
    // Add more if you know them
  ];

  for (const templateId of alternativeTemplates) {
    console.log(`\n🧪 Testing template: ${templateId}`);

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: emailConfig.serviceId,
            template_id: templateId,
            user_id: emailConfig.publicKey,
            template_params: testData,
          }),
        }
      );

      if (response.ok) {
        console.log(`✅ SUCCESS: Template '${templateId}' works!`);
        console.log(`💡 Update your config to use templateId: "${templateId}"`);
        return templateId;
      } else {
        console.log(`❌ Template '${templateId}' failed: ${response.status}`);
      }
    } catch (error) {
      console.log(`❌ Template '${templateId}' error: ${error.message}`);
    }
  }

  return null;
}

// Run the tests
async function main() {
  console.log("🚀 EmailJS Configuration Test");
  console.log("=" * 50);

  const success = await testEmailJS();

  if (!success) {
    const workingTemplate = await testAlternativeTemplates();

    if (!workingTemplate) {
      console.log("\n💡 NEXT STEPS:");
      console.log("1. Visit https://dashboard.emailjs.com/admin/templates");
      console.log("2. Create a new template or note existing template IDs");
      console.log(
        "3. Update your email.config.js with the correct template ID"
      );
      console.log(
        "4. Make sure your EmailJS service is active and not exceeded limits"
      );
    }
  }
}

main().catch(console.error);
