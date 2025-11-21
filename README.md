<<<<<<< HEAD
**Lab: Debugging with the Debugger Statement**

**Overview**
In this lab, you will use the debugger statement to solve a problem that a junior developer might encounter in an e-commerce company. The company has a web application that calculates discounts for bulk orders. Your task is to debug the provided code to ensure it works correctly using the debugger statement.

**Scenario**
You are working for an e-commerce company that offers bulk discounts to its customers. The company has a function that calculates the total price after applying a discount based on the quantity of items purchased. However, the function is not working as expected, and your job is to debug the code and fix any issues using the debugger statement.

**Problem-Solving Process**
1. Understand the code and its purpose.
2. Use the debugger statement to pause the execution.
3. Step through the code using debugging commands.
4. Inspect variable values and understand the code flow.
5. Fix any identified issues.

**Tools and Resources**
# Phase 0: Debugging Lab + Garden Management

This repository primarily contains the Phase 0 debugging lab material plus a small utility script added for personal testing.

---

## Lab: Debugging with the Debugger Statement

**Overview**

In this lab, you will use the `debugger` statement to solve a problem that a junior developer might encounter in an e-commerce company. The company has a web application that calculates discounts for bulk orders. Your task is to debug the provided code to ensure it works correctly using the `debugger` statement.

**Scenario**

You are working for an e-commerce company that offers bulk discounts to its customers. The company has a function that calculates the total price after applying a discount based on the quantity of items purchased. However, the function is not working as expected, and your job is to debug the code using the `debugger` statement.

**Problem-Solving Process**

1. Understand the code and its purpose.
2. Use the `debugger` statement to pause the execution.
3. Step through the code using debugging commands.
4. Inspect variable values and understand the code flow.
5. Fix any identified issues.

**Tools and Resources**
# Phase 0: Debugging Lab + Garden Management

This repository primarily contains the Phase 0 debugging lab material plus a small utility script added for personal testing.

---

## Lab: Debugging with the Debugger Statement

Overview

In this lab, you will use the `debugger` statement to solve a problem that a junior developer might encounter in an e-commerce company. The company has a web application that calculates discounts for bulk orders. Your task is to debug the provided code to ensure it works correctly using the `debugger` statement.

Scenario

You are working for an e-commerce company that offers bulk discounts to its customers. The company has a function that calculates the total price after applying a discount based on the quantity of items purchased. However, the function is not working as expected, and your job is to debug the code using the `debugger` statement.

Problem-Solving Process

1. Understand the code and its purpose.
2. Use the `debugger` statement to pause the execution.
3. Step through the code using debugging commands.
4. Inspect variable values and understand the code flow.
5. Fix any identified issues.

Tools and Resources

- Visual Studio Code
- Node.js

Instructions (shortened)

1. Fork and clone the repository.
2. Open the project in VS Code.
3. Inspect `discountCalculator.js`.
4. Use `debugger` / the Node inspector to step through and fix the code.

Broken Code Example

```javascript
function calculateDiscountedPrice(quantity, pricePerItem) {
  let totalPrice = 0;

  for (let i = 1; i < quantity; i++) {
    totalPrice += pricePerItem;
  }

  if (quantity >= 10) {
    totalPrice *= 0.9;
  }

  return totalPrice;
}
```

*(Hint: the loop should start at 0.)*

---

## Garden Management

Small JS script for simple garden checks (`gardenManagment.js`) — watering, lights, and soil moisture increment.

This file was added and committed into a branch `add-gardenManagment` so it can be reviewed separately. It was included here for convenience; if you prefer it in a separate repo, move it out.

---

## Notes

- If you find merge artifacts or conflicts, this README was merged to keep both the lab content and the short project description.

Happy debugging!
