import React from 'react'

function Registration() {
  return (
    <div><div class="container">
    <h2>Car Rental Registration</h2>
    <form id="registrationForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
        <div class="error" id="nameError"></div>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required/>
        <div class="error" id="ageError"></div>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <div class="error" id="emailError"></div>

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required/>
        <div class="error" id="phoneError"></div>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <div class="error" id="passwordError"></div>

        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />
        <div class="error" id="confirmPasswordError"></div>

        <button type="submit">Register</button>
    </form>
</div></div>
  )
}

export default Registration