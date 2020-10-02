import '@testing-library/jest-dom/extend-expect';

const originalError = console.error;

beforeAll(() => {
    console.error = (...args: any[]) => {
        if (/Warning.*not wrapped in act/.test(args[0])) {
            return;
        } else if (/Warning: You called act/.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
