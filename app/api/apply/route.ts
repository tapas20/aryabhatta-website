import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

type ApplyPayload = {
  jobTitle?: string;
  jobReqId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  dob?: string;
  degree?: string;
  institution?: string;
  graduationYear?: string;
  employmentJobTitle?: string;
  companyName?: string;
  employmentPeriod?: string;
  resumeDriveLink?: string;
  coverDriveLink?: string;
  comments?: string;
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

function getStandardSignatureHtml() {
  return `
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
                      <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0; width: 32px; height: 32px;"><tr><td style="background-color: #16a34a; border-radius: 6px; width: 32px; height: 32px; min-width: 32px; min-height: 32px; text-align: center; vertical-align: middle; padding: 0; overflow: hidden;"><span style="color: #ffffff; font-weight: 800; font-family: Arial, sans-serif; font-size: 13px; line-height: 32px; display: block;">X</span></td></tr></table>
                    </a>
                  </td>
                  <td width="32" style="padding: 0 !important; margin: 0; line-height: 0; font-size: 0;">
                    <a href="https://www.linkedin.com/company/alsyedgroup/" target="_blank" style="text-decoration: none; display: block; line-height: 0; font-size: 0;">
                      <table cellspacing="0" cellpadding="0" style="border-collapse: collapse; border-spacing: 0; width: 32px; height: 32px;"><tr><td style="background-color: #16a34a; border-radius: 6px; width: 32px; height: 32px; min-width: 32px; min-height: 32px; text-align: center; vertical-align: middle; padding: 0; overflow: hidden;"><span style="color: #ffffff; font-weight: 800; font-family: Arial, sans-serif; font-size: 13px; line-height: 32px; display: block;">in</span></td></tr></table>
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
    const body = (await req.json()) as ApplyPayload;

    const jobTitle = asText(body.jobTitle);
    const jobReqId = asText(body.jobReqId);
    const firstName = asText(body.firstName);
    const middleName = asText(body.middleName);
    const lastName = asText(body.lastName);
    const fullName = [firstName, middleName, lastName]
      .filter(Boolean)
      .join(" ");
    const email = asText(body.email);
    const phone = asText(body.phone);

    if (!firstName || !email) {
      return NextResponse.json(
        { success: false, message: "First name and email are required." },
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

    const signatureHtml = getStandardSignatureHtml();

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
        <h2 style="color: #217145; margin-top: 0; font-size: 24px; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">New Job Application Received</h2>
        <p style="font-size: 16px; margin-bottom: 24px;">A new application has been submitted for the <strong>${escapeHtml(jobTitle)}</strong> role (Req ID: ${escapeHtml(jobReqId)}).</p>
        
        <h3 style="color: #217145; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">Personal Information</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 6px 0; width: 140px; color: #666666;"><strong>Name:</strong></td><td style="padding: 6px 0;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Email:</strong></td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #217145;">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Phone:</strong></td><td style="padding: 6px 0;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Address:</strong></td><td style="padding: 6px 0;">${escapeHtml(asText(body.address))}</td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Date of Birth:</strong></td><td style="padding: 6px 0;">${escapeHtml(asText(body.dob))}</td></tr>
        </table>
        
        <h3 style="color: #217145; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">Education & Qualifications</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 6px 0; width: 140px; color: #666666;"><strong>Degree:</strong></td><td style="padding: 6px 0;">${escapeHtml(asText(body.degree))}</td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Institution:</strong></td><td style="padding: 6px 0;">${escapeHtml(asText(body.institution))}</td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Graduation Year:</strong></td><td style="padding: 6px 0;">${escapeHtml(asText(body.graduationYear))}</td></tr>
        </table>
        
        <h3 style="color: #217145; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">Employment History</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 6px 0; width: 140px; color: #666666;"><strong>Job Title:</strong></td><td style="padding: 6px 0;">${escapeHtml(asText(body.employmentJobTitle))}</td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Company Name:</strong></td><td style="padding: 6px 0;">${escapeHtml(asText(body.companyName))}</td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Period:</strong></td><td style="padding: 6px 0;">${escapeHtml(asText(body.employmentPeriod))}</td></tr>
        </table>
        
        <h3 style="color: #217145; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">Drive Links</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr><td style="padding: 6px 0; width: 140px; color: #666666;"><strong>Resume:</strong></td><td style="padding: 6px 0;"><a href="${escapeHtml(asText(body.resumeDriveLink))}" style="color: #217145; text-decoration: underline;">View Resume</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666666;"><strong>Cover Letter:</strong></td><td style="padding: 6px 0;"><a href="${escapeHtml(asText(body.coverDriveLink))}" style="color: #217145; text-decoration: underline;">View Cover Letter</a></td></tr>
        </table>

        <h3 style="color: #217145; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">Comments</h3>
        <div style="background-color: #f4f8f5; border-left: 4px solid #217145; padding: 12px; font-style: italic; font-size: 15px;">
          ${escapeHtml(asText(body.comments)).replaceAll("\n", "<br />") || "<em>No comments provided.</em>"}
        </div>
        
        ${signatureHtml}

        <div style="text-align: center; margin-top: 20px; color: #999999; font-size: 12px;">
          This is an automated message generated from your website's contact form.
        </div>
      </div>
    `;

    const textBody = [
      `New Job Application Received`,
      `Job Role: ${jobTitle} (Req ID: ${jobReqId})`,
      ``,
      `-- Personal Information --`,
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Address: ${asText(body.address)}`,
      `Date of Birth: ${asText(body.dob)}`,
      ``,
      `-- Education & Qualifications --`,
      `Degree: ${asText(body.degree)}`,
      `Institution: ${asText(body.institution)}`,
      `Graduation Year: ${asText(body.graduationYear)}`,
      ``,
      `-- Employment History --`,
      `Job Title: ${asText(body.employmentJobTitle)}`,
      `Company Name: ${asText(body.companyName)}`,
      `Period: ${asText(body.employmentPeriod)}`,
      ``,
      `-- Drive Links & Comments --`,
      `Resume Drive Link: ${asText(body.resumeDriveLink)}`,
      `Cover Letter Drive Link: ${asText(body.coverDriveLink)}`,
      ``,
      `Comments:`,
      asText(body.comments),
    ].join("\n");

    await transporter.sendMail({
      from: `"AlSyed Group Website" <${smtp.from}>`,
      replyTo: email,
      to: smtp.recipient,
      subject: `New Job Application from ${fullName} for ${jobTitle}`,
      text: textBody,
      html: htmlBody,
      attachments: logoAttachment ? [logoAttachment] : [],
    });

    // Send auto-reply to applicant
    const autoReplyHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
        <p style="font-size: 16px; color: #333;">Dear ${escapeHtml(fullName)},</p>
        <p style="font-size: 16px; color: #333;">Thank you for applying for the <strong>${escapeHtml(jobTitle)}</strong> position at Al Syed Group. We have successfully received your application and our recruitment team will review your profile shortly.</p>
        <p style="font-size: 16px; color: #333;">If your qualifications match our current needs, we will reach out to you with next steps.</p>
        <br/>
        <p style="font-size: 16px; color: #333;">Best Regards,</p>
        ${signatureHtml}
      </div>
    `;

    await transporter.sendMail({
      from: `"Al Syed Group HR" <${smtp.from}>`,
      to: email,
      subject: `Application Received: ${jobTitle} at Al Syed Group`,
      text: `Dear ${fullName},\n\nThank you for applying for the ${jobTitle} position at Al Syed Group. We have received your application and will review it shortly.\n\nBest Regards,\nAl Syed Group HR`,
      html: autoReplyHtml,
      attachments: logoAttachment ? [logoAttachment] : [],
    });

    return NextResponse.json({
      success: true,
      message: "Application email sent successfully",
    });
  } catch (error) {
    console.error("Job application email delivery failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send application email" },
      { status: 500 },
    );
  }
}
