import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState([]);
  const [level, setLevel] = useState(1);

  const addPoints = (amount) => {
    setPoints(prevPoints => prevPoints + amount);
    // Logic to check for level up and trigger setLevel
  };

  const unlockBadge = (badgeId) => {
    if (!badges.includes(badgeId)) {
      setBadges(prevBadges => [...prevBadges, badgeId]);
    }
  };

  const value = {
    points,
    badges,
    level,
    addPoints,
    unlockBadge,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};