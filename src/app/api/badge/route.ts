import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for badges and reputation
let badges: any[] = [];
let reputation: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, badgeType, reason, projectId, amount } = body;

    // Validate required fields
    if (!userId || !badgeType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already has this badge type
    const existingBadge = badges.find(
      b => b.userId === userId && b.badgeType === badgeType
    );

    if (existingBadge) {
      return NextResponse.json(
        { error: 'User already has this badge' },
        { status: 409 }
      );
    }

    // Create badge
    const badge = {
      id: `badge_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      badgeType, // 'early_supporter', 'success_predictor', 'community_leader', etc.
      reason,
      projectId,
      timestamp: new Date().toISOString(),
      blockchainTxId: null
    };

    // Add to storage
    badges.push(badge);

    // Update reputation
    const reputationEntry = {
      id: `rep_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      badgeId: badge.id,
      amount: amount || 10, // Default reputation points
      reason: `Badge earned: ${badgeType}`,
      timestamp: new Date().toISOString()
    };

    reputation.push(reputationEntry);

    // Simulate blockchain transaction for badge
    const blockchainTxId = `stellar_badge_tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    badge.blockchainTxId = blockchainTxId;

    return NextResponse.json({
      success: true,
      badge,
      reputation: reputationEntry,
      message: 'Badge issued successfully'
    });

  } catch (error) {
    console.error('Error issuing badge:', error);
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

    let filteredBadges = badges;
    let filteredReputation = reputation;

    if (userId) {
      filteredBadges = filteredBadges.filter(b => b.userId === userId);
      filteredReputation = filteredReputation.filter(r => r.userId === userId);
    }

    // Calculate total reputation for user
    const totalReputation = filteredReputation.reduce((sum, r) => sum + r.amount, 0);

    return NextResponse.json({
      badges: filteredBadges,
      reputation: filteredReputation,
      totalReputation,
      total: filteredBadges.length
    });

  } catch (error) {
    console.error('Error fetching badges:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
