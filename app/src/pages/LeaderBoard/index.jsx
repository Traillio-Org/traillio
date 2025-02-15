import React, { useState } from 'react';
import { Trophy, Star, TrendingUp, Award, Crown, Target, Clock, GitBranch } from 'lucide-react';

const LeaderboardCard = ({ rank, user, score, change, contests, maxRating, college }) => {
  const getRankColor = (rank) => {
    if (rank === 1) return "from-yellow-400 to-amber-600";
    if (rank === 2) return "from-gray-300 to-gray-400";
    if (rank === 3) return "from-amber-700 to-amber-800";
    return "from-blue-600 to-purple-600";
  };

  const getChangeColor = (change) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
      transform hover:-translate-y-1 transition-all duration-300">
      {/* Rank Badge */}
      <div className={`absolute -top-3 -left-3 w-16 h-16 bg-gradient-to-br ${getRankColor(rank)} 
        rounded-br-2xl flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
        <span className="text-white font-bold text-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
          #{rank}
        </span>
      </div>
      
      <div className="p-6 pl-16">
        <div className="flex items-center justify-between">
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
              <img
                src={`/api/placeholder/100/100`}
                alt={user}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{user}</h3>
              <p className="text-sm text-gray-600">{college}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-sm text-gray-600">Score</p>
              <p className="font-bold text-lg text-blue-600">{score}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Change</p>
              <p className={`font-bold ${getChangeColor(change)}`}>
                {change > 0 ? '+' : ''}{change}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Trophy className="w-4 h-4 mr-1 text-amber-500" />
              <span>{contests} contests</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              <span>{maxRating} max rating</span>
            </div>
          </div>
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-1 text-blue-500" />
            <span>Top {Math.round(rank/100 * 100)}%</span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

const CompetitiveProgrammingLeaderboard = () => {
  const [timeFrame, setTimeFrame] = useState('weekly');
  
  const leaderboardData = [
    {
      rank: 1,
      user: "Sarafaraj Nasardi",
      college: "Nit Agartala",
      score: 850,
      change: +15,
      contests: 12,
      maxRating: 1304
    },
    {
      rank: 2,
      user: "Sakina Khan",
      college: "Nit Agartala",
      score: 790,
      change: -3,
      contests: 16,
      maxRating: 1130
    },
    {
      rank: 3,
      user: "Nikunj Chauhan",
      college: "Nit Agartala",
      score: 750,
      change: +17,
      contests: 8,
      maxRating: 910
    },
    {
      rank: 4,
      user: "Satyam Kesarwani",
      college: "Nit Agartala",
      score: 740,
      change: +25,
      contests: 6,
      maxRating: 840
    },
    {
      rank: 5,
      user: "Sayan Jyoti Das",
      college: "NIT Trichy",
      score: 660,
      change: -8,
      contests: 5,
      maxRating: 790
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent mb-6 transform hover:scale-105 transition-all duration-300">
            Competitive Programming
            <br />
            Leaderboard
          </h1>
          
          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Total Participants</p>
              <p className="text-2xl font-bold text-gray-800">100</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">My Ranking</p>
              <p className="text-2xl font-bold text-gray-800">86,400</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <GitBranch className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">Problems Solved</p>
              <p className="text-2xl font-bold text-gray-800">124</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Crown className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">My Rating</p>
              <p className="text-2xl font-bold text-gray-800">980</p>
            </div>
          </div>
        </div>

        {/* Time Frame Selector */}
        <div className="flex justify-center mb-8 space-x-4">
          {['weekly', 'monthly',].map((time) => (
            <button
              key={time}
              onClick={() => setTimeFrame(time)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 
                ${timeFrame === time 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
            >
              {time.charAt(0).toUpperCase() + time.slice(1)}
            </button>
          ))}
        </div>

        {/* Leaderboard List */}
        <div className="space-y-4">
          {leaderboardData.map((item) => (
            <LeaderboardCard key={item.rank} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgrammingLeaderboard;