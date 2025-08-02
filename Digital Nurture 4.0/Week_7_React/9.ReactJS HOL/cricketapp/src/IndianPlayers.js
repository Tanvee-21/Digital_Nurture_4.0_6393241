import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Virat', 'Gill', 'Hardik', 'Shreyas', 'Rahul'];
  const evenTeam = ['Rohit', 'Ishan', 'Jadeja', 'Surya', 'Bumrah', 'Shami'];

  const [captain, viceCaptain, ...restOdd] = oddTeam;
  const [keeper, ...restEven] = evenTeam;

  const T20players = ['Virat', 'Rohit', 'Surya'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Saha'];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>Captain: {captain}</li>
        <li>Vice Captain: {viceCaptain}</li>
        {restOdd.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>Wicket Keeper: {keeper}</li>
        {restEven.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged T20 and Ranji Trophy Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
