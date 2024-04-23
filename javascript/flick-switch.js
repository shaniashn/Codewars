function flickSwitch(arr){
    let result = []
    let switchs = false
    let state = true

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);

        if (arr[index] == "flick") {
             switchs = true
             state = !state
        }
        
        if (switchs == true){
            state = state
        } else {
            state = state
        }

        result[index] = state
    }

    return result;
}
