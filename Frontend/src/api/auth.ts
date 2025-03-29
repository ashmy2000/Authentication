// src/api/auth.ts

import axios from "axios";

/**
 * Base URL for all authentication requests.
 * Pulled from environment variable: REACT_APP_API_BASE_URL
 */
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Sends a signup request to the backend.
 *
 * @param username - The desired username for the new account
 * @param email - The user's email address
 * @param password - The user's password
 * @returns Axios POST Promise with server response
 */
export const signup = (username: string, email: string, password: string) => {
  return axios.post(`${BASE_URL}/signup`, { username, email, password });
};

/**
 * Sends a login request to the backend.
 *
 * @param email - The user's email address
 * @param password - The user's password
 * @returns Axios POST Promise with server response
 */
export const login = (email: string, password: string) => {
  return axios.post(`${BASE_URL}/login`, { email, password });
};