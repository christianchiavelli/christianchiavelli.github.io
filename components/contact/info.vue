<script setup>
import { Icon } from '@iconify/vue';

const availability = {
  status: 'available',
  message: 'Available for projects starting June 2025',
  responseTime: 'Response within 24-48 hours on business days'
};

const getCurrentStatus = () => {
  switch (availability.status) {
    case 'available':
      return { color: 'bg-emerald-500', text: 'Available' };
    case 'limited':
      return { color: 'bg-amber-500', text: 'Limited availability' };
    case 'unavailable':
      return { color: 'bg-red-500', text: 'Unavailable' };
    default:
      return { color: 'bg-emerald-500', text: 'Available' };
  }
};

const statusInfo = computed(() => getCurrentStatus());
</script>

<template>
  <div class="space-y-12">
    <!-- Professional experience -->
    <div
      class="bg-gradient-to-br from-white to-gray-50 border border-gray-100 text-primary p-8 rounded-xl shadow-md relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 opacity-5 mix-blend-overlay">
        <div
          class="h-full w-full bg-[repeating-linear-gradient(45deg,#f3f4f6,#f3f4f6_1px,transparent_1px,transparent_12px)]">
        </div>
      </div>

      <!-- Dynamic accent element -->
      <div
        class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gray-200 via-gray-100 to-transparent rounded-bl-[100px] -translate-y-1/2 translate-x-1/2 transition-all duration-500 group-hover:scale-110">
      </div>

      <!-- Subtle animated accent -->
      <div
        class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100 to-transparent rounded-tr-[80px] translate-y-1/3 -translate-x-1/3 opacity-70 group-hover:opacity-90 transition-all duration-700">
      </div>

      <!-- Content -->
      <div class="relative z-10">
        <div class="flex items-center mb-4">
          <div class="h-6 w-1 bg-gradient-to-b from-gray-900 to-gray-600 rounded-full mr-3"></div>
          <div class="text-xs font-semibold text-gray-800 tracking-[0.2em] uppercase">PROFESSIONAL EXPERIENCE</div>
        </div>

        <div class="text-5xl font-bold mb-5 font-heading tracking-tight text-gray-900">+7 <span
            class="text-3xl text-gray-800">years</span></div>

        <div class="flex items-center space-x-5 mb-6">
          <div class="flex-1">
            <div class="flex justify-between text-xs text-gray-500 mb-1">
              <span>Development</span>
              <span>Expert</span>
            </div>
            <div class="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-gray-800 to-gray-600 w-[87%] rounded-full relative">
                <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-gray-600 text-sm leading-relaxed">
          Transforming concepts into high-impact digital experiences for
          globally recognized brands in technology and business.
        </p>
      </div>
    </div>

    <!-- Availability status -->
    <div
      class="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div class="bg-gradient-to-r from-gray-50 to-white p-6">
        <div class="flex items-center mb-3">
          <div class="relative mr-3 flex items-center justify-center">
            <!-- Fixed status dot to ensure perfect circle -->
            <span class="inline-block w-4 h-4 rounded-full" :class="statusInfo.color"></span>
            <!-- Fixed ping animation to ensure perfect circle -->
            <span class="absolute w-4 h-4 rounded-full animate-ping opacity-50" :class="statusInfo.color"
              style="top: 0; left: 0;"></span>
          </div>
          <span class="font-medium text-lg text-gray-800">{{ statusInfo.text }} for new projects</span>
        </div>
        <p class="text-gray-600 text-sm pl-7">{{ availability.message }}</p>
      </div>
      <div class="p-6 bg-white border-t border-gray-100">
        <div class="flex items-center">
          <Icon icon="heroicons:clock" class="w-5 h-5 text-gray-400 mr-2" />
          <span class="text-gray-600 text-sm">{{ availability.responseTime }}</span>
        </div>
      </div>
    </div>

    <!-- Value Proposition Section -->
    <div
      class="bg-gradient-to-b from-white to-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
      <!-- Subtle graphic element -->
      <div
        class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-70">
      </div>

      <div class="relative">
        <div class="flex items-center mb-7">
          <div class="h-6 w-1 bg-gradient-to-b from-gray-900 to-gray-600 rounded-full mr-3"></div>
          <h3 class="text-sm font-semibold tracking-[0.2em] uppercase text-gray-800">WHAT YOU GET</h3>
        </div>

        <div class="space-y-6">
          <div
            class="flex items-start group bg-white p-4 rounded-lg border border-transparent hover:border-gray-100 transition-all duration-300">
            <div
              class="mt-1 p-2.5 rounded-full bg-gray-100 text-gray-700 mr-4 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
              <Icon icon="heroicons:rocket-launch" class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-medium text-gray-900 mb-1">Strategic execution</h4>
              <p class="text-gray-600 text-sm leading-relaxed">Transforming complex requirements into elegant,
                high-performance solutions that deliver real business outcomes.</p>
            </div>
          </div>

          <div
            class="flex items-start group bg-white p-4 rounded-lg border border-transparent hover:border-gray-100 transition-all duration-300">
            <div
              class="mt-1 p-2.5 rounded-full bg-gray-100 text-gray-700 mr-4 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
              <Icon icon="heroicons:light-bulb" class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-medium text-gray-900 mb-1">Elevated user experience</h4>
              <p class="text-gray-600 text-sm leading-relaxed">Interfaces that captivate users and drive engagement
                through thoughtfully crafted interaction design.</p>
            </div>
          </div>

          <div
            class="flex items-start group bg-white p-4 rounded-lg border border-transparent hover:border-gray-100 transition-all duration-300">
            <div
              class="mt-1 p-2.5 rounded-full bg-gray-100 text-gray-700 mr-4 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
              <Icon icon="heroicons:code-bracket" class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-medium text-gray-900 mb-1">Future-proof architecture</h4>
              <p class="text-gray-600 text-sm leading-relaxed">Scalable codebase built on industry standards that grows
                with your business and adapts to evolving needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>