<template>
  <div class="form_wrapper">
    <div class="form_container">
      <div class="title_container">
        <h2>Responsive Registration Form</h2>
      </div>
      <div class="row clearfix">
        <div class="">
          <form @submit.prevent="submitForm">
            <div class="input_field" :class="{ error: errors.email }">
              <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
              <input
                v-model.trim="formData.email"
                type="email"
                name="email"
                placeholder="Email"
              />
              <span v-if="errors.email" class="error-message">{{
                errors.email
              }}</span>
            </div>
            <div class="input_field" :class="{ error: errors.password }">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input
                v-model.trim="formData.password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span v-if="errors.password" class="error-message">{{
                errors.password
              }}</span>
            </div>
            <div class="input_field" :class="{ error: errors.confirmPassword }">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input
                v-model.trim="formData.confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Re-type Password"
              />
              <span v-if="errors.confirmPassword" class="error-message">{{
                errors.confirmPassword
              }}</span>
            </div>
            <div class="input_field checkbox_option">
              <input v-model="formData.agreeTerms" type="checkbox" id="cb1" />
              <label for="cb1">I agree with terms and conditions</label>
            </div>
            <input
              class="button"
              type="submit"
              @click="
                () => {
                  someFun(asdasdasd)
                }
              "
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
      },
      errors: {},
    }
  },
  methods: {
    submitForm() {
      // Сброс предыдущих ошибок
      this.errors = {}

      // Проведение валидации
      if (!this.formData.email) {
        this.errors.email = 'Email is required'
      } else if (!this.validEmail(this.formData.email)) {
        this.errors.email = 'Please enter a valid email'
      }

      if (!this.formData.password) {
        this.errors.password = 'Password is required'
      }

      if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match'
      }

      if (!this.formData.agreeTerms) {
        this.errors.agreeTerms = 'Please agree to terms and conditions'
      }

      // Если ошибок нет, отправляем форму
      if (Object.keys(this.errors).length === 0) {
        // Здесь может быть логика отправки данных
        console.log('Form submitted successfully')
      } else {
        // Обработка ошибок формы
        console.log('Form has errors')
      }
    },
    validEmail(email) {
      // Пример простой валидации email
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    },
  },
}
</script>

<style>
/* Стили вашей формы */
.error {
  border: 1px solid red;
}
.error-message {
  color: red;
}
</style>
