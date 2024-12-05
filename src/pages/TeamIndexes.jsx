import React from "react";
import {
  europa_league_teams,
  epl_teams,
  la_liga_teams,
  bundesliga_teams,
  serie_a_teams,
  champions_league_teams,
  other_teams,
} from "../../public/fixtures";

function TeamIndexes() {
  const all_teams = [
    epl_teams,
    serie_a_teams,
    la_liga_teams,
    europa_league_teams,
    bundesliga_teams,
    champions_league_teams,
    other_teams,
  ];

  const handleTitle = (team) => {
    switch (team) {
      case "arsenal":
        return "English Premier League";
        break;

      default:
        break;
    }
  };
  return (
    <div className="min-h-screen">
      {all_teams.map((league) => {
        return (
          <section className="flex flex-wrap bg-gray-900 text-white m-3 p-2 rounded-md">
            {league.map((team) => {
              return (
                <section className="flex gap-1">
                  <h1>{handleTitle(team.name)}</h1>
                  <p className="">{team.index}</p>.
                  <p className="mr-2">{team.name}</p>
                </section>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}

export default TeamIndexes;
