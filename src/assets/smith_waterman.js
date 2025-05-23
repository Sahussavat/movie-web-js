export function smithWaterman(seq1, seq2, matchScore = 2, mismatchPenalty = -1, gapPenalty = -2) {
    const rows = seq1.length + 1;
    const cols = seq2.length + 1;

    // Initialize scoring matrix and traceback matrix
    const scoreMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxScore = 0;

    // Fill the scoring matrix
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            const match = seq1[i - 1] === seq2[j - 1] ? matchScore : mismatchPenalty;
            const scoreDiagonal = scoreMatrix[i - 1][j - 1] + match;
            const scoreUp = scoreMatrix[i - 1][j] + gapPenalty;
            const scoreLeft = scoreMatrix[i][j - 1] + gapPenalty;

            scoreMatrix[i][j] = Math.max(0, scoreDiagonal, scoreUp, scoreLeft);
            maxScore = Math.max(maxScore, scoreMatrix[i][j]);
        }
    }

    return maxScore;
}

export function sortBySimirality(q, arr, is_remove_below_zero = false){
    arr.sort(function(a, b){
        let a_val = smithWaterman(q, a)
        let b_val = smithWaterman(q, b)
        return b_val - a_val
    })
    if (is_remove_below_zero) {
        var temp_arr = []
        for(let i=0;i<arr.length;i++){
            console.log(smithWaterman(q, arr[i]) + " " + arr[i])
            if(smithWaterman(q, arr[i]) > 0){
                temp_arr.push(arr[i])
            } else {
                break;
            }
        }
        return temp_arr
    }
    return arr
}