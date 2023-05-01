describe("monthly payments", function () {

  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 100000,
      years: 5,
      rate: 5,
    }
    expect(calculateMonthlyPayment(values)).toEqual("1887.12")
  });
  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 50000,
      years: 10,
      rate: 2,
    }
    expect(calculateMonthlyPayment(values)).toEqual("460.07")
  });
it("should be able to calculate extremely high interest rates", function () {
  const values = {
    amount: 50000,
    years: 10,
    rate: 90,
  }
  expect(calculateMonthlyPayment(values)).toEqual("3750.64")
})
})

