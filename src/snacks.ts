
import { animateFeature } from "./animation";

export const snacks: string[] = ["wonderwall", "ode to joy", "the strokes"];

// Define and export a function that prints them to the console
export function printMusic(): void {
    animateFeature("Music");
    console.log("Here are some amazing songs:");
    for (const snack of snacks) {
        console.log(`- ${snack}`);
    }
}

// Call the function so it actually prints out the snacks
//printAlexSnacks();
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
//printSnacks();
