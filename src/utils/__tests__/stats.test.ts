import { computeTeamStats } from "../";

describe("stats.js", () => {
  const id = 1;
  const results = [
    {
      teams: ["a", "b"],
      teamIds: [1, 2],
      score: [10, 20],
    },
    {
      teams: ["b", "a"],
      teamIds: [2, 1],
      score: [5, 10],
    },
    {
      teams: ["c", "a"],
      teamIds: [3, 1],
      score: [0, 0],
    },
  ];
  const resultsTeam2 = [
    {
      teams: ["a", "b"],
      teamIds: [3, 2],
      score: [10, 20],
    },
    {
      teams: ["b", "a"],
      teamIds: [2, 4],
      score: [5, 10],
    },
    {
      teams: ["c", "a"],
      teamIds: [3, 2],
      score: [2, 0],
    },
  ];

  it("should return team stats", () => {
    const stats = computeTeamStats({ id, results });

    expect(stats.matches).toBe(3);
    expect(stats.points).toBe(4);
    expect(stats.won).toBe(1);
    expect(stats.drawn).toBe(1);
    expect(stats.lost).toBe(1);
    expect(stats.goals).toBe(20);
    expect(stats.goalsConceded).toBe(25);
    expect(stats.goalsDifference).toBe(-5);
  });

  it("should throw an error when no parameter given", () => {
    expect(() => {
      computeTeamStats();
    }).toThrow();
  });

  it("should throw an error when no id found", () => {
    expect(() => {
      computeTeamStats({ id: "a", results });
    }).toThrow();
  });

  it("should throw an error when inserting an id that's not present in every array object", () => {
    expect(() => {
      const parameter = {
        id: 2,
        results: results,
      };
      computeTeamStats(parameter);
    }).toThrow();
  });

  it("should return opponent stats", () => {
    const parameter = {
      id: 2,
      results: resultsTeam2,
    };
    const stats = computeTeamStats(parameter);

    expect(stats.matches).toBe(3);
    expect(stats.points).toBe(3);
    expect(stats.won).toBe(1);
    expect(stats.drawn).toBe(0);
    expect(stats.lost).toBe(2);
    expect(stats.goals).toBe(25);
    expect(stats.goalsConceded).toBe(22);
    expect(stats.goalsDifference).toBe(3);
  });
});
