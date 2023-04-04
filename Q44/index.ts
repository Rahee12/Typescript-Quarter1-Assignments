function makeSandwich(...items: string[]): void {
  console.log(`Making a sandwich with: ${items.join(", ")}`);
}

makeSandwich("EGG", "lettuce", "tomato", "mayonnaise");
makeSandwich("peanut butter", "jelly");
makeSandwich("ham", "cheese", "mustard");
