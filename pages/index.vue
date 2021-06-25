<template>
  <div v-if="!isError">
    <v-card class="mx-auto mt-10">
      <v-card-text>
        <p class="text-h4 text--primary">فرم ویرایش پروفایل</p>

        <v-form ref="loginForm" @submit.prevent="handleSubmit">
          <v-row>
            <v-col cols="12" md="6">
              <label
                for="first_name"
                class="subtitle-1 gray--text text--darken-2"
              >
                نام
              </label>
              <v-text-field
                id="first_name"
                v-model="form.first_name"
                class="mt-2"
                outlined
                label="محمد"
                prepend-inner-icon="mdi-account"
                :rules="[(v) => required(v, 'نام')]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label
                for="code-melli"
                class="subtitle-1 gray--text text--darken-2"
              >
                نام خانوادگی
              </label>
              <v-text-field
                id="code-melli"
                v-model="form.last_name"
                class="mt-2"
                outlined
                label="محمدی"
                prepend-inner-icon="mdi-account-box"
                :rules="[(v) => required(v, 'نام خانوادگی')]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label for="address" class="subtitle-1 gray--text text--darken-2">
                آدرس
              </label>
              <v-text-field
                id="address"
                v-model="form.address"
                class="mt-2"
                outlined
                label="سعادت آباد، کوچه ..."
                prepend-inner-icon="mdi-map-marker"
                :rules="[(v) => required(v, 'آدرس')]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label for="school" class="subtitle-1 gray--text text--darken-2">
                مدرسه
              </label>
              <v-text-field
                id="school"
                v-model="form.school"
                class="mt-2"
                outlined
                label="محمدی"
                prepend-inner-icon="mdi-school"
                :rules="[(v) => required(v, 'مدرسه')]"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-btn color="primary" type="submit" class="mt-3">
            ویرایش پروفایل
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
  <p v-else>مشکلی پیش آمد. دوباره سعی کنید.</p>
</template>

<script>
const required = (v, name) => !!v || `فیلد ${name} الزامیست.`

export default {
  data: () => ({
    isError: false,
    form: {
      first_name: '',
      last_name: '',
      address: '',
      major_id: 0,
      gender_id: 0,
      shahr_id: '',
    },
  }),
  async fetch() {
    try {
      await this.$store.dispatch('getForm')
      const { first_name, last_name, address, major_id, gender_id, shahr_id } =
        this.$store.state.user.user

      this.form = {
        first_name,
        last_name,
        address,
        major_id,
        gender_id,
        shahr_id,
      }
    } catch (error) {
      this.isError = true
    }
  },
  methods: {
    handleSubmit() {},
    required,
  },
}
</script>
