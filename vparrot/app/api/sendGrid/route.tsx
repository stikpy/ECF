import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

const sendEmailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

async function sendEmail(data: { name: string; email: string; message: string; subject: string }) {
  const sendgridApiKey = "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";
  sgMail.setApiKey(sendgridApiKey);

  // const msg = {
  //   from: "contact@vparrot.online",
  //   to: "gabriel.khaldi@gmail.com",
  //   subject: `Message from ${data.name}`,
  //   html: `<strong>From:</strong> ${data.name} <br/><strong>Email:</strong> ${data.email}   <br/><strong>Sujet:</strong>${data.subject} <br/><strong>Message:</strong>${data.message}`,
  // };
  const msg = {
    from: "contact@vparrot.online",
    to: "gabriel.khaldi@gmail.com",
    templateId: 'd-a6a3e052e5ae411e850a368fd860a093',
    dynamic_template_data: {
      surname: data.name,
      email: data.email,
      name: data.subject,
      content: data.message,
    }
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate data with zod
    const parsedData = sendEmailSchema.safeParse(data);
    if (!parsedData.success) {
      return new NextResponse(JSON.stringify({ message: "Invalid input" }), { status: 400 });
    }

    const success = await sendEmail(parsedData.data);
    if (success) {
      return new NextResponse(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ message: 'Email sending failed' }), { status: 500 });
    }
  } catch (err) {
    return new NextResponse(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
