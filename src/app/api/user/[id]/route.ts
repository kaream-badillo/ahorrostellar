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

    // Fetch attestations data (only remaining API)
    const attestationsResponse = await fetch(`${request.nextUrl.origin}/api/attest?userId=${userId}`);
    const attestationsData = await attestationsResponse.json();

    // Update user profile with latest data
    userProfile.successfulPredictions = attestationsData.attestations?.filter((a: any) => a.status === 'approved').length || 0;

    return NextResponse.json({
      user: userProfile,
      attestations: attestationsData.attestations || [],
      statistics: {
        successfulPredictions: userProfile.successfulPredictions
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
