import * as ducks from "./ducks";

describe("Budget duck testing", () => {
	it("Insert budget returns an action", () => {
		expect(
			ducks.budget.insertBudget({ name: "January" }).toMatchSnapshot()
		);
	});

	it("Update budget returns an action", () => {
		expect(
			ducks.budget
				.updateBudget({ id: 0, name: "February" })
				.toMatchSnapshot()
		);
	});

	it("Delete budget returns an action", () => {
		expect(ducks.budget.deleteBudget({ id: 0 }).toMatchSnapshot());
	});
});

describe("Bill duck testing", () => {
	it("Insert bill returns an action", () => {
		expect(ducks.bill.insertBill({ name: "Water Bill" }).toMatchSnapshot());
	});

	it("Update bill returns an action", () => {
		expect(
			ducks.bill
				.updateBill({ id: 0, name: "Water Bill" })
				.toMatchSnapshot()
		);
	});

	it("Delete bill returns an action", () => {
		expect(ducks.bill.deleteBill({ id: 0 }).toMatchSnapshot());
	});
});

describe("Account duck testing", () => {
	it("Insert account returns an action", () => {
		expect(
			ducks.account.insertAccount({ name: "Commbank" }).toMatchSnapshot()
		);
	});

	it("Delete account returns an action", () => {
		expect(ducks.account.deleteAccount({ id: 0 }).toMatchSnapshot());
	});

	it("Update account returns an action", () => {
		expect(
			ducks.account
				.updateAccount({ id: 0, name: "ANZ" })
				.toMatchSnapshot()
		);
	});
});
