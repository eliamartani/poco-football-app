import { findByValue } from '../find/';
import { getMatch } from '../match';
import { getResult } from '../result/';

export const getTableResult = (teams, weeksMatches) => {
  const tableResult = {};

  // create an empty array for each team
  for (const key in teams) {
    tableResult[teams[key]] = [];
  }

  for (const key in weeksMatches) {
    const matches = weeksMatches[key];

    for (const matchIndex in matches) {
      const result = matches[matchIndex];
      const match = getMatch(result);

      for (const teamIndex in result.teams) {
        const teamName = result.teams[teamIndex];
        const [indexTeam, indexOpponent] = findByValue(result.teams, teamName);
        const team = match[indexTeam];
        const opponent = match[indexOpponent];

        tableResult[teamName].push({
          team,
          opponent,
        });
      }
    }
  }

  return tableResult;
};

export const getTeamsResult = matchesPerTeam => {
  const teamsResult = [];

  for (const teamName in matchesPerTeam) {
    const matches = matchesPerTeam[teamName];
    const model = {
      drawn: 0,
      goals: 0,
      goalsConceded: 0,
      goalsDifference: 0,
      lost: 0,
      matches: 0,
      points: 0,
      teamId: matches[0].team.teamId,
      teamName,
      won: 0,
    };

    for (const matchIndex in matches) {
      const match = matches[matchIndex];
      const result = getResult(match.team, match.opponent);

      for (const key in result) {
        model[key] += result[key];
      }
    }

    teamsResult.push(model);
  }

  return teamsResult;
};

// TASK #4 - create a table of results
export const computeTable = (teams, weeksMatches) => {
  const matchesPerTeam = getTableResult(teams, weeksMatches);
  const teamsResult = getTeamsResult(matchesPerTeam);
  const orderedResult = teamsResult.sort((a, b) => {
    const byPoints = b.points - a.points;
    const byGoalsDifference = b.goalsDifference - a.goalsDifference;
    const byGoalsScored = b.goals - a.goals;

    return byPoints || byGoalsDifference || byGoalsScored;
  });

  return orderedResult;
};
