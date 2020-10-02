export enum Colors {
    Black = '#2C2C2C',
    White = '#FFFFFF',
}

const theme = {
    colors: {
        Black: Colors.Black,
        White: Colors.White,
    },
} as const;

export type ThemeType = typeof theme;

export default theme;
