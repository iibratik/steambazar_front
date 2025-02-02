<template>
  <div class="register">
    <div class="register__content">
      <h1 class="register__title">Регистрация на сайте</h1>
      <form @submit.prevent class="register__form">
        <div class="form__input">
          <label for="username">Имя пользователя:</label>
          <input name="username" autocomplete="on" id="username" @input="checkUsernameValue"
            v-model="formInputs.username" class="simple-input register__input" type="text"
            placeholder="Имя пользователя" />
        </div>
        <div class="form__input">
          <label for="email">Email:</label>
          <input name="email" class="simple-input register__input" type="email" @input="checkEmailValue"
            v-model="formInputs.email" id="email" autocomplete="on" placeholder="Ваша эл.почта" />
        </div>
        <div class="form__input">
          <label for="password">Пароль:</label>
          <input name="password" autocomplete="on" v-model="formInputs.password" id="password"
            @input="checkPasswordValue" class="simple-input register__input" type="password" placeholder="Ваш пароль" />
        </div>
        <div class="form__input">
          <label for="password">Подтвердите пароль:</label>
          <input name="password" class="simple-input register__input" type="password" id="passwordSubmit"
            @input="checkPasswordSubmit" v-model="passwordSubmit" autocomplete="on"
            placeholder="Ваш пароль" />
        </div>
        <button @click="sendUserData" class="register__button" type="submit">Отправить</button>
      </form>
    </div>
    <div v-if="errors.length != 0" class="form__errors">
      <ul class="form__errors-lists">
        <li v-for="(item, index) in errors" :key="index" class="error__list">
          <p class="error">{{ item }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      formInputs: {
        username: "",
        email: "",
        password: "",
      },
      passwordSubmit:'',
      errors: []
    };
  },
  setup() {
    mapActions(['createUser']);
  },
  methods: {
    ...mapActions(['createUser']),
    checkUsernameValue() {
      const regex = /^[A-Z][a-zA-Z0-9_]*$/;
      const errorMessage = 'Имя пользователя должно начинаться с заглавной буквы и состоять только из латинских букв, цифр и символа _.';
      // Проверка, соответствует ли username регулярному выражению
      if (regex.test(this.formInputs.username)) {
        this.removeError(errorMessage);
      } else {
        this.addError(errorMessage);
      }
    },
    checkEmailValue() {
      // Простое регулярное выражение для валидации email
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const errorMessage = 'Введите корректный email адресс';
      if (regex.test(this.formInputs.email)) {
        this.removeError(errorMessage);
      } else {
        this.addError(errorMessage);
      }
    },
    checkPasswordValue() {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const errorMessage = 'Пароль должен быть не менее 8 символов в длине и содержать минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ (@, #, $ и т.д.).';

      if (regex.test(this.formInputs.password)) {
        this.removeError(errorMessage);
      } else {
        this.addError(errorMessage);
      }
    },
    checkPasswordSubmit() {
      const errorMessage = 'Пароли не совпадают'
      if (this.formInputs.password == this.passwordSubmit) {
        this.removeError(errorMessage);
      } else {
        this.addError(errorMessage);

      }
    },
    addError(errorMessage) {
      if (!this.errors.includes(errorMessage)) {
        this.errors.push(errorMessage);
      }
    },
    removeError(errorMessage) {
      const errorIndex = this.errors.indexOf(errorMessage);
      if (errorIndex !== -1) {
        this.errors.splice(errorIndex, 1);
      }
    },

    sendUserData() {
      this.checkUsernameValue();
      this.checkEmailValue();
      this.checkPasswordValue();
      this.checkPasswordSubmit();
      if (this.errors.length === 0) {
        this.createUser(this.formInputs);
      } else {
        return
      }
    }
  },
};
</script>
