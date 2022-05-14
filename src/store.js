import { writable } from "svelte/store";

const storedExpenses = localStorage.getItem("expenses");
const storedCategories = localStorage.getItem("categories");
export const expenses = writable(storedExpenses ? JSON.parse(storedExpenses) : []);
expenses.subscribe(value => {
    localStorage.setItem("expenses", value ? JSON.stringify(value) : []);
});

export const categories = writable(storedCategories ? JSON.parse(storedCategories) : []);
categories.subscribe(value => {
    localStorage.setItem("categories", value ? JSON.stringify(value) : []);
});