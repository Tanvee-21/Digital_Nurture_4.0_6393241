import React from 'react';

const ListOfPlayers = () => {
  const players = [
    { name: 'Virat', score: 98 },
    { name: 'Rohit', score: 45 },
    { name: 'Gill', score: 80 },
    { name: 'Ishan', score: 66 },
    { name: 'Hardik', score: 30 },
    { name: 'Jadeja', score: 75 },
    { name: 'Shreyas', score: 55 },
    { name: 'Surya', score: 90 },
    { name: 'Rahul', score: 62 },
    { name: 'Bumrah', score: 10 },
    { name: 'Shami', score: 28 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
