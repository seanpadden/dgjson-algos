function maxEvents(arrival, duration) {
  let presentations = 1
  let endTimes = []
  for (let i = 0; i < arrival.length; i++) {
    let endTime = arrival[i] + duration[i]
    endTimes.push([i + 1, endTime])
  }

  endTimes.sort((a, b) => a[1] - b[1])
  let time = endTimes[0][1]

  let i = 0 
  while (i < arrival.length - 1) {
    let nextCompany = endTimes[i + 1]
    let nextIndex = nextCompany[0] - 1 

    if(arrival[nextIndex] >= time) {
      presentations++
      time = nextCompany[1]
    }
    i++
  }
  // console.log(presentations)
  return presentations
}

let arr1 = [1, 3, 3, 5, 7]
let dur1 = [2, 2, 1, 2, 1] 

let arr2 = [1, 1, 1, 1, 4] 
let dur2 = [10, 3, 6, 4, 2]

let arr3 = [4, 1, 1, 1, 1, 4, 6] 
let dur3 = [12, 10, 11, 3, 6, 4, 2]

maxEvents(arr1, dur1) // 4
maxEvents(arr2, dur2) // 2
maxEvents(arr3, dur3) // 2 