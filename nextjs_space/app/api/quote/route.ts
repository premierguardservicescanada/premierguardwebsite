import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName,
      businessName,
      email,
      phone,
      serviceType,
      dateNeeded,
      hoursRequired,
      numberOfGuards,
      location,
      additionalNotes
    } = body ?? {}

    // Validate required fields
    if (!fullName || !email || !phone || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to database
    const quoteRequest = await prisma?.quoteRequest?.create({
      data: {
        fullName: fullName ?? '',
        businessName: businessName ?? null,
        email: email ?? '',
        phone: phone ?? '',
        serviceType: serviceType ?? '',
        dateNeeded: dateNeeded ?? null,
        hoursRequired: hoursRequired ?? null,
        numberOfGuards: numberOfGuards ?? null,
        location: location ?? null,
        additionalNotes: additionalNotes ?? null,
        status: 'new'
      }
    })

    return NextResponse.json(
      { success: true, id: quoteRequest?.id ?? '' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Quote request submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit quote request' },
      { status: 500 }
    )
  }
}
