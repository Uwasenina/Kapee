// AuthContext.tsx - Updated logout function
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface User {
  _id: string;
  email: string;
  fullName?: string;
  role?: string;
  userRole?: string;
  username?: string;
}

interface AuthContextType {
 isAuthenticated: boolean;
  user: User | null;
  login: (token: string, userData: User) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing authentication on app start
  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('accessToken');
        const userKey = localStorage.getItem('userKey');
        
        console.log('🔍 AuthContext: Checking existing auth...');
        console.log('Token exists:', !!token);
        console.log('UserKey exists:', !!userKey);
        
        if (token && userKey) {
          const userData = JSON.parse(userKey);
          console.log('✅ AuthContext: Restoring user session:', userData.email);
          
          setUser({
            _id: userData._id || userData.id,
            email: userData.email,
            fullName: userData.fullName,
            role: userData.userRole || userData.role,
            userRole: userData.userRole || userData.role,
            username: userData.username
          });
          setIsAuthenticated(true);
        } else {
          console.log('❌ AuthContext: No valid session found');
        }
      } catch (error) {
        console.error('❌ AuthContext: Error checking auth:', error);
        // Clear corrupted data
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userKey');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = (token: string, userData: User) => {
    console.log('✅ AuthContext: Login called with:', userData.email);
    
    // Store token and user data
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userKey', JSON.stringify({
      _id: userData._id,
      id: userData._id,
      email: userData.email,
      fullName: userData.fullName,
      username: userData.username,
      userRole: userData.role || userData.userRole,
      role: userData.role || userData.userRole
    }));
    
    setUser(userData);
    setIsAuthenticated(true);
    
    console.log('✅ AuthContext: Login complete, isAuthenticated:', true);
  };

  const logout = () => {
    console.log('🔄 AuthContext: Logout called');
    
    // Clear all authentication data
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userKey');
    
    // Also clear any other auth-related items that might exist
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Reset state
    setUser(null);
    setIsAuthenticated(false);
    
    console.log('✅ AuthContext: Logout complete, all data cleared');
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout,
    loading
  };

  // Debug logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🔍 AuthContext state:', { 
      isAuthenticated, 
      userEmail: user?.email,
      userRole: user?.role || user?.userRole,
      loading 
    });
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};