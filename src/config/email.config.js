// EmailJS Configuration

export const emailConfig = {
  serviceId: "service_rfknbuc",
  templateId: "template_gtmnj8h",
  autoReplyId: "template_f4gd71d",
  publicKey: "yK6rOh_8CjuN9291T",
  recipientEmail: "mohammed@azab.io",
};

// Fallback configuration with basic template
export const fallbackEmailConfig = {
  serviceId: "service_rfknbuc",
  templateId: "template_basic", // You may need to create this basic template
  publicKey: "yK6rOh_8CjuN9291T",
  recipientEmail: "mohammed@azab.io",
};

export const templateVars = {
  fromName: "name",
  fromEmail: "email",
  subject: "subject",
  message: "message",
  toEmail: "email",
};
