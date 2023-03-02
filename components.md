# Data

## Data layer

- Current operator
- Current number
- Previous number
- First number exists (boolean)
- Number already includes comma (boolean)

## Data modifications

- Set current operator to sum
- Set current operator to substract
- Set current operator to multiply
- Set current operator to divide
- Set current operator to square root

- Set 'first number exists' to true
- Set 'first number exists' to false

- Set 'number already includes comma' to true
- Set 'number already includes comma' to false

- Add digit to current number
- Add comma to current number
- Delete digit from current number

- Set current number to 0 (clear)

# Components

## App

- Show Display
- Show Keyboard
- Show Keys

## DISPLAY

- Receives current numbers
- Receives previous numbers
- Receives current operator

- Shows current number
- Shows previous number
- Shows current operator

## KEYBOARD

- Shows a list of Keys
- Sends a number to each number Key
- Sends a operator to each operator Key
- Sends the function "to add a digit to the current number" to the number Keys
- Sends the function "to change the current operator" to the operator Keys

## KEY

- Shows the received number
- Shows the received operator
- Receives the number from Keyboard
- Receives the operator from Keyboard
- Receives the function from Keyboard

- On click executes the action received
