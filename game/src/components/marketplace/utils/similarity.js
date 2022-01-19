import { domains } from "../data/topDomains";
import stringSimilarty from "string-similarity";

export default function determineCost(link) {
    let max = 0;

    const name = link.split(".")[0];

    let mostSim = "";
    for (let i = 0; i < domains.length; i++) {
        const d = domains[i].split(".")[0];

        if (d.length < 4) continue;

        // The similarity is computed based on dice cofficient
        const sim = stringSimilarty.compareTwoStrings(d, name);

        if (max < sim) {
            mostSim = d;
        }
        max = Math.max(sim, max);
    }

    if (max < 0.6) max = 0;
    console.log(max);
    console.log(mostSim);
    return Math.round(1000 + Math.pow(max * 100, 2) * 15);
}

// /**
//  * Jaro Winkler distance to find the similarity between two strings
//  */
// function calculateSimilarity(s1, s2) {
//     // If the strings are equal
//     if (s1 == s2) return 1.0;

//     // Length of two strings
//     const len1 = s1.length;
//     const len2 = s2.length;

//     // Maximum distance upto which matching
//     // is allowed
//     const maxDist = Math.floor(Math.max(len1, len2) / 2) - 1;

//     // Count of matches
//     let match = 0;

//     // Hash for matches
//     const hashs1 = Array(s1.length).fill(0);
//     const hashs2 = Array(s1.length).fill(0);

//     // Traverse through the first string
//     for (let i = 0; i < len1; i++) {
//         // Check if there is any matches
//         for (
//             let j = Math.max(0, i - maxDist);
//             j < Math.min(len2, i + maxDist + 1);
//             j++
//         ) {
//             // If there is a match
//             if (s1[i] == s2[j] && hashs2[j] == 0) {
//                 hashs1[i] = 1;
//                 hashs2[j] = 1;
//                 match++;
//                 break;
//             }
//         }
//     }

//     // If there is no match
//     if (match == 0) return 0.0;

//     // Number of transpositions
//     let t = 0;

//     let point = 0;

//     // Count number of occurrences
//     // where two characters match but
//     // there is a third matched character
//     // in between the indices
//     for (let i = 0; i < len1; i++) {
//         if (hashs1[i]) {
//             // Find the next matched character
//             // in second string
//             while (hashs2[point] == 0) point++;

//             if (s1[i] != s2[point++]) t++;
//         }
//     }

//     t /= 2;

//     // Return the Jaro Similarity
//     return (match / len1 + match / len2 + (match - t) / match) / 3.0;
// }
// /**
//  * Levenshtein Distance
//  */
// function calculateDistance(str1, str2) {
//     const track = Array(str2.length + 1)
//         .fill(null)
//         .map(() => Array(str1.length + 1).fill(null));
//     for (let i = 0; i <= str1.length; i += 1) {
//         track[0][i] = i;
//     }
//     for (let j = 0; j <= str2.length; j += 1) {
//         track[j][0] = j;
//     }
//     for (let j = 1; j <= str2.length; j += 1) {
//         for (let i = 1; i <= str1.length; i += 1) {
//             const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
//             track[j][i] = Math.min(
//                 track[j][i - 1] + 1, // deletion
//                 track[j - 1][i] + 1, // insertion
//                 track[j - 1][i - 1] + indicator // substitution
//             );
//         }
//     }
//     return track[str2.length][str1.length];
// }
