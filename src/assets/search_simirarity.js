import {smithWaterman} from './smith_waterman.js'

export function search(qt_arr, data, except_id){
    var temp_arr = []
    for(let i=0;i<data.length;i++){
        let d = data[i]
        let max_v = 0
        for(let k=0;k<qt_arr.length;k++){
            let qt = qt_arr[k]
            let max_simirarity = 0
            let target_arr = [d['name'], ...d['tags']]
            for(let j=0;j<target_arr.length;j++){
                let s_v = smithWaterman(qt, target_arr[j])
                if (max_simirarity < s_v){
                    max_simirarity = s_v
                }
            }
            max_v += max_simirarity
        }
        temp_arr.push([max_v, d])
    }
    var max_most_v = 0
    temp_arr.sort(function(a, b){
        if (max_most_v < a[0]){
            max_most_v = a[0]
        }
        if(max_most_v < b[0]){
            max_most_v = b[0]
        }
        return b[0] - a[0]
    })
    
    var temp_arr2 = []
    for(let i=0;i<temp_arr.length;i++){
        if(max_most_v * 0.8 < temp_arr[i][0] && temp_arr[i][0] > 2){
            if(except_id != temp_arr[i][1].id){
                temp_arr2.push(temp_arr[i][1])
            }
        }
    }
    return temp_arr2
}
