import React, { createContext, useReducer } from "react";

const initialState = {
  user: {
    name: "EcoLearner",
    level: 3,
    xp: 350,
    xpToNext: 150,
    totalXP: 1250,
    ecoPoints: 1245,
    badges: ["first-quiz", "climate-champion", "recycling-expert"],
    coursesCompleted: ["climate-basics", "recycling-fundamentals"],
    streak: 7,
    rank: 23,
    quizzesCompleted: 12,
    accuracyRate: 85,
  },
  achievements: [
    {
      id: "first-quiz",
      title: "First Steps",
      description: "Complete your first quiz",
      icon: "🌱",
      unlocked: true,
    },
    {
      id: "climate-champion",
      title: "Climate Champion",
      description: "Master climate change basics",
      icon: "🌍",
      unlocked: true,
    },
    {
      id: "recycling-expert",
      title: "Recycling Expert",
      description: "Complete recycling course",
      icon: "♻️",
      unlocked: true,
    },
    {
      id: "streak-master",
      title: "Streak Master",
      description: "Maintain a 30-day streak",
      icon: "🔥",
      unlocked: false,
      progress: 7,
      maxProgress: 30,
    },
    {
      id: "knowledge-seeker",
      title: "Knowledge Seeker",
      description: "Complete 10 courses",
      icon: "📚",
      unlocked: false,
      progress: 2,
      maxProgress: 10,
    },
    {
      id: "eco-guardian",
      title: "Eco Guardian",
      description: "Reach level 10",
      icon: "🛡️",
      unlocked: false,
      progress: 3,
      maxProgress: 10,
    },
  ],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_XP": {
      //   const newXP = state.user.xp + action.payload;
      const newLevel =
        Math.floor((state.user.totalXP + action.payload) / 500) + 1;
      const xpForCurrentLevel = (newLevel - 1) * 500;
      const xpInCurrentLevel =
        state.user.totalXP + action.payload - xpForCurrentLevel;
      const xpToNext = 500 - xpInCurrentLevel;

      return {
        ...state,
        user: {
          ...state.user,
          xp: xpInCurrentLevel,
          level: newLevel,
          xpToNext,
          totalXP: state.user.totalXP + action.payload,
        },
      };
    }

    case "ADD_ECO_POINTS":
      return {
        ...state,
        user: {
          ...state.user,
          ecoPoints: state.user.ecoPoints + action.payload,
        },
      };

    case "COMPLETE_COURSE":
      return {
        ...state,
        user: {
          ...state.user,
          coursesCompleted: [...state.user.coursesCompleted, action.payload],
        },
      };

    case "COMPLETE_QUIZ":
      return {
        ...state,
        user: {
          ...state.user,
          quizzesCompleted: state.user.quizzesCompleted + 1,
        },
      };

    case "UNLOCK_ACHIEVEMENT":
      return {
        ...state,
        user: {
          ...state.user,
          badges: [...state.user.badges, action.payload],
        },
        achievements: state.achievements.map((achievement) =>
          achievement.id === action.payload
            ? { ...achievement, unlocked: true }
            : achievement
        ),
      };

    default:
      return state;
  }
};

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
