// src/utils/storage.ts

/**
 * Save a JWT token to localStorage
 * @param token - The authentication token to store
 */
export const saveToken = (token: string): void => {
    localStorage.setItem("token", token);
  };
  
  /**
   * Retrieve the saved token from localStorage
   * @returns The stored token or null if not found
   */
  export const getToken = (): string | null => {
    return localStorage.getItem("token");
  };
  
  /**
   * Remove the token from localStorage
   */
  export const clearToken = (): void => {
    localStorage.removeItem("token");
  };