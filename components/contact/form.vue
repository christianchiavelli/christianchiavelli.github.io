<script setup>
import { Icon } from '@iconify/vue';

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const characterCount = ref(0);
const maxCharacters = 1000;
const emailError = ref(false);
const isSubmitting = ref(false);
const isSuccess = ref(false);
const isError = ref(false);
const formSubmitted = ref(false);
const formRef = ref(null);
const touchedFields = reactive({
  name: false,
  email: false,
  subject: false,
  message: false
});

const validateEmail = () => {
  if (!formData.email) return;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailRegex.test(formData.email);
};

const updateCharCount = (e) => {
  characterCount.value = e.target.value.length;
};

const markAsTouched = (field) => {
  touchedFields[field] = true;
};

const resetForm = () => {
  formData.name = '';
  formData.email = '';
  formData.subject = '';
  formData.message = '';
  characterCount.value = 0;
  isSuccess.value = false;
  formSubmitted.value = false;

  Object.keys(touchedFields).forEach(field => touchedFields[field] = false);

  setTimeout(() => {
    if (formRef.value) {
      const nameInput = formRef.value.querySelector('#name');
      if (nameInput) nameInput.focus();
    }
  }, 100);
};

const submitForm = async () => {
  // Marca todos os campos como tocados ao tentar enviar o formulário
  Object.keys(touchedFields).forEach(field => touchedFields[field] = true);
  validateEmail();

  if (emailError.value) {
    return;
  }

  isSubmitting.value = true;

  try {
    await new Promise(resolve => setTimeout(resolve, 1500));

    isSuccess.value = true;
    formSubmitted.value = true;

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);

  } catch (error) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 5000);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="w-full animate-fade-in-slow opacity-0 contact-form-container">
    <h1 class="heading-2 mb-8 animate-fade-in-up opacity-0 delay-300">Get in touch.</h1>

    <p class="body-large mb-12 text-secondary animate-fade-in-up opacity-0 delay-400 max-w-2xl">
      Do you fancy saying hi to me or you want to get started with your project and
      you need my help? Feel free to contact me.
    </p>

    <!-- Estado de sucesso após envio -->
    <div v-if="formSubmitted" class="space-y-8 animate-fade-in-scale">
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-lg border border-emerald-100">
        <div class="flex items-start">
          <div class="bg-emerald-100 rounded-full p-2 mr-4">
            <Icon icon="heroicons:check" class="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 class="font-semibold text-xl mb-2 text-primary">Your message has been sent!</h3>
            <p class="text-secondary mb-6">
              Thank you for reaching out. I'll review your message and get back to you as soon as possible.
              You can expect a response within 24-48 hours on business days.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mt-6">
              <button @click="resetForm"
                class="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 bg-white rounded-md hover:border-primary hover:text-primary transition-colors">
                <Icon icon="heroicons:envelope" class="w-5 h-5 mr-2" />
                Send another message
              </button>
              <a href="/"
                class="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 rounded-md hover:border-primary hover:text-primary transition-colors">
                <Icon icon="heroicons:home" class="w-5 h-5 mr-2" />
                Return to homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form v-else ref="formRef" @submit.prevent="submitForm" class="space-y-10 max-w-3xl" novalidate>
      <div class="animate-fade-in-up opacity-0 delay-500 group">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-600">Name</label>
        <div class="relative">
          <input type="text" id="name" v-model="formData.name" @blur="markAsTouched('name')"
            class="w-full bg-transparent border-0 border-b-2 px-0 py-3 focus:ring-0 transition-colors outline-none text-lg"
            :class="[
              !formData.name && touchedFields.name ? 'border-red-400' : 'border-neutral-200 focus:border-primary'
            ]" placeholder="Let us know your name" required>
          <div v-if="!formData.name && touchedFields.name"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-red-500">
            <Icon icon="mdi:alert-circle-outline" class="w-5 h-5" />
          </div>
        </div>
        <div v-if="!formData.name && touchedFields.name" class="mt-2 text-xs text-red-500 font-medium animate-fade-in">
          Please fill out this field.
        </div>
      </div>

      <div class="animate-fade-in-up opacity-0 delay-600">
        <div class="relative">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>
          <div class="relative">
            <input type="email" id="email" v-model="formData.email" @blur="validateEmail(); markAsTouched('email')"
              class="w-full bg-transparent border-0 border-b-2 px-0 py-3 focus:ring-0 transition-colors outline-none text-lg"
              :class="[
                (!formData.email && touchedFields.email) || emailError ? 'border-red-400' : 'border-neutral-200 focus:border-primary'
              ]" placeholder="Where we'll send our response" required>
            <div v-if="(!formData.email && touchedFields.email) || emailError"
              class="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-red-500">
              <Icon icon="mdi:alert-circle-outline" class="w-5 h-5" />
            </div>
          </div>
          <div v-if="!formData.email && touchedFields.email"
            class="mt-2 text-xs text-red-500 font-medium animate-fade-in">
            Please fill out this field.
          </div>
          <div v-else-if="emailError" class="mt-2 text-xs text-red-500 font-medium animate-fade-in">
            Please enter a valid email address.
          </div>
        </div>
      </div>

      <div class="animate-fade-in-up opacity-0 delay-700">
        <label for="subject" class="block mb-2 text-sm font-medium text-gray-600">Subject</label>
        <div class="relative">
          <input type="text" id="subject" v-model="formData.subject" @blur="markAsTouched('subject')"
            class="w-full bg-transparent border-0 border-b-2 px-0 py-3 focus:ring-0 transition-colors outline-none text-lg"
            :class="[
              !formData.subject && touchedFields.subject ? 'border-red-400' : 'border-neutral-200 focus:border-primary'
            ]" placeholder="What's this about?" required>
          <div v-if="!formData.subject && touchedFields.subject"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-red-500">
            <Icon icon="mdi:alert-circle-outline" class="w-5 h-5" />
          </div>
        </div>
        <div v-if="!formData.subject && touchedFields.subject"
          class="mt-2 text-xs text-red-500 font-medium animate-fade-in">
          Please fill out this field.
        </div>
      </div>

      <div class="animate-fade-in-up opacity-0 delay-800">
        <div class="relative">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-600">Message</label>
          <div class="relative">
            <textarea id="message" v-model="formData.message" @input="updateCharCount" @blur="markAsTouched('message')"
              class="w-full bg-transparent border-0 border-b-2 px-0 py-3 focus:ring-0 transition-colors outline-none min-h-[150px] resize-y text-lg"
              :class="[
                !formData.message && touchedFields.message ? 'border-red-400' : 'border-neutral-200 focus:border-primary'
              ]" placeholder="Tell me about your project, ideas or questions..." maxlength="1000" required></textarea>
            <div v-if="!formData.message && touchedFields.message"
              class="absolute right-0 top-6 flex items-center space-x-2 text-red-500">
              <Icon icon="mdi:alert-circle-outline" class="w-5 h-5" />
            </div>
          </div>
          <div class="mt-2 flex justify-between items-center">
            <div v-if="!formData.message && touchedFields.message"
              class="text-xs text-red-500 font-medium animate-fade-in">
              Please fill out this field.
            </div>
            <div class="text-xs text-neutral-500 ml-auto">
              {{ characterCount }}/{{ maxCharacters }} characters
            </div>
          </div>
        </div>
      </div>

      <div class="animate-fade-in-up opacity-0 delay-900">
        <button type="submit" :disabled="isSubmitting"
          class="inline-block relative transition-opacity duration-300 hover:opacity-90 h-[72px] group">
          <div class="relative flex items-center">
            <div
              class="w-[72px] h-[72px] bg-gray-200 rounded-full absolute left-0 -z-10 transition-transform duration-300 ease-out group-hover:scale-110">
            </div>

            <div class="flex items-center pl-6">
              <span class="font-body text-base font-semibold leading-tight tracking-wide">
                {{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE' }}
              </span>

              <div class="relative ml-3 transition-all duration-300 ease-in-out">
                <svg v-if="!isSubmitting" width="20" height="8" viewBox="0 0 20 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transform transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  <path d="M19 4L15 1M19 4L15 7M19 4L1 4" stroke="black" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" class="transition-all duration-300 group-hover:opacity-100" />
                </svg>
                <span v-else class="inline-block">
                  <Icon icon="mdi:loading" class="w-5 h-5 animate-spin" />
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>

      <div v-if="isError" class="animate-fade-in mt-8">
        <div class="border-l-4 border-red-500 bg-red-50/30 p-4 rounded-sm flex items-center">
          <Icon icon="mdi:alert-circle" class="w-5 h-5 text-red-500 mr-3" />
          <span class="text-red-700">Failed to send message. Please try again later.</span>
        </div>
      </div>
    </form>
  </div>
</template>