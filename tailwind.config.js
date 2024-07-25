/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainColor: "#005461",
                secColor: "#F2EDE6",
                thirdColor: "028193",
                buttonColor: "#F7D047",
                textColor: "#1B262C"
            }
        }
    },
    plugins: []
};
