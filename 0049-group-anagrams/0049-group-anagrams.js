/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {}

    for(let str of strs) {
        const sortStr = [...str].sort().join('')

        if(map[sortStr] === undefined) {
            map[sortStr] = [str]
        } else {
            map[sortStr].push(str)
        }
    }
    return Object.values(map)
};