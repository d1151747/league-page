/*   STEP 1   */
export const leagueID = "1182406058030743552"; // your league ID
export const leagueName = "NYC Dynasty League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to all Josh Allen fans and members of NYC Dynasty League.</p>
  <p>Para 1</p>
  <p>Para 2</p>
  <p>Para 3</p>
  <p>Para 4</p>
  <p>Para 5</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "735575913235865600",
      "name": "Declan Watson",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Washington, D.C.", // (optional)
      "bio": "Passionate member of Bills Mafia",
      "photo": "/managers/declanwatson.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "buf", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Kion Murphy", // Can be anything (usually your rival's name)
        link: 7, // manager array number within this array, or null to link back to all managers page
        image: "/managers/kionmurphy.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 2212, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I took Justin out of the playoffs lmao",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Phone", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
       
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "474012108762116096",
      "name": "Justin Dibsie",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York City", // (optional)
      "bio": "Tupac is not dead",
      "photo": "/managers/justindibsie.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Playoffs", // Can be anything (usually your rival's name)
        link:null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/playoffs.svg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11292, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Somehow I built a win-now team that missed the playoffs",
      "tradingScale": 10, // 1 - 10
      "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID" : "864636578130206720",
      "name": "Rayan Dhawan",
      "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York City", // (optional)
      "bio": "Finance Bro",
      "photo": "/managers/rayandhawan.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Jordan Mason", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/jordanmason.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1373, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Your fantasy team's philosophy",
      "tradingScale": 1, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "873341202777399296",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kelvin Deng",
      "tookOver": null, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York City", // (optional)
      "bio": "Lover of expensive food",
      "photo": "/managers/kelvindeng.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Zack", // Can be anything (usually your rival's name)
        link: 4, // manager array number within this array, or null to link back to all managers page
        image: "/managers/zackgallier.jpeg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11557, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "I drafted 34 year old Travis Kelce in the 4th round of the startup draft", // (optional)
      "tradingScale": 3, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1004234716406513664",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Zack Gallier",
      "tookOver": null, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York City", // (optional)
      "bio": "All my homies hate ticketmaster ",
      "photo": "/managers/zackgallier.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Microsoft Excel", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/excel.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4227, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "My team success this year was not luck", // (optional)
      "tradingScale": 1, // 1 - 10 (optional)
      "preferredContact": "Phone",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "873390251811426304",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Carter Dibsie",
      "tookOver": null, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Fuckin' Jersey", // (optional)
      "bio": "I fleeced my brother for Justin Herbert",
      "photo": "/managers/carterdibsie.jpeg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Cbutz", // Can be anything (usually your rival's name)
        link: null, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11604, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Leviticus 18:22", // (optional)
      "tradingScale": 5, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1004179436826165248",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Nick Fischer",
      "tookOver": null, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Fuckin' Jersey", // (optional)
      "bio": "Paaaaaaaatrrrriccccckkkkkk sttttoooooopppppppppppppppppppppppp im gonnnnna busssssssssttttttttttt",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Drafting", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "The referees treat all teams equally", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1004173519602675712",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kion Murphy",
      "tookOver": null, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York City", // (optional)
      "bio": "Crazy this is what rooting for a good team is like . . . idk how to act",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Declan", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Must increase stockholder value", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Email",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": null,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
      "managerID": "1004783798699016192",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kunal Chauhan",
      "tookOver": null, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "New York City", // (optional)
      "bio": "Crazy this is what rooting for a good team is like . . . idk how to act",
      "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": null, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      "rival": {
        name: "Declan", // Can be anything (usually your rival's name)
        link: 0, // manager array number within this array, or null to link back to all managers page
        image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 11566, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Must increase stockholder value", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Email",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
  ]












  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
