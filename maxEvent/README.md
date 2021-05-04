# University Career Fair

A team organizing a university career fair has a list of companies along with their respective arrival times and their duration of stay. Only one company can present at any time. Given each company's arrival time and the duration they will stay, determine the maximum number of presentations that can be hosted during the career fair.

# Example

![Image of chart](https://gunargessner.com/_next/image?url=%2Fposts%2Fcode-interview%2Funiversity-career-fair-example.png&w=1200&q=75)

The first company arrives at time 1 and stays for 2 hours. At time 3, two companies arrive, but only 1 can stay for either 1 or 2 hours. The next companies arrive at times 5 and 7 and do not conflict with any others. In total, there can be a maximum of 4 promotional events.

```javascript
n = 5
arrival = [1, 3, 3, 5, 7]
duration = [2, 2, 1, 2, 1] 
```
# Function Description
Complete the function maxEvents:

```
maxEvents has the following parameter(s):

  int arrival[n]:  an array of integers where ith element is the arrival time of the ith company
  int duration[n]:  an array of integers where ith element is the duration that the ith company's stay at the career fair

Returns:

  int: the maximum number of promotional events that can be hosted 

Constraints:

  1 < n < 50
  1  < arrival[i] < 1000
  1 < duration[i] < 1000
  
Both the 'arrival' array and 'duration' array will have an equal number of elements
```