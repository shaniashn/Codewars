func grow(_ arr: [Int]) -> Int {
  var result = 1;
  
  for i in 0..<arr.count {
    result = result * arr[i]
  }
  
  return result
}
