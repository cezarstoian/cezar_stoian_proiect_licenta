import axios from "axios";
import { NextResponse } from "next/server";

interface MailjetEmail {
  From: {
    Email: string;
    Name: string;
  };
  To: { 
    Email: string; 
    Name: string 
  }[];
  Subject: string;
  TextPart: string;
}

// API to send an email via MAILJET
export async function POST(
  request: Request
) {
  try {
    const body = await request.json()
    const {
      subject,
      content,
      user
    } = body;

    const email: MailjetEmail = {
      From: {
        Email: 'cezarstoian@gmail.com',
        Name: 'Cezar Stoian',
      },
      To: [
        {
          Email: 'cezarstoian@gmail.com',
          Name: user.name,
        },
      ],
      Subject: subject,
      TextPart: content,
    };

    const response = await axios.post('https://api.mailjet.com/v3.1/send', {
      Messages: [email],
    }, {
      auth: {
        username: process.env.MAILJET_API_KEY || '',
        password: process.env.MAILJET_API_SECRET || '',
      },
    });

    
    return NextResponse.json(user)
  } catch (err) {
    console.log("Email sending error", err)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
