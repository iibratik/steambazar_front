<template>
  <div class="register">
    <div class="register__content">
      <h1 class="register__title">Регистрация на сайте</h1>
      <form action="#" class="register__form">
        <div class="form__input">
          <label for="login">Логин:</label>
          <input
            name="login"
            class="simple-input register__input"
            type="text"
            placeholder="Ваш логин"
          />
        </div>
        <div class="form__input">
          <label for="login">Email:</label>
          <input
            name="email"
            class="simple-input register__input"
            type="email"
            placeholder="Ваша эл.почта"
          />
        </div>
        <div class="form__input">
          <label for="password">Пароль:</label>
          <input
            name="password"
            class="simple-input register__input"
            type="password"
            placeholder="Ваш пароль"
          />
        </div>
        <div class="form__input">
          <label for="password">Подтвердите пароль:</label>
          <input
            name="password"
            class="simple-input register__input"
            type="password"
            placeholder="Ваш пароль"
          />
        </div>
        <button class="register__button" type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>
