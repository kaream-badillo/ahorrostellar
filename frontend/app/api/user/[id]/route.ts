import { NextRequest, NextResponse } from 'next/server';

const userProfiles: Record<string, any> = {};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;

    // Inicializar si no existe
    if (!userProfiles[userId]) {
      userProfiles[userId] = {
        wallet: userId,
        joinDate: new Date().toISOString(),
        totalStaked: 0,
        totalRewards: 0,
        projectsSupported: 0,
        successfulPredictions: 0,
        reputationScore: 0,
        attestations: [],
      };
    }

    const profile = userProfiles[userId];

    // Fetch attestations
    const attestationsResponse = await fetch(`${request.nextUrl.origin}/api/attest?userId=${userId}`);
    const attestations = (await attestationsResponse.json())?.attestations || [];

    const successful = attestations.filter((a: any) => a.status === 'approved').length;

    // Actualiza valores derivados
    profile.attestations = attestations;
    profile.successfulPredictions = successful;
    profile.reputationScore = successful * 10; // simbólico: 10 puntos por predicción acertada

    return NextResponse.json({
      user: profile,
      statistics: {
        totalStaked: profile.totalStaked,
        successfulPredictions: profile.successfulPredictions,
        reputationScore: profile.reputationScore,
        totalRewards: profile.totalRewards,
        projectsSupported: profile.projectsSupported
      }
    });

  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;
    const data = await request.json();

    if (!userProfiles[userId]) {
      userProfiles[userId] = {
        wallet: userId,
        joinDate: new Date().toISOString(),
        totalStaked: 0,
        totalRewards: 0,
        projectsSupported: 0,
        successfulPredictions: 0,
        reputationScore: 0,
        attestations: [],
      };
    }

    const profile = userProfiles[userId];

    // Actualiza solo campos relevantes
    if (data.totalStaked !== undefined) profile.totalStaked = data.totalStaked;
    if (data.totalRewards !== undefined) profile.totalRewards = data.totalRewards;
    if (data.projectsSupported !== undefined) profile.projectsSupported = data.projectsSupported;

    return NextResponse.json({
      success: true,
      user: profile,
      message: 'User profile updated'
    });

  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
