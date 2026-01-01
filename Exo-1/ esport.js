const matchSchedule = [
  {
    id: 'LFL_KC_SLY',
    game: 'League of Legends',
    competition: 'LFL',
    teamA: 'Karmine Corp',
    teamB: 'Solary',
    probabilityA: 0.65, // 65% de chances pour KC
    status: 'Upcoming'
  },
  {
    id: 'VCT_VIT_M8',
    game: 'Valorant',
    competition: 'VCT EMEA',
    teamA: 'Team Vitality',
    teamB: 'Mandatory',
    probabilityA: 0.55, // 55% de chances pour Vitality
    status: 'Upcoming'
  },
  {
    id: 'LFL_GO_BDS',
    game: 'League of Legends',
    competition: 'LFL',
    teamA: 'Gentle Mates',
    teamB: 'BDS Academy',
    probabilityA: 0.48, // 48% de chances pour M8, donc BDS est favori
    status: 'Upcoming'
  },
  {
    id: 'LFL_KC_M8',
    game: 'Valorant',
    competition: 'VCT EMEA',
    teamA: 'Karmine Corp',
    teamB: 'Mandatory',
    probabilityA: 0.52,
    status: 'Upcoming'
  }
];


class Match {
    constructor(id, game, competition, teamA, teamB, probabilityA, status) {
        this.id = id;
        this.game = game;
        this.competition = competition;
        this.teamA = teamA;
        this.teamB = teamB;
        this.probabilityA = probabilityA;
        this.status = status;
    } 
    getFavorite() {
        if (this.probabilityA > 0.5) {
            return this.teamA;
        } else {
            return this.teamB;
        }
    }
}

class Plateform{
    constructor(name){
      this.name=name;
      this.matches = [];
    }

    loadMatches(matchesToLoad) {
      matchesToLoad.forEach(data => { 
        this.matches.push(new Match(data.id, data.game, data.competition, data.teamA, data.teamB, data.probabilityA, data.status));
    }
  )}
    displaySchedule(){
                  
    }
}
