// Lottie-animasjon

// Select the container element
 let animationContainer = document.getElementById('animationContainer');

 // Load the animation JSON file
 let animationData = {
   container: animationContainer,
   renderer: 'svg', // Choose the renderer (svg, canvas, html)
   loop: true,      // Set loop to true or false
   autoplay: true,  // Set autoplay to true or false
   path: 'JS/data.json' // Replace with the path to your JSON file
 };

 // Create the animation
 let animation = lottie.loadAnimation(animationData);



