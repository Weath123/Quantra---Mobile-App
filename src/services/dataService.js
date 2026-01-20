import axios from 'axios';

// Base API configuration
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your actual API

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Pull/Fetch all information from the server
 * This function retrieves data from the backend API
 */
export const pullAllInformation = async () => {
  try {
    const response = await apiClient.get('/posts');
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error pulling information:', error);
    return {
      success: false,
      error: error.message || 'Failed to pull information',
    };
  }
};

/**
 * Pull specific item by ID
 */
export const pullItemById = async (id) => {
  try {
    const response = await apiClient.get(`/posts/${id}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error pulling item:', error);
    return {
      success: false,
      error: error.message || 'Failed to pull item',
    };
  }
};

/**
 * Pull user information
 */
export const pullUserInfo = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error pulling user info:', error);
    return {
      success: false,
      error: error.message || 'Failed to pull user information',
    };
  }
};

/**
 * Pull data with custom endpoint
 */
export const pullCustomData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error pulling custom data:', error);
    return {
      success: false,
      error: error.message || 'Failed to pull custom data',
    };
  }
};

export default {
  pullAllInformation,
  pullItemById,
  pullUserInfo,
  pullCustomData,
};
