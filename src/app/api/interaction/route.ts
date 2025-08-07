import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for interactions and staking
let interactions: any[] = [];
let stakingRecords: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, projectId, interactionType, amount, blockchainTxId } = body;

    // Validate required fields
    if (!userId || !projectId || !interactionType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create interaction record
    const interaction = {
      id: `interaction_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      projectId,
      interactionType, // 'stake', 'vote', 'view', 'share'
      amount,
      blockchainTxId,
      timestamp: new Date().toISOString()
    };

    // Add to storage
    interactions.push(interaction);

    // If it's a staking interaction, create staking record
    if (interactionType === 'stake' && amount) {
      const stakingRecord = {
        id: `stake_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        userId,
        projectId,
        amount,
        blockchainTxId,
        status: 'active', // 'active', 'released', 'rewarded'
        timestamp: new Date().toISOString(),
        releaseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days
      };

      stakingRecords.push(stakingRecord);
    }

    return NextResponse.json({
      success: true,
      interaction,
      message: 'Interaction recorded successfully'
    });

  } catch (error) {
    console.error('Error recording interaction:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const projectId = searchParams.get('projectId');
    const interactionType = searchParams.get('type');

    let filteredInteractions = interactions;
    let filteredStaking = stakingRecords;

    if (userId) {
      filteredInteractions = filteredInteractions.filter(i => i.userId === userId);
      filteredStaking = filteredStaking.filter(s => s.userId === userId);
    }

    if (projectId) {
      filteredInteractions = filteredInteractions.filter(i => i.projectId === projectId);
      filteredStaking = filteredStaking.filter(s => s.projectId === projectId);
    }

    if (interactionType) {
      filteredInteractions = filteredInteractions.filter(i => i.interactionType === interactionType);
    }

    // Calculate statistics
    const totalStaked = filteredStaking.reduce((sum, s) => sum + s.amount, 0);
    const activeStakes = filteredStaking.filter(s => s.status === 'active');
    const totalInteractions = filteredInteractions.length;

    return NextResponse.json({
      interactions: filteredInteractions,
      stakingRecords: filteredStaking,
      statistics: {
        totalStaked,
        activeStakes: activeStakes.length,
        totalInteractions
      },
      total: filteredInteractions.length
    });

  } catch (error) {
    console.error('Error fetching interactions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
