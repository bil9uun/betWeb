"use client";

import { UserContext } from "@/context/userProvider";
import { useContext } from "react";

const Tournament = () => {
  const { users } = useContext(UserContext);
  console.log("USERS", users);
  return <div>Tournament</div>;
};

export default Tournament;

// [
//     {
//         "hash": "BDXy84wM",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-07T11:00:00.000Z",
//         "leagueName": "The International 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/The_International/2024/Group_Stage",
//         "teams": [
//             {
//                 "name": "Tundra Esports",
//                 "url": "https://liquipedia.net/dota2/Tundra_Esports"
//             },
//             {
//                 "name": "HEROIC",
//                 "url": "https://liquipedia.net/dota2/HEROIC"
//             }
//         ]
//     },
//     {
//         "hash": "NmX5wz3N",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-07T14:00:00.000Z",
//         "leagueName": "The International 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/The_International/2024/Group_Stage",
//         "teams": [
//             {
//                 "name": "Team Spirit",
//                 "url": "https://liquipedia.net/dota2/Team_Spirit"
//             },
//             {
//                 "name": "Nouns",
//                 "url": "https://liquipedia.net/dota2/Nouns"
//             }
//         ]
//     },
//     {
//         "hash": "14iaQ1GE",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-07T17:00:00.000Z",
//         "leagueName": "The International 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/The_International/2024/Group_Stage",
//         "teams": [
//             {
//                 "name": "Gaimin Gladiators",
//                 "url": "https://liquipedia.net/dota2/Gaimin_Gladiators"
//             },
//             {
//                 "name": "G2 x iG",
//                 "url": "https://liquipedia.net/dota2/G2_x_iG"
//             }
//         ]
//     },
//     {
//         "hash": "J42Hqsoy",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-09T07:00:00.000Z",
//         "leagueName": "IESF Central Asia Qualifier 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/IESF_World_Championship/2024/Asia/Central",
//         "teams": [
//             {
//                 "name": "Uzbekistan",
//                 "url": "https://liquipedia.net/dota2/index.php?title=Uzbekistan&action=edit&redlink=1"
//             },
//             {
//                 "name": "Kyrgyzstan",
//                 "url": "https://liquipedia.net/dota2/Kyrgyzstan"
//             }
//         ]
//     },
//     {
//         "hash": "UY9OCT7o",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-06T08:00:00.000Z",
//         "leagueName": "The International 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/The_International/2024/Group_Stage",
//         "teams": [
//             {
//                 "name": "Xtreme Gaming",
//                 "url": "https://liquipedia.net/dota2/Xtreme_Gaming"
//             },
//             {
//                 "name": "Talon Esports",
//                 "url": "https://liquipedia.net/dota2/Talon_Esports"
//             }
//         ]
//     },
//     {
//         "hash": "-hisENJz",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-06T11:00:00.000Z",
//         "leagueName": "The International 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/The_International/2024/Group_Stage",
//         "teams": [
//             {
//                 "name": "Team Liquid",
//                 "url": "https://liquipedia.net/dota2/Team_Liquid"
//             },
//             {
//                 "name": "BetBoom Team",
//                 "url": "https://liquipedia.net/dota2/BetBoom_Team"
//             }
//         ]
//     },
//     {
//         "hash": "ihakyOv5",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-06T14:00:00.000Z",
//         "leagueName": "The International 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/The_International/2024/Group_Stage",
//         "teams": [
//             {
//                 "name": "Cloud9",
//                 "url": "https://liquipedia.net/dota2/Cloud9"
//             },
//             {
//                 "name": "1w Team",
//                 "url": "https://liquipedia.net/dota2/1w_Team"
//             }
//         ]
//     },
//     {
//         "hash": "WQb_sMuC",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-06T17:00:00.000Z",
//         "leagueName": "The International 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/The_International/2024/Group_Stage",
//         "teams": [
//             {
//                 "name": "Team Zero",
//                 "url": "https://liquipedia.net/dota2/Team_Zero"
//             },
//             {
//                 "name": "Aurora",
//                 "url": "https://liquipedia.net/dota2/Aurora"
//             }
//         ]
//     },
//     {
//         "hash": "O5NndpPd",
//         "matchType": "Bo3",
//         "streamUrl": null,
//         "startsAt": "2024-09-07T08:00:00.000Z",
//         "leagueName": "The International 2024",
//         "leagueUrl": "https://liquipedia.net/dota2/The_International/2024/Group_Stage",
//         "teams": [
//             {
//                 "name": "Team Falcons",
//                 "url": "https://liquipedia.net/dota2/Team_Falcons"
//             },
//             {
//                 "name": "Beastcoast",
//                 "url": "https://liquipedia.net/dota2/Beastcoast"
//             }
//         ]
//     }
// ]
