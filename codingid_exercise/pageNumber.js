// function pageNumber(n) {
//     for (let m = 1; m <= n; m++) {
//         let totalPages = 0;
//         let currentPage = 1;

//         while (n > 0) {
//             const digitsNeeded = Math.floor(Math.log10(currentPage)) + 1;

//             if (n >= digitsNeeded) {
//                 n -= digitsNeeded;
//                 totalPages++;
//                 currentPage++;
//             } else {
//                 break;
//             }
//         }

//         if (n === 0) {
//             return totalPages;
//         }
//     }

//     return 0;
// }

// const output = pageNumber(82);
// console.log(output); // Output will be 18



// function calculateNumberOfPages(n) {
//     for (let m = 1; m <= n; m++) {
//         let pages = 0;
//         let digits = n;
        
//         while (digits > 0) {
//             pages++;
//             digits -= Math.floor(Math.log10(pages)) + 1;
//         }
        
//         if (digits === 0) {
//             return m;
//         }
//     }
    
//     return 0;
// }

// // Taking input
// const n = 27;

// // Calculating the number of pages
// const numberOfPages = calculateNumberOfPages(n);

// // Printing the output
// console.log(numberOfPages);
function calculatePages(digits) {
  if (digits <= 0) {
    return 0;
  }
  
  let pages = 1;
  let pageCounter = 1;
  let digitsUsed = 0;
  
  while (digitsUsed < digits) {
    const currentPageDigits = Math.floor(Math.log10(pageCounter)) + 1;
    if (digitsUsed + currentPageDigits <= digits) {
      digitsUsed += currentPageDigits;
      pages++;
    }
    pageCounter++;
  }
  
  return pages;
}

function main() {
  const input = prompt("Enter the number of digits:");
  const digits = parseInt(input);

  if (isNaN(digits) || digits <= 0) {
    console.log("Wrong Input");
  } else {
    const pages = calculatePages(digits);
    console.log(pages);
  }
}

main();
