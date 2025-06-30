const urlLeagues = "https://api.football-data.org/v4/competitions/";
const urlTeams = "https://api.football-data.org/v4/teams/";
const API_KEY = "475e888b8b164cc0bd14f8ba0b462c81";

export const getLeagues = async () => {
  const response = await fetch(urlLeagues, {
    method: 'GET',
    headers: {
      "x-auth-token": API_KEY,
    },
    
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getTeams = async () => {
  const response = await fetch(urlTeams, {
    method: 'GET',
    headers: {
      "x-auth-token": API_KEY,
    },
    
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getLeagueMatches = async (
  idLeague,
  dateFromLeague,
  dateToLeague
) => {
  const response = await fetch(
    `https://api.football-data.org/v4/competitions/${idLeague}/matches?dateFrom=${dateFromLeague}&dateTo=${dateToLeague}`,
    {
      method: 'GET',
      headers: {
        "x-auth-token": API_KEY,
      },
      
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getTeamMatches = async (idTeam, dateFromTeam, dateToTeam) => {
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${idTeam}/matches?dateFrom=${dateFromTeam}&dateTo=${dateToTeam}`,
    {
      method: 'GET',
      headers: {
        "x-auth-token": API_KEY,
      },
      
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
