const snackItems: string[] = [
    "Apple Slices with Peanut Butter",
    "Carrots and Hummus",
    "Trail Mix",
    "Yogurt Parfait",
    "Popcorn"
];

/**
 * Prints the list of snacks to the console.
 * @exports
 */
export function printSnacks(): void {
    console.log("--- My Favorite Snacks ---");
    snackItems.forEach((snack, index) => {
        console.log(`Snack ${index + 1}: ${snack}`);
    });
    console.log("--------------------------");
}

// Call the function to print the snacks when the file is executed
printSnacks();