<template>
  <div>
    <HeroSection />
    <CredibilitySection />
    <ProductsSection />
    <FeaturesSection />
    <ProcessSection />
    <AboutSection />
    <StoriesSection />
    <ContactSection />
    <DemoCtaSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import CredibilitySection from '~/components/sections/CredibilitySection.vue'
import ProductsSection from '~/components/sections/ProductsSection.vue'
import FeaturesSection from '~/components/sections/FeaturesSection.vue'
import ProcessSection from '~/components/sections/ProcessSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import StoriesSection from '~/components/sections/StoriesSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import DemoCtaSection from '~/components/sections/DemoCtaSection.vue'

useSeoMeta({
  title: 'Beespoke Solutions | IT Solutions & Software Development',
  description:
    'Beespoke Solutions builds intelligent digital products and IT services, including Chismis, SmartJuan, Acumen, and Presidio, that help organizations operate smarter.',
})
</script>

