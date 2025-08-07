import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for attestations (in production, use a database)
let attestations: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, userId, attestationType, evidence, validatorId } = body;

    // Validate required fields
    if (!projectId || !userId || !attestationType || !evidence) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Rate limiting: check if user has already attested this project
    const existingAttestation = attestations.find(
      a => a.projectId === projectId && a.userId === userId
    );

    if (existingAttestation) {
      return NextResponse.json(
        { error: 'User has already attested this project' },
        { status: 409 }
      );
    }

    // Create attestation
    const attestation = {
      id: `attest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      projectId,
      userId,
      validatorId: validatorId || 'anonymous',
      attestationType, // 'success', 'adoption', 'funding', 'award'
      evidence,
      timestamp: new Date().toISOString(),
      status: 'pending', // 'pending', 'approved', 'rejected'
      blockchainTxId: null as string | null // Will be filled when onchain transaction is created
    };

    // Add to storage
    attestations.push(attestation);

    // Simulate blockchain transaction (in real implementation, this would create a Stellar transaction)
    const blockchainTxId = `stellar_tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    attestation.blockchainTxId = blockchainTxId;

    return NextResponse.json({
      success: true,
      attestation,
      message: 'Attestation created successfully'
    });

  } catch (error) {
    console.error('Error creating attestation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId');
    const userId = searchParams.get('userId');

    let filteredAttestations = attestations;

    if (projectId) {
      filteredAttestations = filteredAttestations.filter(a => a.projectId === projectId);
    }

    if (userId) {
      filteredAttestations = filteredAttestations.filter(a => a.userId === userId);
    }

    return NextResponse.json({
      attestations: filteredAttestations,
      total: filteredAttestations.length
    });

  } catch (error) {
    console.error('Error fetching attestations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
