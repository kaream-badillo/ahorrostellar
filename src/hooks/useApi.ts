import { useState } from 'react';

// Generic API hook for making requests
export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const makeRequest = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<T> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { makeRequest, loading, error };
};

// Hook for attestation operations
export const useAttestation = () => {
  const { makeRequest, loading, error } = useApi();

  const createAttestation = async (data: {
    projectId: string;
    userId: string;
    attestationType: string;
    evidence: string;
    validatorId?: string;
  }) => {
    return makeRequest('/api/attest', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  const getAttestations = async (params?: {
    projectId?: string;
    userId?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.projectId) searchParams.append('projectId', params.projectId);
    if (params?.userId) searchParams.append('userId', params.userId);

    const url = `/api/attest${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    return makeRequest(url);
  };

  return { createAttestation, getAttestations, loading, error };
};

// Hook for badge operations
export const useBadge = () => {
  const { makeRequest, loading, error } = useApi();

  const issueBadge = async (data: {
    userId: string;
    badgeType: string;
    reason?: string;
    projectId?: string;
    amount?: number;
  }) => {
    return makeRequest('/api/badge', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  const getBadges = async (userId?: string) => {
    const url = userId ? `/api/badge?userId=${userId}` : '/api/badge';
    return makeRequest(url);
  };

  return { issueBadge, getBadges, loading, error };
};

// Hook for interaction operations
export const useInteraction = () => {
  const { makeRequest, loading, error } = useApi();

  const recordInteraction = async (data: {
    userId: string;
    projectId: string;
    interactionType: string;
    amount?: number;
    blockchainTxId?: string;
  }) => {
    return makeRequest('/api/interaction', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  const getInteractions = async (params?: {
    userId?: string;
    projectId?: string;
    type?: string;
  }) => {
    const searchParams = new URLSearchParams();
    if (params?.userId) searchParams.append('userId', params.userId);
    if (params?.projectId) searchParams.append('projectId', params.projectId);
    if (params?.type) searchParams.append('type', params.type);

    const url = `/api/interaction${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    return makeRequest(url);
  };

  return { recordInteraction, getInteractions, loading, error };
};

// Hook for user operations
export const useUser = () => {
  const { makeRequest, loading, error } = useApi();

  const getUserProfile = async (userId: string) => {
    return makeRequest(`/api/user/${userId}`);
  };

  const updateUserProfile = async (userId: string, data: {
    username?: string;
    email?: string;
    university?: string;
  }) => {
    return makeRequest(`/api/user/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  };

  return { getUserProfile, updateUserProfile, loading, error };
};
