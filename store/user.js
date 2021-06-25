export const state = () => ({
  id: 0,
  mobile: '',
  mobile_verified_at: null,
  first_name: null,
  last_name: null,
  national_code: '',
  photo: '',
  province: null,
  city: null,
  address: null,
  school: null,
  major: {
    id: 0,
    name: '',
    title: '',
  },
  grade: {
    id: 0,
    name: '',
    title: '',
  },
  gender: {
    id: 0,
    name: '',
    title: '',
  },
  shahr: {
    id: 0,
    title: '',
    province: {
      id: 0,
      title: '',
    },
  },
})
