function pillars(numPill, dist, width) {
    // your code here
    if (numPill == 1) return 0;
    
    return (dist * 100) * (numPill - 1) + (width * (numPill - 2));
  }