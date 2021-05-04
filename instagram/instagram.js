// Question #1: Fun with Stickers
// You have an “instagram” sticker 
// that you want to cut up and form 
// other phrases with those letters. 

// How many instagram stickers will you 
// need to complete the given phrase? 
// Return the number of stickers needed.

// Input: Phrase - a string
// Example = ‘tame giant gnats’

// output : num of instagram stickers needed

const sticker = "instagram"

// 1) identify quantity of letters in the phrase 
//    1a) declare an object 
//    1b) loop on the phrase - if key exists, add number for value, if not create key
//        how many characters are in IG sticker

// if not 'a', see which key/value pair has highest value
// if 'a', value needs to be divided in half
//   it needs to be compared to second highest

function funWithStickers(phrase) {
  let ourObject = {}

  for (let letter of phrase){
    if (ourObject[letter]) {
      ourObject[letter] = ourObject[letter] + 1
    } else {
      ourObject[letter] = 1
    }
  }

  const entryArray = Object.entries(ourObject)
  let highest = ['', 0];

  for (let i = 0; i < entryArray.length - 1; i++){
    if (entryArray[i][1] > highest[1]) {
      if(entryArray[i][0] == 'a') {
        highest = [entryArray[i][0], entryArray[i][1] / 2]
      }
      else {
        highest = entryArray[i]
      }
    } 
  }

  // if (highest[0] !== 'a') console.log(`${highest[1]} stickers`) 
  console.log(highest[1])
}

funWithStickers('tame giants saaaaaaaa')