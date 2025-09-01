# useEmail

<!-- automd:badges color=yellow -->

[![npm version](https://img.shields.io/npm/v/use-email?color=yellow)](https://npmjs.com/package/use-email)
[![npm downloads](https://img.shields.io/npm/dm/use-email?color=yellow)](https://npm.chart.dev/use-email)

<!-- /automd -->

A unified TypeScript library for sending emails across multiple providers with a single, consistent interface. This package simplifies email sending operations by providing a seamless API that works regardless of your chosen email service provider.

## ✨ Features

- 🔄 Unified interface for multiple email providers
- 📘 Full TypeScript support for enhanced developer experience
- 🌐 Works with Node.js, Bun, Deno, and Cloudflare Workers
- 🔀 Easy to switch between providers without changing your code
- 🚀 Supports modern email providers
- ⚡ Lightweight and fast

## 📧 Supported Providers

1. [Resend](https://resend.com/)
2. [SendGrid](https://sendgrid.com/)
3. [Postmark](https://postmarkapp.com/)
4. [Plunk](https://useplunk.com/)
5. [Mailgun](https://www.mailgun.com/)
6. [Zeptomail (Zoho)](https://www.zoho.com/zeptomail/)
7. [Unsend](https://unsend.dev/) (Cloud & Self-Hosted)

## 📦 Installation

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install use-email

# npm
npm install use-email

# yarn
yarn add use-email

# pnpm
pnpm install use-email

# bun
bun install use-email

# deno
deno install use-email
```

<!-- /automd -->

## ⚙️ Configuration

Before using any provider, update your `.env` file with the credentials for the provider you will support:

```env
# Mailgun
MAILGUN_API_KEY=<TOKEN>
MAILGUN_DOMAIN=<DOMAIN>

# Plunk
PLUNK_API_TOKEN=<TOKEN>

# Postmark
POSTMARK_SERVER_TOKEN=<TOKEN>

# Resend
RESEND_API_TOKEN=<TOKEN>

# SendGrid
SENDGRID_API_KEY=<TOKEN>

# ZeptoMail
ZEPTOMAIL_API_KEY=<TOKEN>

# Unsend
UNSEND_API_TOKEN=<TOKEN>
UNSEND_API_URL=<https://app.unsend.dev/api/v1/emails> # Optional: use for self-hosted instances
```

## 🚀 Usage

### Basic Example

```typescript
import { useEmail } from "use-email";

const emailService = useEmail("resend"); // Choose your provider

await emailService.send({
  from: "sender@example.com",
  to: "recipient@example.com",
  subject: "Hello from use-email!",
  text: "This is a test email sent using use-email package.",
});
```

### Switching Providers

Easily switch between different email providers without changing your code:

```typescript
const resendService = useEmail("resend");
const sendgridService = useEmail("sendgrid");
const postmarkService = useEmail("postmark");
const plunkService = useEmail("plunk");
const mailgunService = useEmail("mailgun");
const zeptomailService = useEmail("zeptomail");
const unsendService = useEmail("unsend");
```

### Email Options

The `send` method accepts an `EmailOptions` object with the following properties:

```typescript
type EmailOptions = {
  from: string; // Sender email address
  to: string | string[]; // Recipient email address(es)
  subject: string; // Email subject
  html?: string; // HTML content of the email (optional)
  text?: string; // Plain text content of the email (optional)
};
```

### Error Handling

The package throws errors for common issues such as missing API keys or required email fields. Always wrap your email sending code in a try-catch block:

```typescript
try {
  await emailService.send({
    from: "sender@example.com",
    to: "recipient@example.com",
    subject: "Test Email",
    text: "This is a test.",
  });
  console.log("Email sent successfully");
} catch (error) {
  console.error("Failed to send email:", error);
}
```

## 📘 TypeScript Support

This package is written in TypeScript and provides type definitions out of the box. You'll get full IntelliSense and type checking when using it in a TypeScript project.

## 📥 Import Methods

**ESM** (Node.js, Bun)

```javascript
import { useEmail } from "use-email";
```

**CommonJS** (Legacy Node.js)

```javascript
const { useEmail } = require("use-email");
```

**CDN** (Deno, Bun and Browsers)

```javascript
import { useEmail } from "https://esm.sh/use-email";
```

## 📚 API Reference

### `useEmail(provider: EmailProvider)`

Creates an email service instance for the specified provider.

**Parameters:**

- `provider`: One of `"resend"` | `"sendgrid"` | `"postmark"` | `"plunk"` | `"mailgun"` | `"zeptomail"` | `"unsend"`

**Returns:**

- An email service instance with a `send` method

### `send(options: EmailOptions)`

Sends an email using the configured provider.

**Parameters:**

- `options`: [EmailOptions](#email-options) object with the following properties:
  ```typescript
  type EmailOptions = {
    from: string; // Sender email address
    to: string | string[]; // Recipient email address(es)
    subject: string; // Email subject
    html?: string; // HTML content of the email (optional)
    text?: string; // Plain text content of the email (optional)
  };
  ```

**Returns:**

- A Promise that resolves when the email is sent successfully

**Example:**

```typescript
const emailService = useEmail("resend");

try {
  await emailService.send({
    from: "noreply@yourdomain.com",
    to: ["user@example.com", "another@example.com"],
    subject: "Welcome!",
    html: "<h1>Welcome to our service!</h1>",
    text: "Welcome to our service!",
  });
} catch (error) {
  console.error("Failed to send email:", error);
}
```

## 🛠️ Development

<details>

<summary>Local Development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## 📄 License

Published under the [MIT](./LICENSE) license.
Made by [community](https://github.com/SupersaasHQ/useEmail/graphs/contributors) 💛

<br><br>
<a href="https://github.com/SupersaasHQ/useEmail/graphs/contributors">
<img src="https://contrib.rocks/image?repo=SupersaasHQ/useEmail" />
</a>
