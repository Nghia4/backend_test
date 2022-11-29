const neededContainer = 3;
const listings = [
  {
    name: "Container renter A",
    container: 1,
    totalCost: 1,
  },
  {
    name: "Container renter B",
    container: 2,
    totalCost: 1,
  },
  {
    name: "Container renter C",
    container: 3,
    totalCost: 3,
  },
];

 //Same Algorithm all case (run test by type node Case1.js)
 let renterA = listings.find(name => name.name === 'Container renter A');
 let renterB = listings.find(name => name.name === 'Container renter B');
 let renterC = listings.find(name => name.name === 'Container renter C');
 
 // the Output
 const contractA = `[Contract with] ${renterA.name} ${renterA.container} container, price:${renterA.totalCost}
  [Summary] total cost ${renterA.totalCost}`
 
 const contractB = `[Contract with] ${renterB.name} ${renterB.container} container, price:${renterB.totalCost}
  [Summary] total cost ${renterB.totalCost}`
 
 const contractC = `[Contract with] ${renterC.name} ${renterC.container} container, price:${renterC.totalCost}
  [Summary] total cost ${renterC.totalCost}`
 
 const contractAorB = `[Contract with] ${renterA.name} ${renterA.container} container, price:${renterA.totalCost}
  [Summary] total cost ${renterA.totalCost} 
  or [Contract with] ${renterB.name} ${renterB.container} container, price:${renterB.totalCost}
  [Summary] total cost ${renterB.totalCost}`
 
 const contractAorC = `[Contract with] ${renterA.name} ${renterA.container} container, price:${renterA.totalCost}
  [Summary] total cost ${renterA.totalCost} 
  or [Contract with] ${renterC.name} ${renterC.container} container, price:${renterC.totalCost}
  [Summary] total cost ${renterC.totalCost}`
 
 const contractBorC = `[Contract with] ${renterB.name} ${renterB.container} container, price:${renterB.totalCost}
  [Summary] total cost ${renterB.totalCost} 
  or [Contract with] ${renterC.name} ${renterC.container} container, price:${renterC.totalCost}
  [Summary] total cost ${renterC.totalCost}`
 
 const contractAorBorC = `[Contract with] ${renterA.name} ${renterA.container} container, price:${renterA.totalCost}
  [Summary] total cost ${renterA.totalCost} 
  or [Contract with] ${renterB.name} ${renterB.container} container, price:${renterB.totalCost}
  [Summary] total cost ${renterB.totalCost}
  or [Contract with] ${renterC.name} ${renterC.container} container, price:${renterC.totalCost}
  [Summary] total cost ${renterC.totalCost}`
 
 const contractAandB = `[Contract with] ${renterA.name} ${renterA.container} container, price:${renterA.totalCost}
  [Contract with] ${renterB.name} ${renterB.container} container, price:${renterB.totalCost}
  [Summary] total cost ${renterA.totalCost + renterB.totalCost}`
 
 const contractAandC = `[Contract with] ${renterA.name} ${renterA.container} container, price:${renterA.totalCost}
  [Contract with] ${renterC.name} ${renterC.container} container, price:${renterC.totalCost}
  [Summary] total cost ${renterA.totalCost + renterC.totalCost}`
 
 const contractBandC = `[Contract with] ${renterB.name} ${renterB.container} container, price:${renterB.totalCost}
  [Contract with] ${renterC.name} ${renterC.container} container, price:${renterC.totalCost}
  [Summary] total cost ${renterB.totalCost + renterC.totalCost}`
 
 
 // check if only renterA have enough container
 if (renterA.container === neededContainer && renterB.container + renterC.container != neededContainer && renterB.container != neededContainer && renterC.container != neededContainer) {
     if (renterA.totalCost > renterB.totalCost || renterA.totalCost > renterC.totalCost) {
         console.log(contractA)
     }
     else if (renterA.totalCost <= renterB.totalCost) {
         if (renterA.totalCost <= renterC.totalCost) {
             console.log(contractA)
         }
     }
 }
 if (renterA.container === neededContainer && renterB.container === neededContainer && renterC.container != neededContainer) {
     if (renterA.totalCost < renterB.totalCost) {
         console.log(contractA)
     } else if (renterA.totalCost === renterB.totalCost) {
         console.log(contractAorB)
     }
 } else if (renterA.container === neededContainer && renterC.container === neededContainer && renterB.container != neededContainer) {
     if (renterA.totalCost < renterC.totalCost) {
         console.log(contractA)
     } else if (renterA.totalCost === renterC.totalCost) {
         console.log(contractAorC)
     }
 }
 
 // check if only renterB have enough container
 if (renterB.container === neededContainer && renterA.container + renterC.container != neededContainer && renterA.container != neededContainer && renterC.container != neededContainer) {
     if (renterB.totalCost > renterA.totalCost || renterB.totalCost > renterC.totalCost) {
         console.log(contractB)
     }
     else if (renterB.totalCost <= renterA.totalCost) {
         if (renterB.totalCost <= renterC.totalCost) {
             console.log(contractB)
         }
     }
 } else if (renterB.container === neededContainer && renterA.container === neededContainer && renterC.container != neededContainer) {
     if (renterB.totalCost < renterA.totalCost) {
         console.log(contractB)
     }
 } else if (renterB.container === neededContainer && renterC.container === neededContainer && renterA.container != neededContainer) {
     if (renterB.totalCost < renterC.totalCost) {
         console.log(contractB)
     } else if (renterB.totalCost === renterC.totalCost) {
         console.log(contractBorC)
     }
 }
 // check if only renterC have enough container
 if (renterC.container === neededContainer && renterA.container + renterB.container != neededContainer && renterA.container != neededContainer && renterB.container != neededContainer) {
     if (renterC.totalCost > renterA.totalCost || renterC.totalCost > renterB.totalCost) {
         console.log(contractC)
     }
     else if (renterC.totalCost <= renterA.totalCost) {
         if (renterC.totalCost <= renterB.totalCost) {
             console.log(contractC)
         }
     }
 } else if (renterC.container === neededContainer && renterA.container === neededContainer && renterB.container != neededContainer) {
     if (renterC.totalCost < renterA.totalCost) {
         console.log(contractC)
     }
 } else if (renterC.container === neededContainer && renterB.container === neededContainer && renterA.container != neededContainer) {
     if (renterC.totalCost < renterB.totalCost) {
         console.log(contractC)
     }
 }
 
 // check if all three renter === neededContainer and pick 1 with lowest cost (if have the same price , it`ll be showed all the options)
 if (renterA.container === neededContainer && renterB.container === neededContainer && renterC.container === neededContainer) {
     if (renterA.totalCost < renterB.totalCost && renterA.totalCost < renterC.totalCost) {
         console.log(contractA)
     } else if (renterB.totalCost < renterA.totalCost && renterB.totalCost < renterC.totalCost) {
         console.log(contractB)
     } else if (renterC.totalCost < renterA.totalCost && renterC.totalCost < renterB.totalCost) {
         console.log(contractC)
     } else if (renterA.totalCost === renterB.totalCost && renterA.totalCost < renterC.totalCost && renterB.totalCost < renterC.totalCost) {
         console.log(contractAorB)
     } else if (renterA.totalCost === renterC.totalCost && renterA.totalCost < renterB.totalCost && renterC.totalCost < renterB.totalCost) {
         console.log(contractAorC)
     } else if (renterB.totalCost === renterC.totalCost && renterB.totalCost < renterA.totalCost && renterC.totalCost < renterA.totalCost) {
         console.log(contractBorC)
     }
     else if (renterA.totalCost === renterB.totalCost && renterA.totalCost === renterC.totalCost && renterB.totalCost === renterC.totalCost) {
         console.log(contractAorBorC)
     }
 }
 
 // check if renter A and B or A and C or B and C if have enough container with another condition
 if (renterA.container + renterB.container === neededContainer && renterC.container > neededContainer) {
     console.log(contractAandB)
 } else if (renterA.container + renterC.container === neededContainer && renterB.container > neededContainer) {
     console.log(contractAandC)
 } else if (renterB.container + renterC.container === neededContainer && renterA.container > neededContainer) {
     console.log(contractBandC)
 }
 
 // check if two of three renter have the same value when sum and and === neededContainer (exp: A+B = B+C = neededContainer)
 if (renterA.container === renterB.container && renterA.totalCost === renterB.totalCost && renterC.container < neededContainer) {
     if (renterA.container + renterC.container === renterB.container + renterC.container && renterA.container + renterC.container === neededContainer) {
         console.log(contractAandC, ' or ', contractBandC)
     }
 } else if (renterA.container === renterC.container && renterA.totalCost === renterC.totalCost && renterB.container < neededContainer) {
     if (renterA.container + renterB.container === renterC.container + renterB.container && renterA.container + renterB.container === neededContainer) {
         console.log(contractAandB, ' or ', contractBandC)
     }
 } else if (renterB.container === renterC.container && renterB.totalCost === renterC.totalCost && renterA.container < neededContainer) {
     if (renterB.container + renterA.container === renterC.container + renterA.container && renterB.container + renterA.container === neededContainer) {
         console.log(contractAandB, ' or ', contractAandC)
     }
 }
 
 //check the sum of two renter (exp a+b = neededcontainer && a+c = neededContainer) then pick the  sum lowest price of two
 if (renterA.container + renterB.container === neededContainer && renterA.container + renterC.container === neededContainer) {
     if (renterA.totalCost + renterB.totalCost < renterA.totalCost + renterC.totalCost) {
         console.log(contractAandB)
     } if (renterA.totalCost + renterC.totalCost < renterA.totalCost + renterB.totalCost) {
         console.log(contractAandC)
     }
 }
 
 if (renterB.container + renterA.container === neededContainer && renterB.container + renterC.container === neededContainer) {
     if (renterB.totalCost + renterA.totalCost < renterB.totalCost + renterC.totalCost) {
         console.log(contractAandB)
     } else if (renterB.totalCost + renterC.totalCost < renterB.totalCost + renterA.totalCost) {
         console.log(contractBandC)
     }
 }
 
 if (renterC.container + renterA.container === neededContainer && renterC.container + renterB.container === neededContainer) {
     if (renterC.totalCost + renterA.totalCost < renterC.totalCost + renterB.totalCost) {
         console.log(contractAandC)
     } else if (renterC.totalCost + renterB.totalCost < renterC.totalCost + renterA.totalCost) {
         console.log(contractBandC)
     }
 }
 
 // check the sum of two renter and another if it = neededContainer (a+b=container && c = container)
 if (renterA.container + renterB.container === neededContainer && renterC.container === neededContainer) {
     if (renterA.totalCost + renterB.totalCost < renterC.totalCost) {
         console.log(contractAandB)
     } else if (renterA.totalCost + renterB.totalCost === renterC.totalCost) {
         console.log(contractAandB, ` or `, contractC)
     } else if (renterA.totalCost + renterB.totalCost > renterC.totalCost) {
         console.log(contractC)
     }
 }
 
 if (renterA.container + renterC.container === neededContainer && renterB.container === neededContainer) {
     if (renterA.totalCost + renterC.totalCost < renterB.totalCost) {
         console.log(contractAandC)
     } else if (renterA.totalCost + renterC.totalCost === renterB.totalCost) {
         console.log(contractAandC, `or`, contractB)
     } else if (renterA.totalCost + renterC.totalCost > renterB.totalCost) {
         console.log(contractB)
     }
 }
 
 
 if (renterB.container + renterC.container === neededContainer && renterA.container === neededContainer) {
     if (renterB.totalCost + renterC.totalCost < renterA.totalCost) {
         console.log(contractBandC)
     } else if (renterB.totalCost + renterC.totalCost === renterA.totalCost) {
         console.log(contractBandC, ` or `, contractA)
     } else if (renterB.totalCost + renterC.totalCost > renterA.totalCost) {
         console.log(contractA)
     }
 }
 
 // check if three of them have enough container or not
 if (renterA.container + renterB.container + renterC.container < neededContainer) {
     console.log(`[Contract with] ${renterA.name} ${renterA.container} container, price:${renterA.totalCost}
    [Contract with] ${renterB.name} ${renterB.container} container, price:${renterB.totalCost}
    [Contract with] ${renterC.name} ${renterC.container} container, price:${renterC.totalCost}
    Not enough containers
    [Summary] total cost ${renterA.totalCost + renterB.totalCost + renterC.totalCost}`)
 } else if (renterA.container + renterB.container + renterC.container === neededContainer) {
     console.log(`[Contract with] ${renterA.name} ${renterA.container} container, price:${renterA.totalCost}
    [Contract with] ${renterB.name} ${renterB.container} container, price:${renterB.totalCost}
    [Contract with] ${renterC.name} ${renterC.container} container, price:${renterC.totalCost}
    [Summary] total cost ${renterA.totalCost + renterB.totalCost + renterC.totalCost}`)
 }