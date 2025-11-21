import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import Contact from '../../../../models/Contact';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    // Fetch all contacts, sorted by timestamp descending
    const contacts = await Contact.find({}).sort({ timestamp: -1 });

    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
