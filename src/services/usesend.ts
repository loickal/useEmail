import { ofetch as $fetch } from "ofetch";
import type { EmailOptions } from "../types/email-options";
import type { EmailService } from "../types/email-service";

/**
 * Email service implementation for Usesend
 */
export class UsesendService implements EmailService {
  private apiToken: string;
  private apiUrl: string;

  constructor(apiToken?: string, apiUrl?: string) {
    this.apiToken = apiToken || process.env.USESEND_API_TOKEN || "";
    this.apiUrl = apiUrl || process.env.USESEND_API_URL || "https://app.usesend.com/api/v1/emails";
  }

  async send(emailOptions: EmailOptions): Promise<void> {
    if (!this.apiToken) {
      throw new Error("Usesend API token is missing");
    }

    const { to, from, subject, text, html } = emailOptions;
    if (!to || !from || (!text && !html)) {
      throw new Error("Required email fields are missing");
    }

    const payload = {
      to: Array.isArray(to) ? to : [to],
      from,
      subject,
      html: html || undefined,
      text: text || undefined,
    };

    try {
      const response = await $fetch(this.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiToken}`,
        },
        body: JSON.stringify(payload),
      });
      return response;
    } catch (error) {
      console.error("Failed to send email with Usesend:", error);
      throw new Error("Email sending failed with Usesend");
    }
  }
}
