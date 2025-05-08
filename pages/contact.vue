<script setup>
useHead({
  title: 'Contact | Christian Chiavelli',
  meta: [
    { name: 'description', content: 'Get in touch with Christian Chiavelli to discuss work opportunities, partnerships or frontend development projects.' }
  ]
});
</script>

<template>
  <main class="min-h-[calc(100vh-80px)] flex flex-col">
    <section class="w-full pt-24 pb-16 md:pt-36 md:pb-28 flex-grow">
      <div class="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          <div class="lg:col-span-7">
            <ContactForm />
          </div>

          <div class="lg:col-span-5 lg:pl-8">
            <div class="h-full animate-fade-in-up opacity-0 delay-500">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>