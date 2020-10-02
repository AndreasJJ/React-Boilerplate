export enum Colors {
    Black = '#2C2C2C',
    White = '#FFFFFF',
    NeonRed = '#ff073a'
}

const theme = {
    colors: {
        Black: Colors.Black,
        White: Colors.White,
        NeonRed: Colors.NeonRed,
    },
} as const;

export type ThemeType = typeof theme;

export default theme;
