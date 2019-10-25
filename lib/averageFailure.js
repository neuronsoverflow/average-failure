function averageFailure (event, threshold) { 
  // countFailure is a callback that counts the number of checks that have 
  // non-zero status. 
  var countFailure = function (count, check) { 
    if (check.status != 0) { 
      return count + 1; 
    } 
    return count; 
  }; 

  var history = event.check.history; 

  // avgFailure is the percentage of failures in the event's history 
  var avgFailure = history.reduce(countFailure, 0) / history.length; 

  return avgFailure >= threshold;
}