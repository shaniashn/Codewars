function invert(array) {
    let arrNew = []
    
    for(let i = 0; i < array.length; i++){
      
      arrNew.push(array[i] * -1)
    }
    
     return arrNew
  }