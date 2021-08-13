// Blue
const blue_25 = "#F1F9FE";
const blue_50 = "#E3F2FD";
const blue_100 = "#BBDEFB";
const blue_200 = "#90CAF9";
const blue_300 = "#64B5F6";
const blue_400 = "#42A5F5";
const blue_500 = "#2196F3";
const blue_600 = "#1E88E5";
const blue_700 = "#1976D2";
const blue_800 = "#1565C0";
const blue_900 = "#0D47A1";

// Red
const red_50 = "#FFEBEE";
const red_100 = "#FFCDD2";
const red_200 = "#EF9A9A";
const red_300 = "#E57373";
const red_400 = "#EF5350";
const red_500 = "#F44336";
const red_600 = "#E53935";
const red_700 = "#D32F2F";
const red_800 = "#C62828";
const red_900 = "#B71C1C";

// Yellow
const yellow_25 = "#FFF7F0";
const yellow_50 = "#FFF8E1";
const yellow_100 = "#FFECB3";
const yellow_200 = "#FFE082";
const yellow_300 = "#FFD54F";
const yellow_400 = "#FFCA28";
const yellow_500 = "#FFC107";
const yellow_600 = "#FFB300";
const yellow_700 = "#FFA000";
const yellow_800 = "#FF8F00";
const yellow_900 = "#FF6F00";

// Green
const green_50 = "#F1F8E9";
const green_100 = "#DCEDC8";
const green_200 = "#C5E1A5";
const green_300 = "#AED581";
const green_400 = "#9CCC65";
const green_500 = "#8BC34A";
const green_600 = "#7CB342";
const green_700 = "#689F38";
const green_800 = "#558B2F";
const green_900 = "#33691E";

// Teal
const teal_50 = "#E0F2F1";
const teal_100 = "#B2DFDB";
const teal_200 = "#80CBC4";
const teal_300 = "#4DB6AC";
const teal_400 = "#26A69A";
const teal_500 = "#009688";
const teal_600 = "#00897B";
const teal_700 = "#00796B";
const teal_800 = "#00695C";
const teal_900 = "#004D40";

// Gray
const gray_10 = "#FAFAFA";
const gray_25 = "#EFF1F3";
const gray_50 = "#E4EAEB";
const gray_100 = "#CBD6D9";
const gray_200 = "#B1C2C6";
const gray_300 = "#98AEB4";
const gray_400 = "#7E9AA1";
const gray_500 = "#65878F";
const gray_600 = "#4B737C";
const gray_700 = "#325F6A";
const gray_800 = "#184B57";
const gray_900 = "#003845";

// Black
const black_50 = "#F9FAFB";
const black_100 = "#F3F4F6";
const black_200 = "#E5E7EB";
const black_300 = "#D1D5DB";
const black_400 = "#9CA3AF";
const black_500 = "#6B7280";
const black_600 = "#4B5563";
const black_700 = "#374151";
const black_800 = "#1F2937";
const black_900 = "#111827";

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "white",
        blue: {
            25: blue_25,
            50: blue_50,
            100: blue_100,
            200: blue_200,
            300: blue_300,
            400: blue_400,
            500: blue_500,
            600: blue_600,
            700: blue_700,
            800: blue_800,
            900: blue_900
        },
        red: {
            50: red_50,
            100: red_100,
            200: red_200,
            300: red_300,
            400: red_400,
            500: red_500,
            600: red_600,
            700: red_700,
            800: red_800,
            900: red_900
        },
        yellow: {
            25: yellow_25,
            50: yellow_50,
            100: yellow_100,
            200: yellow_200,
            300: yellow_300,
            400: yellow_400,
            500: yellow_500,
            600: yellow_600,
            700: yellow_700,
            800: yellow_800,
            900: yellow_900
        },
        green: {
            50: green_50,
            100: green_100,
            200: green_200,
            300: green_300,
            400: green_400,
            500: green_500,
            600: green_600,
            700: green_700,
            800: green_800,
            900: green_900
        },
        teal: {
            50: teal_50,
            100: teal_100,
            200: teal_200,
            300: teal_300,
            400: teal_400,
            500: teal_500,
            600: teal_600,
            700: teal_700,
            800: teal_800,
            900: teal_900
        },
        gray: {
            10: gray_10,
            25: gray_25,
            50: gray_50,
            100: gray_100,
            200: gray_200,
            300: gray_300,
            400: gray_400,
            500: gray_500,
            600: gray_600,
            700: gray_700,
            800: gray_800,
            900: gray_900
        },
        black: {
            50: black_50,
            100: black_100,
            200: black_200,
            300: black_300,
            400: black_400,
            500: black_500,
            600: black_600,
            700: black_700,
            800: black_800,
            900: black_900
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
