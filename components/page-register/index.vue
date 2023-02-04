<template>
  <div class="login-container">
    <div class="login-content">
      <div class="banner"></div>
      <div class="form">
        <div class="title-warp">
          <img class="title-logo" src="@/assets/images/logo.png" />
          <span class="title">德阳云购</span>
        </div>

        <a-form
          v-if="props.data?.loginType === 'register'"
          ref="registerFormRef"
          :model="loginForm"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <a-form-item name="account">
            <a-input
              ref="account"
              v-model:value="loginForm.account"
              placeholder="请输入手机号"
              name="account"
            >
            </a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input
              ref="password"
              v-model:value="loginForm.password"
              type="password"
              placeholder="请输入密码"
              name="password"
              press-enter="login"
            >
            </a-input>
          </a-form-item>
          <a-form-item name="verifyCode">
            <a-input
              ref="verifyCode"
              v-model:value="loginForm.verifyCode"
              placeholder="请输入验证码"
              name="verifyCode"
            >
            </a-input>
          </a-form-item>
          <a-form-item v-show="false" name="agree">
            <a-input
              ref="agree"
              v-model:value="loginForm.agree"
              type="agree"
              name="agree"
            >
            </a-input>
          </a-form-item>
          <a-row :gutter="16">
            <a-col>
              <a-button type="primary" @click="switchLogin"> 去登录 </a-button>
            </a-col>
            <a-col>
              <a-button type="primary" @click="register"> 注册 </a-button>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </div>
    <div class="footer">V {{ packageConfig.version }}</div>
  </div>
</template>
<script setup>
import packageConfig from '/package.json';
// 支持的登录类型
const LAYOUT_TYPE = {
  register: {
    form: {
      account: '',
      password: '',
      verifyCode: '',
      agree: 'ignore',
    },
  },
};
// props
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
const loginForm = ref({});
watch(
  () => props.data,
  (val) => {
    // if (!Object.keys(LAYOUT_TYPE).includes(val.loginType)) {
    //   ctx.emit('errorMsg', '不支持的登录类型');
    // }
    if (!val.loginType) return;
    console.log(LAYOUT_TYPE[val.loginType].form);
    loginForm.value = LAYOUT_TYPE[val.loginType].form;
    console.log(loginForm.value);
  },
  {
    immediate: true,
    deep: true,
  }
);
const loginFormRef = ref(null);

// 注册父组件事件
const emit = defineEmits(['onRouteChange']);

// 注册
const register = () => {
  loginFormRef.value
    .validate()
    .then(() => {
      console.log(props.data.registerApi, loginForm.value);
      // emit('login', loginForm.value);
    })
    .catch((err) => {
      throw err;
    });
};
// 切换到注册
const switchLogin = () => {
  emit('onRouteChange', props.data.switchLogin);
};
</script>

<style scoped lang="less">
.login {
  &-container {
    min-height: 100%;
    width: 100%;
    background-color: #88c7be;
    overflow: hidden;
    background-image: url('./src/assets/images/login-bg.png');
    background-size: cover;
  }

  &-content {
    width: 900px;
    height: 550px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: stretch;
    border-radius: 20px;
    overflow: hidden;

    .banner {
      width: 400px;
      background-image: url('./src/assets/images/login-banner.png');
      background-size: cover;
    }

    .form {
      flex: 1;
      background-color: #fff;

      .login-form {
        position: relative;
        max-width: 100%;
        padding: 0px 50px 0 50px;
        margin: 0 auto;
        overflow: hidden;
      }

      .title-warp {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 60px;

        .title-logo {
          width: 60px;
          height: 60px;
          background: url('./src/assets/images/logo.png');
          background-size: cover;
        }

        .title {
          margin: 10px auto 50px;
          font-size: 28px;
          font-weight: 800;
          color: #102642;
          /* margin: 0px auto 40px auto; */
          text-align: center;
        }
      }
    }
  }

  &-btn {
    width: 100%;
    background-color: #3766f4;
    height: 50px;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 400;
  }
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 0;
}
</style>
