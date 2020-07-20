/*
 * Difficulty:
 * Medium
 *
 * Desc:
 * Given an array of strings names of size n.
 * You will create n folders in your file system such that, at the ith minute, you will create a folder with the name names[i].
 * Since two files cannot have the same name, if you enter a folder name which is previously used, the system will have a suffix addition to its name in the form of (k), where, k is the smallest positive integer such that the obtained name remains unique.
 * Return an array of strings of length n where ans[i] is the actual name the system will assign to the ith folder when you create it.
 *
 * Example 1:
 * Input: names = ["pes","fifa","gta","pes(2019)"]
 * Output: ["pes","fifa","gta","pes(2019)"]
 * Explanation:
 * Let's see how the file system creates folder names:
 * "pes" --> not assigned before, remains "pes"
 * "fifa" --> not assigned before, remains "fifa"
 * "gta" --> not assigned before, remains "gta"
 * "pes(2019)" --> not assigned before, remains "pes(2019)"
 *
 * Example 2:
 * Input: names = ["gta","gta(1)","gta","avalon"]
 * Output: ["gta","gta(1)","gta(2)","avalon"]
 * Explanation:
 * Let's see how the file system creates folder names:
 * "gta" --> not assigned before, remains "gta"
 * "gta(1)" --> not assigned before, remains "gta(1)"
 * "gta" --> the name is reserved, system adds (k), since "gta(1)" is also reserved, systems put k = 2. it becomes "gta(2)"
 * "avalon" --> not assigned before, remains "avalon"
 *
 * Example 3:
 * Input: names = ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"]
 * Output: ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
 * Explanation: When the last folder is created, the smallest positive valid k is 4, and it becomes "onepiece(4)".
 *
 * Example 4:
 * Input: names = ["wano","wano","wano","wano"]
 * Output: ["wano","wano(1)","wano(2)","wano(3)"]
 * Explanation: Just increase the value of k each time you create folder "wano".
 *
 * Example 5:
 * Input: names = ["kaido","kaido(1)","kaido","kaido(1)"]
 * Output: ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
 * Explanation: Please note that system adds the suffix (k) to current name even it contained the same suffix before.
 *
 * Constraints:
 * 1 <= names.length <= 5 * 10^4
 * 1 <= names[i].length <= 20
 * names[i] consists of lower case English letters, digits and/or round brackets.
*/

/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    const res = [];
    const dict = new Map();

    const updateRange = (name) => {
        const match = name.match(/\(\d+\)$/);
        if (!match) return;

        const num = Number(match[0].slice(1, -1));
        if (num === 0) return;
        const oldname = name.slice(0, match.index);
        const ranges = dict.get(oldname) || [[0, Infinity]];

        const index = ranges.findIndex((range) => range[0] <= num && range[1] >= num);
        if (index < 0) {
            dict.set(oldname, ranges);
            return;
        }

        const range = ranges[index];
        if (range[0] === num) {
            ranges[index][0] += 1;
            if (ranges[index][0] > ranges[index][1]) ranges.splice(index, 1);
        } else if (range[1] === num) {
            ranges[index][1] -= 1;
            if (ranges[index][0] > ranges[index][1]) ranges.splice(index, 1);
        } else {
            ranges.splice(index, 1, [range[0], num - 1], [num + 1, range[1]])
        }

        dict.set(oldname, ranges);
    }

    for (const name of names) {
        if (dict.has(name)) {
            const ranges = dict.get(name);
            const newname = ranges[0][0] == 0 ? name : `${name}(${ranges[0][0]})`;
    
            if (ranges[0][0] == ranges[0][1]) {
                ranges.shift();
            } else {
                ranges[0][0] += 1;
            }
            dict.set(name, ranges);
            
            if (dict.has(newname)) {
                if (name !== newname) {
                    const ranges2 = dict.get(newname);
                    ranges2[0][0] += 1;
                    if (ranges2[0][0] > ranges2[0][1]) ranges2.shift();
                    dict.set(newname, ranges2);
                }
            } else {
                dict.set(newname, [[1, Infinity]]);
            }
            res.push(newname);
        } else {
            dict.set(name, [[1, Infinity]]);
            res.push(name);
        }
        
        updateRange(name);
    }

    return res;
};

// ["r(2)(1)", "r", "r", "r", "r(2)", "r(2)", "r"]