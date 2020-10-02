import { MatcherFunction } from '@testing-library/react';

type Query = (f: MatcherFunction) => HTMLElement;

export const withMarkupMatcher = (query: Query) => (text: string): HTMLElement =>
    query((content: string, node: HTMLElement) => {
        const hasText = (node: HTMLElement) => node.textContent === text;
        const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child as HTMLElement));
        return hasText(node) && childrenDontHaveText;
    });
