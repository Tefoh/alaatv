<template>
  <v-card class="mx-auto" max-width="360">
    <v-card-text>
      <p class="text-h4 text--primary">فرم ورود</p>

      <v-form ref="loginForm" @submit.prevent="handleSubmit">
        <label for="cellphone" class="subtitle-1 gray--text text--darken-2">
          شماره تلفن
        </label>
        <v-text-field
          id="cellphone"
          v-model="form.mobile"
          class="mt-2"
          outlined
          label="*********09"
          prepend-inner-icon="mdi-cellphone-information"
          :rules="[(v) => required(v, 'شماره تلفن'), cellphoneLength]"
          :error-messages="mobileError"
        ></v-text-field>

        <label for="code-melli" class="subtitle-1 gray--text text--darken-2">
          کد ملی
        </label>
        <v-text-field
          id="code-melli"
          v-model="form.password"
          class="mt-2"
          outlined
          label="---"
          prepend-inner-icon="mdi-lock"
          :rules="[(v) => required(v, 'کد ملی'), codemelliLength]"
          :error-messages="codeMelliError"
        ></v-text-field>

        <v-checkbox :rules="[(v) => !!v || 'باید قوانین سایت را بپزیرید']">
          <template #label>
            <div>
              <a
                href="https://tefo.ir"
                target="_blank"
                class="text-decoration-none blue--text"
                @click.stop
              >
                قوانین سایت
              </a>
              مورد تایید من میباشد.
            </div>
          </template>
        </v-checkbox>
        <v-btn color="primary" type="submit" class="mt-3"> ورود </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import Cookie from 'js-cookie'
import { USER_SET_USER } from '~/store/types/user.type'
const cookies = Cookie.withConverter({
  write(value) {
    return typeof value === 'object' ? JSON.stringify(value) : value
  },
})

const required = (v, name) => !!v || `فیلد ${name} الزامیست.`
const cellphoneLength = (v) =>
  (v && v.length === 11) || `فیلد موبایل را درست وارد کنید.`

const codemelliLength = (v) =>
  (v && v.length === 10) || `فیلد کد ملی را درست وارد کنید.`

export default {
  layout: 'guest',
  middleware: ['guest'],
  data: () => ({
    required,
    cellphoneLength,
    codemelliLength,
    form: {
      mobile: '',
      password: '',
    },
    mobileError: '',
    codeMelliError: '',
  }),
  head: {
    title: 'صفحه ورود',
  },
  methods: {
    async handleSubmit() {
      if (this.$refs.loginForm.validate()) {
        try {
          const { data } = await this.$axios.post('/login', this.form)
          const { access_token, token_expires_at, token_type, user } = data.data

          cookies.set(
            'token',
            JSON.stringify({
              access_token,
              token_expires_at,
              token_type,
            })
          )
          cookies.set('user', JSON.stringify(user))
          cookies.set('access_token', access_token)

          this.$store.commit(USER_SET_USER, user)

          this.$axios.setToken(access_token, 'Bearer')

          this.$router.push({ name: 'index' })
        } catch (error) {
          const errors = error?.response?.data?.errors
          this.mobileError = errors?.mobile?.[0]
          this.codeMelliError = errors?.nationalCode?.[0]
        }
      }
    },
  },
}
</script>
