"use client";
import React from "react";
import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

interface AuthContextType {
  signup: (email: string, password: string) => Promise<{ id: string } | void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currUserData, setCurrUserData] = useState(null);

  const signup = async (email: string, password: string) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const id = user.uid;
        return { id };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ..
      });
  };

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("userdata jaja ", user);
      return unsubscribe;
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        const id = currentUser.uid;
        const response = await fetch(`/api/users?userId=${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCurrUserData(data[0]);
      }
    };
    fetchData();
  }, [currentUser]);

  const value: AuthContextType = {
    currentUser,
    currUserData,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
