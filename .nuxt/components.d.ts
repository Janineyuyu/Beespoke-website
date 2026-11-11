
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const CardsPillarCard: typeof import("../app/components/cards/PillarCard.vue")['default']
export const CardsProductCard: typeof import("../app/components/cards/ProductCard.vue")['default']
export const CardsServiceCard: typeof import("../app/components/cards/ServiceCard.vue")['default']
export const CardsStoryCard: typeof import("../app/components/cards/StoryCard.vue")['default']
export const FormsContactForm: typeof import("../app/components/forms/ContactForm.vue")['default']
export const FormsDemoDialog: typeof import("../app/components/forms/DemoDialog.vue")['default']
export const FormsFormNotice: typeof import("../app/components/forms/FormNotice.vue")['default']
export const FormsSubmitButton: typeof import("../app/components/forms/SubmitButton.vue")['default']
export const MockupsAcumenMockup: typeof import("../app/components/mockups/AcumenMockup.vue")['default']
export const MockupsAppWindow: typeof import("../app/components/mockups/AppWindow.vue")['default']
export const MockupsChismisMockup: typeof import("../app/components/mockups/ChismisMockup.vue")['default']
export const MockupsMockupAvatar: typeof import("../app/components/mockups/MockupAvatar.vue")['default']
export const MockupsMockupBar: typeof import("../app/components/mockups/MockupBar.vue")['default']
export const MockupsPresidioMockup: typeof import("../app/components/mockups/PresidioMockup.vue")['default']
export const MockupsProductMockup: typeof import("../app/components/mockups/ProductMockup.vue")['default']
export const MockupsProductScreen: typeof import("../app/components/mockups/ProductScreen.vue")['default']
export const MockupsSmartJuanMockup: typeof import("../app/components/mockups/SmartJuanMockup.vue")['default']
export const NavigationAppFooter: typeof import("../app/components/navigation/AppFooter.vue")['default']
export const NavigationAppHeader: typeof import("../app/components/navigation/AppHeader.vue")['default']
export const NavigationThemeToggle: typeof import("../app/components/navigation/ThemeToggle.vue")['default']
export const SectionsAboutSection: typeof import("../app/components/sections/AboutSection.vue")['default']
export const SectionsContactSection: typeof import("../app/components/sections/ContactSection.vue")['default']
export const SectionsCredibilitySection: typeof import("../app/components/sections/CredibilitySection.vue")['default']
export const SectionsDemoCtaSection: typeof import("../app/components/sections/DemoCtaSection.vue")['default']
export const SectionsEcosystemShowcase: typeof import("../app/components/sections/EcosystemShowcase.vue")['default']
export const SectionsFeaturesSection: typeof import("../app/components/sections/FeaturesSection.vue")['default']
export const SectionsHeroSection: typeof import("../app/components/sections/HeroSection.vue")['default']
export const SectionsProcessSection: typeof import("../app/components/sections/ProcessSection.vue")['default']
export const SectionsProductsSection: typeof import("../app/components/sections/ProductsSection.vue")['default']
export const SectionsStoriesSection: typeof import("../app/components/sections/StoriesSection.vue")['default']
export const UiArrowNudge: typeof import("../app/components/ui/UiArrowNudge.vue")['default']
export const UiButton: typeof import("../app/components/ui/UiButton.vue")['default']
export const UiContainer: typeof import("../app/components/ui/UiContainer.vue")['default']
export const UiEyebrow: typeof import("../app/components/ui/UiEyebrow.vue")['default']
export const UiLogo: typeof import("../app/components/ui/UiLogo.vue")['default']
export const UiPlaceholderTag: typeof import("../app/components/ui/UiPlaceholderTag.vue")['default']
export const UiReveal: typeof import("../app/components/ui/UiReveal.vue")['default']
export const UiSectionHeader: typeof import("../app/components/ui/UiSectionHeader.vue")['default']
export const UiSelectField: typeof import("../app/components/ui/UiSelectField.vue")['default']
export const UiSocialIcon: typeof import("../app/components/ui/UiSocialIcon.vue")['default']
export const UiTextAreaField: typeof import("../app/components/ui/UiTextAreaField.vue")['default']
export const UiTextField: typeof import("../app/components/ui/UiTextField.vue")['default']
/**
 * Displays the welcome screen used by new Nuxt projects.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-welcome
 */
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
/**
 * Renders the selected layout around pages or error content.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-layout
 */
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
/**
 * Catches client-side errors from its default slot and renders an error slot.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-error-boundary
 */
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
/**
 * Renders its default slot only on the client, with an optional server fallback.
 *
 * @see https://nuxt.com/docs/4.x/api/components/client-only
 */
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
/**
 * Renders its content only during development.
 *
 * @see https://nuxt.com/docs/4.x/api/components/dev-only
 */
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
/**
 * A drop-in replacement for Vue Router's `<RouterLink>` and the HTML `<a>` element.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-link
 */
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
/**
 * Displays a progress bar during page navigation.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-loading-indicator
 */
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
/**
 * Formats dates and times consistently across server and client using the user's locale.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-time
 */
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
/**
 * Announces route changes to assistive technologies using the current page title.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-route-announcer
 */
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
/**
 * Announces dynamic content changes to assistive technologies.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-announcer
 */
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
/**
 * Renders an optimized image through the Nuxt Image module.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-img
 */
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
/**
 * Renders responsive optimized images through the Nuxt Image module.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-picture
 */
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
/**
 * Renders the current page from the `pages/` directory.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-page
 */
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
/**
 * Renders a non-interactive server component without shipping client-side JavaScript.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-island
 */
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyCardsPillarCard: LazyComponent<typeof import("../app/components/cards/PillarCard.vue")['default']>
export const LazyCardsProductCard: LazyComponent<typeof import("../app/components/cards/ProductCard.vue")['default']>
export const LazyCardsServiceCard: LazyComponent<typeof import("../app/components/cards/ServiceCard.vue")['default']>
export const LazyCardsStoryCard: LazyComponent<typeof import("../app/components/cards/StoryCard.vue")['default']>
export const LazyFormsContactForm: LazyComponent<typeof import("../app/components/forms/ContactForm.vue")['default']>
export const LazyFormsDemoDialog: LazyComponent<typeof import("../app/components/forms/DemoDialog.vue")['default']>
export const LazyFormsFormNotice: LazyComponent<typeof import("../app/components/forms/FormNotice.vue")['default']>
export const LazyFormsSubmitButton: LazyComponent<typeof import("../app/components/forms/SubmitButton.vue")['default']>
export const LazyMockupsAcumenMockup: LazyComponent<typeof import("../app/components/mockups/AcumenMockup.vue")['default']>
export const LazyMockupsAppWindow: LazyComponent<typeof import("../app/components/mockups/AppWindow.vue")['default']>
export const LazyMockupsChismisMockup: LazyComponent<typeof import("../app/components/mockups/ChismisMockup.vue")['default']>
export const LazyMockupsMockupAvatar: LazyComponent<typeof import("../app/components/mockups/MockupAvatar.vue")['default']>
export const LazyMockupsMockupBar: LazyComponent<typeof import("../app/components/mockups/MockupBar.vue")['default']>
export const LazyMockupsPresidioMockup: LazyComponent<typeof import("../app/components/mockups/PresidioMockup.vue")['default']>
export const LazyMockupsProductMockup: LazyComponent<typeof import("../app/components/mockups/ProductMockup.vue")['default']>
export const LazyMockupsProductScreen: LazyComponent<typeof import("../app/components/mockups/ProductScreen.vue")['default']>
export const LazyMockupsSmartJuanMockup: LazyComponent<typeof import("../app/components/mockups/SmartJuanMockup.vue")['default']>
export const LazyNavigationAppFooter: LazyComponent<typeof import("../app/components/navigation/AppFooter.vue")['default']>
export const LazyNavigationAppHeader: LazyComponent<typeof import("../app/components/navigation/AppHeader.vue")['default']>
export const LazyNavigationThemeToggle: LazyComponent<typeof import("../app/components/navigation/ThemeToggle.vue")['default']>
export const LazySectionsAboutSection: LazyComponent<typeof import("../app/components/sections/AboutSection.vue")['default']>
export const LazySectionsContactSection: LazyComponent<typeof import("../app/components/sections/ContactSection.vue")['default']>
export const LazySectionsCredibilitySection: LazyComponent<typeof import("../app/components/sections/CredibilitySection.vue")['default']>
export const LazySectionsDemoCtaSection: LazyComponent<typeof import("../app/components/sections/DemoCtaSection.vue")['default']>
export const LazySectionsEcosystemShowcase: LazyComponent<typeof import("../app/components/sections/EcosystemShowcase.vue")['default']>
export const LazySectionsFeaturesSection: LazyComponent<typeof import("../app/components/sections/FeaturesSection.vue")['default']>
export const LazySectionsHeroSection: LazyComponent<typeof import("../app/components/sections/HeroSection.vue")['default']>
export const LazySectionsProcessSection: LazyComponent<typeof import("../app/components/sections/ProcessSection.vue")['default']>
export const LazySectionsProductsSection: LazyComponent<typeof import("../app/components/sections/ProductsSection.vue")['default']>
export const LazySectionsStoriesSection: LazyComponent<typeof import("../app/components/sections/StoriesSection.vue")['default']>
export const LazyUiArrowNudge: LazyComponent<typeof import("../app/components/ui/UiArrowNudge.vue")['default']>
export const LazyUiButton: LazyComponent<typeof import("../app/components/ui/UiButton.vue")['default']>
export const LazyUiContainer: LazyComponent<typeof import("../app/components/ui/UiContainer.vue")['default']>
export const LazyUiEyebrow: LazyComponent<typeof import("../app/components/ui/UiEyebrow.vue")['default']>
export const LazyUiLogo: LazyComponent<typeof import("../app/components/ui/UiLogo.vue")['default']>
export const LazyUiPlaceholderTag: LazyComponent<typeof import("../app/components/ui/UiPlaceholderTag.vue")['default']>
export const LazyUiReveal: LazyComponent<typeof import("../app/components/ui/UiReveal.vue")['default']>
export const LazyUiSectionHeader: LazyComponent<typeof import("../app/components/ui/UiSectionHeader.vue")['default']>
export const LazyUiSelectField: LazyComponent<typeof import("../app/components/ui/UiSelectField.vue")['default']>
export const LazyUiSocialIcon: LazyComponent<typeof import("../app/components/ui/UiSocialIcon.vue")['default']>
export const LazyUiTextAreaField: LazyComponent<typeof import("../app/components/ui/UiTextAreaField.vue")['default']>
export const LazyUiTextField: LazyComponent<typeof import("../app/components/ui/UiTextField.vue")['default']>
/**
 * Lazy-loaded version of `<NuxtWelcome>`.
 *
 * Displays the welcome screen used by new Nuxt projects.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-welcome
 */
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
/**
 * Lazy-loaded version of `<NuxtLayout>`.
 *
 * Renders the selected layout around pages or error content.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-layout
 */
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
/**
 * Lazy-loaded version of `<NuxtErrorBoundary>`.
 *
 * Catches client-side errors from its default slot and renders an error slot.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-error-boundary
 */
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
/**
 * Lazy-loaded version of `<ClientOnly>`.
 *
 * Renders its default slot only on the client, with an optional server fallback.
 *
 * @see https://nuxt.com/docs/4.x/api/components/client-only
 */
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
/**
 * Lazy-loaded version of `<DevOnly>`.
 *
 * Renders its content only during development.
 *
 * @see https://nuxt.com/docs/4.x/api/components/dev-only
 */
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
/**
 * Lazy-loaded version of `<NuxtLink>`.
 *
 * A drop-in replacement for Vue Router's `<RouterLink>` and the HTML `<a>` element.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-link
 */
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
/**
 * Lazy-loaded version of `<NuxtLoadingIndicator>`.
 *
 * Displays a progress bar during page navigation.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-loading-indicator
 */
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
/**
 * Lazy-loaded version of `<NuxtTime>`.
 *
 * Formats dates and times consistently across server and client using the user's locale.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-time
 */
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
/**
 * Lazy-loaded version of `<NuxtRouteAnnouncer>`.
 *
 * Announces route changes to assistive technologies using the current page title.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-route-announcer
 */
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
/**
 * Lazy-loaded version of `<NuxtAnnouncer>`.
 *
 * Announces dynamic content changes to assistive technologies.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-announcer
 */
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
/**
 * Lazy-loaded version of `<NuxtImg>`.
 *
 * Renders an optimized image through the Nuxt Image module.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-img
 */
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
/**
 * Lazy-loaded version of `<NuxtPicture>`.
 *
 * Renders responsive optimized images through the Nuxt Image module.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-picture
 */
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
/**
 * Lazy-loaded version of `<NuxtPage>`.
 *
 * Renders the current page from the `pages/` directory.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-page
 */
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
/**
 * Lazy-loaded version of `<NuxtIsland>`.
 *
 * Renders a non-interactive server component without shipping client-side JavaScript.
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-island
 */
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
