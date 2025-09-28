// API Client for AhorroStellar
import { STELLAR_CONFIG } from '@/lib/utils/constants';

export class ApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'GET',
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Stellar specific methods
  async getStellarAccount(publicKey: string) {
    return this.get(`/stellar/account/${publicKey}`);
  }

  async getStellarTransactions(publicKey: string, limit = 10) {
    return this.get(`/stellar/transactions/${publicKey}?limit=${limit}`);
  }

  async simulateTransaction(transaction: any) {
    return this.post('/stellar/simulate', { transaction });
  }

  // Project methods
  async getProjects(filters?: any) {
    const queryParams = new URLSearchParams(filters).toString();
    return this.get(`/projects?${queryParams}`);
  }

  async getProject(id: string) {
    return this.get(`/projects/${id}`);
  }

  async createProject(project: any) {
    return this.post('/projects', project);
  }

  async updateProject(id: string, project: any) {
    return this.put(`/projects/${id}`, project);
  }

  async deleteProject(id: string) {
    return this.delete(`/projects/${id}`);
  }

  // User methods
  async getUser(id: string) {
    return this.get(`/users/${id}`);
  }

  async updateUser(id: string, user: any) {
    return this.put(`/users/${id}`, user);
  }

  // Stake methods
  async getStakes(userId: string) {
    return this.get(`/stakes?userId=${userId}`);
  }

  async createStake(stake: any) {
    return this.post('/stakes', stake);
  }

  async updateStake(id: string, stake: any) {
    return this.put(`/stakes/${id}`, stake);
  }

  async deleteStake(id: string) {
    return this.delete(`/stakes/${id}`);
  }

  // Oracle methods
  async getPrices() {
    return this.get('/oracle/prices');
  }

  async getPrice(asset: string) {
    return this.get(`/oracle/prices/${asset}`);
  }
}

// Singleton instance
export const apiClient = new ApiClient();

// Export individual methods for convenience
export const {
  get,
  post,
  put,
  delete: deleteRequest,
  getStellarAccount,
  getStellarTransactions,
  simulateTransaction,
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getUser,
  updateUser,
  getStakes,
  createStake,
  updateStake,
  deleteStake,
  getPrices,
  getPrice
} = apiClient;
