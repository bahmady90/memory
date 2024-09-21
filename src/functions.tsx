import { Players } from "./context/memory-context";

// function that returns a false if the element exist already 2 times in the memoryBoardArray and true otherwise to make sure each card is 2 times on the board
export function checkElementsGreaterTwo(array: ResultArray, element: string): boolean{
  let result = true;
  let counter = 0;
  array.forEach((el) => {
    if(el.src === element) {
      counter ++;
    }
    if(counter >= 2){
      result = false; 
    }
  })
  return result;

}

type SvgObject = {
  src: string,
  id: number
}

export type ResultArray = Array<SvgObject>

export function getMemoryBoard(gridSize: number, theme: "Numbers" | "Icons"){

    // boardArrays for the 2 different themes and 2 different gridSizes

    const arrayEightTimesEightSvgs = ["airplane.svg", "apple.svg", "banana.svg", "bike.svg", "car.svg", "cat.svg", "cloud.svg", "comb.svg", "dog.svg", "fish.svg", "house.svg", "money.svg", "moon.svg", "muslim.svg", "schnuller.svg", "scissor.svg", "sun.svg", "umbrella.svg"]

    const arrayFourTimesFourSvgs = ["airplane.svg", "apple.svg", "banana.svg", "bike.svg", "car.svg", "cat.svg", "cloud.svg", "comb.svg"];

    const arrayEightNumbers = ["2", "3", "5", "7", "11", "13", "17", "19", "23", "29", "31", "37", "41", "47", "53", "59", "61", "63"];
    const arrayFourNumbers = ["2", "3", "5", "7", "11", "13", "17", "19"]

    const result : ResultArray = [];

    const len = gridSize * gridSize
    
    let svgArray : Array<string> = [];

    // conditionally choosing the right Array depending on the players configuration
    if(theme === "Numbers"){
      if(gridSize === 4){
        svgArray = arrayFourNumbers
      }
      else {
        svgArray = arrayEightNumbers
      }
    }
    else if(theme === "Icons"){
      if(gridSize === 4){
        svgArray = arrayFourTimesFourSvgs
      }
      else {
        svgArray = arrayEightTimesEightSvgs
      }
    }

    let id = 1;

    // creating the board with the condition that every card has to be exactly 2 times in the board and the positions should be random every game
    while(result.length < len){
      const randomNumber: number = Math.floor(Math.random() * svgArray.length);
      const randomElement = svgArray[randomNumber]
      if(checkElementsGreaterTwo(result, randomElement)){
        result.push({
          src: randomElement,
          id: id
        });
        id += 1
      }
      else{svgArray.splice(randomNumber, 1)}
      
    } 

  return result

}

// function that returns an object with an array of the players with the highest score, since there can be a tie
export function getPlayersWithHighestScore(players: Players){
  const highestScore = players.reduce((acc, curr) => {
    if(curr.score > acc){
      acc = curr.score
    }
    return acc;
  }, 0)
  
  const playersWithHighestScore : Array<number> = [];
    players.forEach((player) => {
      if(player.score === highestScore){
        playersWithHighestScore.push(player.id) 
      }
    })

  return {playersWithHighestScore, highestScore}
}

// formatting the time number in the simgel-player mode
export function convertSeconds  (time: number): string  {
  const minutes = Math.floor((time % 3600) / 60)  
  const formatedMinutes = Math.floor((time % 3600) / 60) < 10 ? `0${Math.floor((time % 3600) / 60)}` : Math.floor((time % 3600) / 60)

  const seconds = (time - (minutes * 60)) < 10 ? `0${(time - (minutes * 60))}`: (time - (minutes * 60))

  return `${formatedMinutes} : ${seconds} `
}