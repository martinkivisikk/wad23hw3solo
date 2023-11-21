<template>
  <div>

    <form @submit.prevent="validateForm">
      <h2>Create an account</h2>
      <label for="email">Email</label>
      <input type="email" required v-model="email">
      <label for="password">Password</label>
      <input type="password" required v-model="password">
      <div v-if="validatePassword" class="error"> {{ validatePassword }}</div>

      <div class="submit">
        <button>Sign up</button>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "SignUpView",
  data: function() {
    return {
      email: "",
      password: "",
      validatePassword: ""
    };
  },
  methods: {
    /* Validate password */
    // Method called when the form is submitted
    validateForm() {
      // Validate password conditions and display error message if not met
      const validationResults = this.validatePasswordConditions();
      //If all conditions are met, then 'create account', otherwise find and display unmet conditions
      this.validatePassword = validationResults.isValid ? "Account created successfully!" : this.generateErrorMessage(validationResults);
    },
    // Validate password against specified conditions
    validatePasswordConditions() {
      const conditions = {
        length: this.password.length >= 8 && this.password.length <= 14,
        uppercase: /[A-Z]/.test(this.password),
        lowercase: /[a-z].*[a-z]/.test(this.password),
        numeric: /\d/.test(this.password),
        startUppercase: /^[A-Z]/.test(this.password),
        underscore: /_/.test(this.password)
      };

      // Check if all conditions are met
      //every() method tests if all elements pass the 'test' (are true)
      const isValid = Object.values(conditions).every(condition => condition);
      //validationResults
      return { isValid, conditions };
    },
    // Generate error message based on invalid conditions
    generateErrorMessage(validationResults) {
      //First we pick/filter the false results, then create a new array that contains
      //the corresponding conditions that aren't met
      const invalidConditions = Object.keys(validationResults.conditions)
        .filter(key => !validationResults.conditions[key])
        .map(key => this.getReadableConditions(key));

      // Create user-friendly error message
      return `Password is not valid. Please follow these conditions: ${invalidConditions.join(", ")}.`;
    },
    // Provide description for each condition
    getReadableConditions(condition) {
      const conditionMap = {
        length: "have a length between 8 and 14 characters",
        uppercase: "include at least one uppercase letter",
        lowercase: "include at least two lowercase letters",
        numeric: "include at least one numeric value",
        startUppercase: "start with an uppercase letter",
        underscore: "include the character \"_\""
      };

      return conditionMap[condition];
    }
  }
};
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: rgba(51, 51, 51, 0.15);
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #8d8d8d;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: #42b983;
  border-radius: 5px;
}

button {
  background: #42b983;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

h2, .submit {
  text-align: center;
}
h2 {
  color: #42b983;
}
.error {
  color: red;
  font-size: 0.8em;
  margin-top: 10px;
  text-align: center;
}
</style>