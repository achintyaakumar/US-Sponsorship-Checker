// const button = document.querySelector('.UserComponent-container');
// if (button) {
//   button.insertAdjacentText('afterend', 'hello');
// }

// Wait until the DOM is loaded
// document.addEventListener("DOMContentLoaded", function() {
//     // Select the target node
//     var targetNode = document.querySelector(".t-black.ph1.t-bold.t-18");
    
//     // If the target node exists, add "hello" next to it
//     if (targetNode) {
//       var helloNode = document.createElement("span");
//       helloNode.textContent = "hello";
//       targetNode.insertAdjacentElement("afterend", helloNode);
//     } else {
//       // If the target node does not exist, log an error
//       console.error("Target node not found!");
//     }
    
//     // Create a new observer
//     var observer = new MutationObserver(function(mutations) {
//       mutations.forEach(function(mutation) {
//         if (mutation.type === "childList") {
//           // If a child node is added, check if the target node exists
//           if (mutation.addedNodes.length > 0 && targetNode) {
//             // If the target node exists, add "hello" next to it
//             var helloNode = document.createElement("span");
//             helloNode.textContent = "hello";
//             targetNode.insertAdjacentElement("afterend", helloNode);
//           }
//         }
//       });
//     });
    
//     // Observe the target node for any changes
//     observer.observe(document.body, { childList: true, subtree: true });
//   });
  

setTimeout(function() {
    const header = document.querySelector('h2.t-black.ph1.t-bold.t-18');
    const hello = document.createElement('span');
    hello.textContent = 'hello';
    header.insertAdjacentElement('afterend', hello);
  }, 10000);
  