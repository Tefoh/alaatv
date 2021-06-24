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
          class="mt-2"
          outlined
          label="*********09"
          prepend-inner-icon="mdi-cellphone-information"
          :rules="[(v) => required(v, 'شماره تلفن'), cellphoneLength]"
        ></v-text-field>

        <label for="code-melli" class="subtitle-1 gray--text text--darken-2">
          کد ملی
        </label>
        <v-text-field
          id="code-melli"
          class="mt-2"
          outlined
          label="---"
          prepend-inner-icon="mdi-lock"
          :rules="[(v) => required(v, 'کد ملی'), codemelliLength]"
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
const required = (v, name) => !!v || `فیلد ${name} الزامیست.`
const cellphoneLength = (v) =>
  (v && v.length === 11) || `فیلد موبایل را درست وارد کنید.`

const codemelliLength = (v) =>
  (v && v.length === 10) || `فیلد کد ملی را درست وارد کنید.`

export default {
  layout: 'guest',
  data: () => ({
    required,
    cellphoneLength,
    codemelliLength,
  }),
  head: {
    title: 'صفحه ورود',
  },
  methods: {
    handleSubmit() {
      if (this.$refs.loginForm.validate()) {
        console.log('validated')
      }
    },
  },
}
</script>
