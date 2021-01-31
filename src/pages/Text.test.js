import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";
import userEvent from "@testing-library/user-event";

describe("Text renders", () => {
    it("renders Text component", () => {
        render(<Text />);
        expect(screen.getByPlaceholderText('Enter text for search')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('What do you need to find?')).toBeInTheDocument();
    });
    it("inputs are empty", () => {
        render(<Text />);
        expect(screen.getByPlaceholderText('Enter text for search')).toBeEmptyDOMElement();
        expect(screen.getByPlaceholderText('What do you need to find?')).toBeEmptyDOMElement();
    });
});
describe("events", () => {
    it("events change text on page and input", () => {
        render(<Text />);
        const textInput = screen.getByPlaceholderText('Enter text for search');
        userEvent.type(textInput, 'You are smart');
        expect(screen.queryByDisplayValue('You are smart')).toBeInTheDocument();
        expect(screen.queryByText('You are smart')).toBeInTheDocument();
    });
    it("events searchText change",  () => {
        render(<Text />);
        const searchInput = screen.getByPlaceholderText('What do you need to find?');
        userEvent.type(searchInput, 'Search');
        expect(screen.queryByDisplayValue('Search')).toBeInTheDocument();
    });
    it("focus", () => {
        const { getAllByTestId } = render(
            <div>
                <input data-testid="element" />
            </div>
        );
        const [input] = getAllByTestId("element");
        userEvent.tab();
        expect(input).toHaveFocus();
    });
});