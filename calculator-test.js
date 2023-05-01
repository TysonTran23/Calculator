// describe("monthly payments", function () {

//   it('should calculate the monthly rate correctly', function () {
//     const values = {
//       amount: 100000,
//       years: 5,
//       rate: 5,
//     }
//     expect(calculateMonthlyPayment(values).toEqual("1887.12"))
//   });
//   it("should return a result with 2 decimal places", function () {
//     const values = {
//       amount: 50000,
//       years: 10,
//       rate: 2,
//     }
//     expect(calculateMonthlyPayment(values).toEqual("460.07"))
//   });
// it("should be able to calculate extremely high interest rates", function () {
//   const values = {
//     amount: 50000,
//     years: 10,
//     rate: 90,
//   }
//   expect(calculateMonthlyPayment(values).toEqual("3750.64"))
// })
// })

it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

/// etc

