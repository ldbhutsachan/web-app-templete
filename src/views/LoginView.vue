<script setup>
const emit = defineEmits(["login"]);
</script>

<template>
  <div class="login-page">
    <div class="login-card">
      <header>
        <div class="logo"><span class="dot"></span> Light Blue</div>
        <h4>Sign in to your account</h4>
      </header>
      <form class="login-form" @submit.prevent="emit('login')">
        <label for="email">Email</label>
        <div class="input-group">
          <i class="fa-solid fa-user"></i>
          <input id="email" type="email" placeholder="Your email" autocomplete="username" />
        </div>

        <label for="password">Password</label>
        <div class="input-group">
          <i class="fa-solid fa-lock"></i>
          <input id="password" type="password" placeholder="Your password" autocomplete="current-password" />
        </div>

        <button type="submit" class="btn-submit">
          Sign In <i class="fa-solid fa-arrow-right"></i>
        </button>
        <a class="forgot" href="#" @click.prevent>Forgot your password?</a>
      </form>
      <footer>
        <button type="button" class="btn-social" @click="emit('login')">
          <i class="fa-brands fa-facebook"></i> Continue with Facebook
        </button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 20% 20%, rgba(57, 121, 246, 0.18), transparent 45%),
    linear-gradient(135deg, #232a4d 0%, #1a2038 100%);
  padding: 24px;
}
.login-card {
  width: 100%;
  max-width: 380px;
  background: var(--color-surface, #fff);
  border-radius: var(--radius-md);
  padding: 34px 32px;
  box-shadow: 0 20px 45px -20px rgba(0, 0, 0, 0.4);
}
header {
  text-align: center;
  margin-bottom: 26px;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  color: var(--color-text-dark);
  margin-bottom: 18px;
}
.logo .dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-info));
  display: inline-block;
}
header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-dark);
}
.login-form {
  display: flex;
  flex-direction: column;
}
.login-form label {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--color-gray);
  margin-bottom: 6px;
}
.input-group {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 11px 14px;
  margin-bottom: 18px;
  background: var(--color-bg);
}
.input-group i {
  color: var(--color-gray);
  font-size: 13px;
}
.input-group input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-family: inherit;
  font-size: 13px;
  color: var(--color-text-dark);
}
.btn-submit {
  border: none;
  border-radius: 8px;
  padding: 12px;
  background: var(--color-danger);
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.forgot {
  text-align: center;
  margin-top: 14px;
  font-size: 12px;
  color: var(--color-gray);
}
footer {
  margin-top: 22px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}
.btn-social {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 10px;
  background: transparent;
  color: var(--color-text-dark);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.btn-social i {
  color: #1877f2;
}
</style>
