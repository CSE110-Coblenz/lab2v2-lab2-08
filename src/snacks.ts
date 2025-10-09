
const snacks: string[] = ["Snickers", "Cookies", "Brownies"];

// Define and export a function that prints them to the console
export function printSnacks(): void {
  console.log("Here are some snacks:");
  for (const snack of snacks) {
    console.log(`- ${snack}`);
  }
}

// Call the function so it actually prints out the snacks
printSnacks();
