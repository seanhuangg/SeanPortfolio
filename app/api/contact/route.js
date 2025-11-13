import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend({ apiKey: process.env.RESEND_API_KEY });


export async function POST(request) {
  const body = await request.json();

  const { firstName, lastName, email, phone, message } = body;

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sean.huang@torontomu.ca",
      subject: `New Contact Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
