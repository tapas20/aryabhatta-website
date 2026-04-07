import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

type ContactPayload = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  phone?: unknown;
};

type MailerError = Error & {
  code?: string;
  command?: string;
  response?: string;
  responseCode?: number;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSmtpConfig() {
  const {
    CONTACT_RECIPIENT,
    MAIL_FROM_EMAIL,
    SMTP_HOST,
    SMTP_PASS,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("Missing SMTP environment variables");
  }

  const port = Number.parseInt(SMTP_PORT, 10);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a valid positive integer");
  }

  return {
    from: MAIL_FROM_EMAIL || SMTP_USER,
    host: SMTP_HOST,
    port,
    recipient: CONTACT_RECIPIENT || SMTP_USER,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    user: SMTP_USER,
    pass: SMTP_PASS,
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = asText(body.name);
    const email = asText(body.email);
    const phone = asText(body.phone);
    const message = asText(body.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const smtp = getSmtpConfig();
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });

    const logoPath = path.join(process.cwd(), "public/assets/alsyed-logo.png");
    let logoAttachment = null;
    if (fs.existsSync(logoPath)) {
      logoAttachment = {
        filename: "alsyed-logo.png",
        path: logoPath,
        cid: "alsyedlogo",
      };
    }

    const signatureHtml = `
      <div style="background: linear-gradient(145deg, #111827 0%, #0f2318 100%); padding: 24px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; width: 100%; max-width: 600px; box-sizing: border-box; margin-top: 40px; border-radius: 12px; border: 1px solid #1e3a28;">

        <!-- Header: Name + Logo -->
        <table style="width: 100%; border-collapse: collapse; border: none;">
          <tr>
            <td style="vertical-align: top; padding-right: 12px;">
              <div style="border-left: 4px solid #22c55e; padding-left: 12px;">
                <div style="color: #4ade80; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; line-height: 1.2;">Al Syed Group</div>
                <div style="color: #86efac; font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 3px;">Customer Support &amp; Operations</div>
              </div>
            </td>
            <td style="vertical-align: middle; text-align: right; width: 70px;">
              <img src="cid:alsyedlogo" alt="Al Syed Group" style="width: 60px; height: auto; display: block; margin-left: auto; filter: brightness(0) invert(1) opacity(0.9);" />
            </td>
          </tr>
        </table>

        <!-- Contact Details -->
        <table style="border-collapse: collapse; border: none; font-size: 13px; color: #e5e7eb; line-height: 1.7; margin-top: 18px; width: 100%;">
          <tr>
            <td style="padding: 4px 12px 4px 0; vertical-align: middle; width: 36px;">
              <table style="border-collapse: collapse; border: none;"><tr><td style="background-color: #16a34a; border-radius: 50%; width: 28px; height: 28px; text-align: center; vertical-align: middle; font-size: 14px; color: #ffffff; font-weight: bold; line-height: 28px;">&#9990;</td></tr></table>
            </td>
            <td style="padding: 4px 0; font-weight: 500; color: #f9fafb;">0567220786</td>
          </tr>
          <tr>
            <td style="padding: 4px 12px 4px 0; vertical-align: middle;">
              <table style="border-collapse: collapse; border: none;"><tr><td style="background-color: #16a34a; border-radius: 50%; width: 28px; height: 28px; text-align: center; vertical-align: middle; font-size: 14px; color: #ffffff; font-weight: bold; line-height: 28px;">&#9743;</td></tr></table>
            </td>
            <td style="padding: 4px 0; font-weight: 500; color: #f9fafb;">0536649777</td>
          </tr>
          <tr>
            <td style="padding: 4px 12px 4px 0; vertical-align: middle;">
              <table style="border-collapse: collapse; border: none;"><tr><td style="background-color: #16a34a; border-radius: 50%; width: 28px; height: 28px; text-align: center; vertical-align: middle; font-size: 14px; color: #ffffff; font-weight: bold; line-height: 28px;">&#9993;</td></tr></table>
            </td>
            <td style="padding: 4px 0;"><a href="mailto:info@alsyedgroup.net" style="color: #4ade80; text-decoration: none; font-weight: 500;">info@alsyedgroup.net</a></td>
          </tr>
        </table>

        <!-- Separator -->
        <div style="margin: 18px 0; border-top: 1px solid rgba(255,255,255,0.15);"></div>

        <!-- Footer: Social + Website stacked above Tagline -->
        <table style="width: 100%; border-collapse: collapse; border: none; font-size: 13px;">
          <tr>
            <td style="padding-bottom: 10px; vertical-align: middle;">
              <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0; border: none; mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-table; width: auto !important; table-layout: auto;">
                <tr style="font-size: 0; line-height: 0;">
                  <td width="32" style="padding: 0 3px 0 0 !important; margin: 0; line-height: 0; font-size: 0;">
                    <a href="https://x.com/alsyedgroup" target="_blank" style="text-decoration: none; display: block; line-height: 0; font-size: 0;">
                      <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0; width: 32px; height: 32px;"><tr><td style="background-color: #16a34a; border-radius: 6px; width: 32px; height: 32px; min-width: 32px; min-height: 32px; text-align: center; vertical-align: middle; padding: 0; overflow: hidden;">
                        <span style="color: #ffffff; font-weight: 800; font-family: Arial, sans-serif; font-size: 13px; line-height: 32px; display: block;">X</span>
                      </td></tr></table>
                    </a>
                  </td>
                  <td width="32" style="padding: 0 !important; margin: 0; line-height: 0; font-size: 0;">
                    <a href="https://www.linkedin.com/company/alsyedgroup/" target="_blank" style="text-decoration: none; display: block; line-height: 0; font-size: 0;">
                      <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0; width: 32px; height: 32px;"><tr><td style="background-color: #16a34a; border-radius: 6px; width: 32px; height: 32px; min-width: 32px; min-height: 32px; text-align: center; vertical-align: middle; padding: 0; overflow: hidden;">
                        <span style="color: #ffffff; font-weight: 800; font-family: Arial, sans-serif; font-size: 13px; line-height: 32px; display: block;">in</span>
                      </td></tr></table>
                    </a>
                  </td>
                </tr>
              </table>
              <div style="padding-top: 8px; vertical-align: middle;">
                <a href="https://www.alsyedgroup.net" style="color: #4ade80; text-decoration: none; font-weight: 500; letter-spacing: 0.3px; font-size: 12px; white-space: nowrap; word-break: normal; display: inline-block;">www.alsyedgroup.net</a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span style="color: #4ade80; font-weight: 700; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;">Building a Sustainable Future</span>
            </td>
          </tr>
        </table>

      </div>
    `;

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
        <h2 style="color: #217145; margin-top: 0; font-size: 24px; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p style="font-size: 16px; margin-bottom: 24px;">You have received a new message from the contact form on your website.</p>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 8px 0; width: 100px; color: #666666; border-bottom: 1px solid #f0f0f0;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #666666; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${escapeHtml(email)}" style="color: #217145;">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666666; border-bottom: 1px solid #f0f0f0;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">${escapeHtml(phone || "N/A")}</td></tr>
        </table>
        
        <h3 style="color: #217145; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">Message</h3>
        <div style="background-color: #f4f8f5; border-left: 4px solid #217145; padding: 15px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
        
        ${signatureHtml}
        
        <div style="text-align: center; margin-top: 20px; color: #999999; font-size: 12px;">
          This is an automated message generated from your website's contact form.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"AlSyed Group Website" <${smtp.from}>`,
      replyTo: email,
      to: smtp.recipient,
      subject: `New Contact Form Submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: htmlBody,
      attachments: logoAttachment ? [logoAttachment] : [],
    });

    // Send the auto-reply email to the sender
    const autoReplyHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
        <p style="font-size: 16px; color: #333;">Dear ${escapeHtml(name)},</p>
        <p style="font-size: 16px; color: #333;">Thank you for contacting Al Syed Group. We have successfully received your inquiry and our dedicated customer support team will get back to you as soon as possible.</p>
        <p style="font-size: 16px; color: #333;">For your records, here is a copy of your message:</p>
        <blockquote style="border-left: 4px solid #185a32; padding-left: 15px; margin-left: 0; color: #555; background-color: #f4f8f5; padding: 15px; font-style: italic;">
          ${escapeHtml(message)}
        </blockquote>
        <br/>
        <p style="font-size: 16px; color: #333;">Best Regards,</p>
        ${signatureHtml}
      </div>
    `;

    await transporter.sendMail({
      from: `"Al Syed Group" <${smtp.from}>`,
      to: email,
      subject: `Thank you for contacting Al Syed Group`,
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest Regards,\nAl Syed Group`,
      html: autoReplyHtml,
      attachments: logoAttachment ? [logoAttachment] : [],
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    const mailerError = error as MailerError;
    const isGmailAuthError =
      process.env.SMTP_HOST === "smtp.gmail.com" &&
      (mailerError.code === "EAUTH" || mailerError.responseCode === 534);

    if (isGmailAuthError) {
      console.error(
        "SMTP authentication failed. Gmail requires a 16-character App Password in SMTP_PASS.",
      );

      return NextResponse.json(
        {
          success: false,
          message:
            process.env.NODE_ENV === "development"
              ? "SMTP authentication failed. Gmail requires a 16-character App Password in SMTP_PASS."
              : "Email service authentication failed. Please try again later.",
        },
        { status: 500 },
      );
    }

    console.error("Contact form delivery failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error && process.env.NODE_ENV === "development"
            ? error.message
            : "Failed to send email",
      },
      { status: 500 },
    );
  }
}
