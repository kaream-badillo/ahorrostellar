import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for user profiles
let userProfiles: any[] = [];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const userId = resolvedParams.id;

    // Get user profile
    let userProfile = userProfiles.find(u => u.id === userId);

    if (!userProfile) {
      // Create default profile if doesn't exist
      userProfile = {
        id: userId,
        username: `User_${userId.slice(-6)}`,
        email: '',
        university: '',
        joinDate: new Date().toISOString(),
        reputation: 0,
        badges: [],
        totalStaked: 0,
        projectsSupported: 0,
        successfulPredictions: 0
      };
      userProfiles.push(userProfile);
    }

    // Fetch related data from other endpoints
    const [badgesResponse, interactionsResponse, attestationsResponse] = await Promise.all([
      fetch(`${request.nextUrl.origin}/api/badge?userId=${userId}`),
      fetch(`${request.nextUrl.origin}/api/interaction?userId=${userId}`),
      fetch(`${request.nextUrl.origin}/api/attest?userId=${userId}`)
    ]);

    const badgesData = await badgesResponse.json();
    const interactionsData = await interactionsResponse.json();
    const attestationsData = await attestationsResponse.json();

    // Update user profile with latest data
    userProfile.badges = badgesData.badges || [];
    userProfile.reputation = badgesData.totalReputation || 0;
    userProfile.totalStaked = interactionsData.statistics?.totalStaked || 0;
    userProfile.projectsSupported = new Set(interactionsData.interactions?.map((i: any) => i.projectId) || []).size;
    userProfile.successfulPredictions = attestationsData.attestations?.filter((a: any) => a.status === 'approved').length || 0;

    return NextResponse.json({
      user: userProfile,
      badges: badgesData.badges || [],
      interactions: interactionsData.interactions || [],
      attestations: attestationsData.attestations || [],
      statistics: {
        totalReputation: userProfile.reputation,
        totalStaked: userProfile.totalStaked,
        projectsSupported: userProfile.projectsSupported,
        successfulPredictions: userProfile.successfulPredictions,
        totalInteractions: interactionsData.statistics?.totalInteractions || 0
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
    const resolvedParams = await params;
    const userId = resolvedParams.id;
    const body = await request.json();
    const { username, email, university } = body;

    // Find or create user profile
    let userProfile = userProfiles.find(u => u.id === userId);

    if (!userProfile) {
      userProfile = {
        id: userId,
        username: `User_${userId.slice(-6)}`,
        email: '',
        university: '',
        joinDate: new Date().toISOString(),
        reputation: 0,
        badges: [],
        totalStaked: 0,
        projectsSupported: 0,
        successfulPredictions: 0
      };
      userProfiles.push(userProfile);
    }

    // Update profile fields
    if (username) userProfile.username = username;
    if (email) userProfile.email = email;
    if (university) userProfile.university = university;

    return NextResponse.json({
      success: true,
      user: userProfile,
      message: 'User profile updated successfully'
    });

  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
