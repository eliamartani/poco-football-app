import { Match, Matches, MatchResult, Team, TeamMatches, ValueRef } from "../interfaces";

export const findByValue = (teams: ValueRef[], value?: ValueRef) => {
  const indexTeam = value ? teams.indexOf(value) : -1;
  const indexOpponent = indexTeam === 0 ? 1 : 0;

  return [indexTeam, indexOpponent];
};

export const getMatch = ({ teams, teamIds, score }: Matches): Match[] => {
  const [nameTeam, nameOpponent] = teams;
  const [idTeam, idOpponent] = teamIds;
  const [scoreTeam, scoreOpponent] = score;
  const team: Match = {
    team: nameTeam,
    teamId: idTeam,
    score: scoreTeam,
    winner: scoreTeam > scoreOpponent,
  };
  const opponent: Match = {
    team: nameOpponent,
    teamId: idOpponent,
    score: scoreOpponent,
    winner: scoreOpponent > scoreTeam,
  };

  return [team, opponent];
};

// TASK #2 - make matches start at 1 instead of 0
export const setIndex = (index: ValueRef = "") => {
  const newIndex = Number(index);

  return isNaN(newIndex) ? 0 : newIndex - 1;
};

// TASK #3 - compute team stats
export const computeTeamStats = ({ id, results }: Team): MatchResult => {
  const idParsed = parseInt(id ?? "", 10);
  const model: any = {
    matches: 0,
    points: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goals: 0,
    goalsConceded: 0,
    goalsDifference: 0,
  };

  results?.forEach((result: Matches) => {
    const [indexTeam, indexOpponent] = findByValue(result.teamIds, idParsed);
    const match = getMatch(result);
    const team = match[indexTeam];
    const opponent = match[indexOpponent];
    const matchResult = getResult(team, opponent);

    for (const key in matchResult) {
      model[key] += matchResult[key as keyof MatchResult];
    }
  });

  return model;
};

export const getTableResult = (teams: string[], weeksMatches: Matches[][]): TeamMatches => {
  const tableResult: TeamMatches = {};

  // create an empty array for each team
  for (const key in teams) {
    tableResult[teams[key]] = [];
  }

  for (const matches of weeksMatches) {
    for (const result of matches) {
      const match = getMatch(result);

      for (const teamName of result.teams) {
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

export const getTeamsResult = (matchesPerTeam: TeamMatches): MatchResult[] => {
  const teamsResult: MatchResult[] = [];

  for (const teamName in matchesPerTeam) {
    const matches = matchesPerTeam[teamName];
    const model: any = {
      drawn: 0,
      goals: 0,
      goalsConceded: 0,
      goalsDifference: 0,
      lost: 0,
      matches: 0,
      points: 0,
      teamId: matches[0]?.team?.teamId,
      teamName,
      won: 0,
    };

    for (const match of matches) {
      const result = getResult(match.team, match.opponent);

      for (const key in result) {
        model[key] += result[key as keyof MatchResult];
      }
    }

    teamsResult.push(model);
  }

  return teamsResult;
};

// TASK #4 - create a table of results
export const computeTable = (teams: string[], weeksMatches: Matches[][]) => {
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

export const getResult = (team: Match, opponent: Match): MatchResult => {
  const won = team.score > opponent.score ? 1 : 0;
  const drawn = team.score === opponent.score ? 1 : 0;
  const lost = team.score < opponent.score ? 1 : 0;
  const points = won * 3 || drawn;
  const result = {
    matches: 1,
    points,
    won,
    drawn,
    lost,
    goals: team.score,
    goalsConceded: opponent.score,
    goalsDifference: team.score - opponent.score,
  };

  return result;
};
