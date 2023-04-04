function makeShirt(size: string = "large", message: string = "The road to success and the road to failure are almost exactly the same."): void {
  console.log(`Shirt size: ${size} | Message: "${message}"`);
}

// Large shirt with default message
makeShirt();

// Medium shirt with default message
makeShirt("medium");

// Small shirt with custom message
makeShirt("small", "Opportunities don't happen. You create them.!");
