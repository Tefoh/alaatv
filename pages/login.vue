<template>
  <v-card class="mx-auto" max-width="360">
    <v-card-text>
      <p class="text-h4 text--primary">فرم ورود</p>

      <v-form>
        <label for="cellphone" class="subtitle-1 gray--text text--darken-2">
          شماره تلفن
        </label>
        <v-text-field
          id="cellphone"
          class="mt-2"
          outlined
          label="*********09"
          prepend-inner-icon="mdi-cellphone-information"
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
        ></v-text-field>

        <v-checkbox>
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
        <v-btn color="primary" type="submit"> ورود </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  layout: 'guest',
  head: {
    title: 'صفحه ورود',
  },
}
</script>
