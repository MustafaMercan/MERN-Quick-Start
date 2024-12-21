import ApiClient from "../config/axiosConfig";

const AuthService = {
    login: async (user) => {
      try {
        const response = await ApiClient.post('/auth/login', user);
        return response.data;
      } catch (error) {
        console.error('Login error:', error);
        throw error.response?.data || 'Login failed!';
      }
    },
  
    logout: async () => {
      try {
        const response = await ApiClient.post('/auth/logout');
        return response.data;
      } catch (error) {
        console.error('Logout error:', error);
        throw error.response?.data || 'Logout failed!';
      }
    },
  
    getCurrentUser: async () => {
      try {
        const response = await ApiClient.get('/auth/me');
        return response.data;
      } catch (error) {
        console.error('Get current user error:', error);
        throw error.response?.data || 'Failed to fetch user!';
      }
    },
  };