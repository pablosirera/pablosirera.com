<template>
  <section class="text-center flex flex-col justify-center items-center">
    <h2>¿En qué te puedo ayudar?</h2>

    <ContactForm @submit-form="handleSubmit" />
    <BaseAlert :show="showAlert" :has-icon="true" :theme="alertType" />
  </section>
</template>

<script>
import ContactForm from '~/components/contact/ContactForm.vue'
import BaseAlert from '~/components/ui/BaseAlert.vue'

export default {
  name: 'ContactMe',
  components: {
    BaseAlert,
    ContactForm,
  },
  data() {
    return {
      showAlert: false,
      alertType: '',
    }
  },
  methods: {
    encode(data) {
      const formData = new FormData()

      for (const key of Object.keys(data)) {
        formData.append(key, data[key])
      }

      return formData
    },
    async handleSubmit({ data, formName }) {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }

      try {
        await this.$axios.post(
          location.href,
          this.encode({
            'form-name': formName,
            ...data,
          }),
          axiosConfig
        )
        this.launchAlert('success')
      } catch (error) {
        this.launchAlert('error')
      }
    },
    launchAlert(type) {
      this.alertType = type
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000)
    },
  },
}
</script>
