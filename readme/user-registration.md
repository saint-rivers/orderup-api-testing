# User Registration Test Cases

## Account Creation and Login

1. Register an account at <http://localhost:6070/api/v1/users>

   - insert username with [space]
   - insert invalid email format
   - insert existing email
   - insert invalid gender
   - insert single character as gender
   - insert special character into name
   - leave fields blank

    > shouldn't isActivated be set to false in the backend?

2. Check for created account

   - get user by correct username
   - show error message on non-existent username
   - get user by email
   - show error message on non-existent email
   - show error message on invalid email format

3. 