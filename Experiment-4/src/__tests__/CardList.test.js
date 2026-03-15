import { render } from "@testing-library/react";
import CardList from "../components/CardList";

test("snapshot for loading state", () => {
  const { asFragment } = render(<CardList loading={true} />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot for empty state", () => {
  const { asFragment } = render(<CardList data={[]} />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot for error state", () => {
  const { asFragment } = render(<CardList error={true} />);
  expect(asFragment()).toMatchSnapshot();
});

test("snapshot for data loaded state", () => {
  const { asFragment } = render(<CardList data={["Item1","Item2","Item3"]} />);
  expect(asFragment()).toMatchSnapshot();
});