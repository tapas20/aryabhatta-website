import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  email?: unknown;
  message?: unknown;
  name?: unknown;
  phone?: unknown;
  class?: unknown;
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
    const studentClass = asText(body.class);

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required." },
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

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
        <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 24px; border-radius: 12px 12px 0 0;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">New Enquiry — BrightMind Academy</h2>
        </div>

        <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
          <p style="font-size: 15px; margin-bottom: 20px; color: #374151;">A new enquiry has been submitted from the website.</p>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 10px 0; width: 140px; color: #6b7280; border-bottom: 1px solid #f3f4f6;"><strong>Student Name:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${escapeHtml(email)}" style="color: #4F46E5;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;"><strong>Phone:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${escapeHtml(phone || "N/A")}</td></tr>
            ${studentClass ? `<tr><td style="padding: 10px 0; color: #6b7280; border-bottom: 1px solid #f3f4f6;"><strong>Class:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${escapeHtml(studentClass)}</td></tr>` : ""}
          </table>

          ${message ? `
          <h3 style="color: #4F46E5; font-size: 16px; margin-top: 20px; margin-bottom: 10px;">Message</h3>
          <div style="background-color: #f0f0ff; border-left: 4px solid #4F46E5; padding: 15px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #374151; border-radius: 0 8px 8px 0;">${escapeHtml(message)}</div>
          ` : ""}

          <div style="text-align: center; margin-top: 24px; color: #9ca3af; font-size: 12px;">
            This is an automated message from the BrightMind Academy website.
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"BrightMind Academy" <${smtp.from}>`,
      replyTo: email,
      to: smtp.recipient,
      subject: `New Enquiry from ${name}${studentClass ? ` — Class ${studentClass}` : ""}`,
      text: [
        `Student Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "N/A"}`,
        studentClass ? `Class: ${studentClass}` : "",
        "",
        "Message:",
        message || "(No message)",
      ].filter(Boolean).join("\n"),
      html: htmlBody,
    });

    // Auto-reply
    const autoReplyHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
        <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px;">BrightMind Academy</h2>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">Shaping Future Toppers</p>
        </div>

        <div style="border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; padding: 24px;">
          <p style="font-size: 15px; color: #374151;">Dear ${escapeHtml(name)},</p>
          <p style="font-size: 15px; color: #374151;">Thank you for your interest in BrightMind Academy! We have received your enquiry and our admissions team will get back to you within 24 hours.</p>

          ${message ? `
          <p style="font-size: 14px; color: #6b7280;">Your message:</p>
          <blockquote style="border-left: 4px solid #4F46E5; padding-left: 15px; margin-left: 0; color: #555; background-color: #f0f0ff; padding: 15px; font-style: italic; border-radius: 0 8px 8px 0;">
            ${escapeHtml(message)}
          </blockquote>
          ` : ""}

          <p style="font-size: 15px; color: #374151; margin-top: 20px;">Warm Regards,<br/><strong style="color: #4F46E5;">BrightMind Academy</strong><br/>
          <span style="font-size: 13px; color: #6b7280;">123 Education Lane, Bhubaneswar, Odisha<br/>Phone: +91 98765 43210</span></p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"BrightMind Academy" <${smtp.from}>`,
      to: email,
      subject: `Thank you for your enquiry — BrightMind Academy`,
      text: `Dear ${name},\n\nThank you for your interest in BrightMind Academy! We have received your enquiry and our admissions team will get back to you within 24 hours.\n\nWarm Regards,\nBrightMind Academy\n+91 98765 43210`,
      html: autoReplyHtml,
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
