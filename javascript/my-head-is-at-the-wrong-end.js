function fixTheMeerkat(arr) {
    let arrNew = []
    for(let i = 0; i < arr.length; i++){
        arrNew[2] = arr[0]
        arrNew[1] = arr[1]
        arrNew[0] = arr[2]
    }
    return arrNew
  }