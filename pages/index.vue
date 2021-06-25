<template>
  <div v-if="!isError">
    <v-card class="mx-auto mt-10">
      <v-card-text>
        <p class="text-h4 text--primary">فرم ویرایش پروفایل</p>

        <v-form ref="profileForm" @submit.prevent="handleSubmit">
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
                for="last_name"
                class="subtitle-1 gray--text text--darken-2"
              >
                نام خانوادگی
              </label>
              <v-text-field
                id="last_name"
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
                label="گل محمدی"
                prepend-inner-icon="mdi-school"
                :rules="[(v) => required(v, 'مدرسه')]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <label for="major" class="subtitle-1 gray--text text--darken-2">
                رشته
              </label>

              <v-select
                id="major"
                v-model="form.major_id"
                :items="$store.state.majors.majors"
                item-text="name"
                item-value="id"
                label="رشته خود را انتخاب کنید"
                :rules="[(v) => required(v, 'رشته')]"
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label for="grade" class="subtitle-1 gray--text text--darken-2">
                مقطع تحصیلی
              </label>

              <v-select
                id="grade"
                v-model="form.grade_id"
                :items="$store.state.grades.grades"
                item-text="name"
                item-value="id"
                label="مقطع تحصیلی خود را انتخاب کنید"
                :rules="[(v) => required(v, 'مقطع تحصیلی')]"
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <label for="gender" class="subtitle-1 gray--text text--darken-2">
                جنسیت
              </label>

              <v-select
                id="gender"
                v-model="form.gender_id"
                :items="$store.state.genders.genders"
                item-text="name"
                item-value="id"
                label="جنسیت خود را انتخاب کنید"
                :rules="[(v) => required(v, 'جنسیت')]"
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <label
                for="province"
                class="subtitle-1 gray--text text--darken-2"
              >
                استان
              </label>

              <v-autocomplete
                id="province"
                v-model="province_id"
                :items="$store.state.provinces.provinces"
                item-text="title"
                no-data-text="استانی پیدا نشد."
                item-value="id"
                :rules="[(v) => required(v, 'استان')]"
                label="استان خود را انتخاب کنید"
                outlined
              ></v-autocomplete>
            </v-col>

            <v-col cols="12" md="6">
              <label for="shahr" class="subtitle-1 gray--text text--darken-2">
                شهر
              </label>

              <v-autocomplete
                id="shahr"
                v-model="form.shahr_id"
                :items="myCities"
                no-data-text="شهری پیدا نشد."
                item-text="title"
                item-value="id"
                :rules="[(v) => required(v, 'شهر')]"
                label="شهر خود را انتخاب کنید (اول استان را انتخاب کنید)."
                outlined
              ></v-autocomplete>
            </v-col>
          </v-row>

          <p v-if="errorMessage">فیلد ها را از اول بررسی کنید.</p>

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
// import Cookie from 'js-cookie'
// const cookies = Cookie.withConverter({
//   write(value) {
//     return typeof value === 'object' ? JSON.stringify(value) : value
//   },
// })

const required = (v, name) => !!v || `فیلد ${name} الزامیست.`

export default {
  data() {
    return {
      isError: false,
      errorMessage: false,
      province_id: null,
      form: {
        first_name: '',
        last_name: '',
        address: '',
        major_id: 0,
        gender_id: 0,
        shahr_id: '',
      },
      myCities: [],
    }
  },
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

      // this.myCities = this.$store.state.cities.cities
    } catch (error) {
      this.isError = true
    }
  },
  watch: {
    province_id(newValue) {
      if (!newValue) {
        this.myCities = this.$store.state.cities.cities
      } else {
        this.myCities = this.$store.state.cities.cities.filter(
          (city) => city?.province?.id === Number(newValue)
        )
      }
    },
    // 'form.shahr_id'(newValue) {
    //   this.province_id = this.$store.state.cities.cities.find(
    //     (city) => city.id === newValue
    //   )?.province?.id
    // },
  },
  methods: {
    async handleSubmit() {
      try {
        await this.$axios.put(
          `/user/${this.$store.state.user.user.id}`,
          this.form
        )
        // cookies.set('user', JSON.stringify(user))
      } catch (error) {
        this.errorMessage = true
      }
    },
    required,
  },
}
</script>
