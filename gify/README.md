Task: Implement a GiftCard Management System
Requirements:

## Create Classes:

Gify:
Properties:
Should have methods to manage gift card transactions between customers and brands.

Customer:
Properties:
Should have a list of gift cards purchased.
Methods:
Purchase gift cards from Gify.

Consumer:
Properties:
Should have a list of gift cards received.
Methods:
Redeem gift cards at a brand.

Brand:
Properties:
Should have a list of available gift cards.
Methods:
Issue gift cards to Gify.

GiftCard:
Properties:
Face value (fixed).
Discount (optional).
Price (calculated based on face value and discount).

## Functionality:

Gify:
Implement methods to manage gift card transactions between customers and brands.

Customer:
Implement methods to purchase gift cards from Gify.

Consumer:
Implement methods to redeem gift cards at a brand.

Brand:
Implement methods to issue gift cards to Gify.

GiftCard:
Implement method to calculate the price of a gift card based on face value and discount.

## Validation:

Gify:
Ensure gift cards are redeemed by valid consumers for valid brands.
Validate discounts are within a valid range.
Customer:
Ensure the purchase of gift cards is successful and accurate.
Consumer:
Validate the redemption of gift cards at a brand.
Brand:
Ensure the issuance of gift cards to Gify is accurate.
GiftCard:
Validate face values are valid amounts.
Validate transactions are consistent and error-free.
Testing:

### Write test cases to ensure that the implemented functionality works correctly.

### Test scenarios such as purchasing gift cards, redeeming gift cards, applying discounts, etc.

### Test edge cases and error handling scenarios.