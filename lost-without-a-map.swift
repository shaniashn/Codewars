func maps(a : Array<Int>) -> Array<Int> {
// write your code here...
  var result: [Int] = []
  
    for i in 0..<a.count{
      // 1 * 2
      // 2 * 2
      
      result.append(a[i]*2)
    }
  
  return result
}
