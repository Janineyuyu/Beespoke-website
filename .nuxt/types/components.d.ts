
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

interface _GlobalComponents {
  CardsPillarCard: typeof import("../../app/components/cards/PillarCard.vue")['default']
  CardsProductCard: typeof import("../../app/components/cards/ProductCard.vue")['default']
  CardsServiceCard: typeof import("../../app/components/cards/ServiceCard.vue")['default']
  CardsStoryCard: typeof import("../../app/components/cards/StoryCard.vue")['default']
  FormsContactForm: typeof import("../../app/components/forms/ContactForm.vue")['default']
  FormsDemoDialog: typeof import("../../app/components/forms/DemoDialog.vue")['default']
  FormsFormNotice: typeof import("../../app/components/forms/FormNotice.vue")['default']
  FormsSubmitButton: typeof import("../../app/components/forms/SubmitButton.vue")['default']
  MockupsAcumenMockup: typeof import("../../app/components/mockups/AcumenMockup.vue")['default']
  MockupsAppWindow: typeof import("../../app/components/mockups/AppWindow.vue")['default']
  MockupsChismisMockup: typeof import("../../app/components/mockups/ChismisMockup.vue")['default']
  MockupsMockupAvatar: typeof import("../../app/components/mockups/MockupAvatar.vue")['default']
  MockupsMockupBar: typeof import("../../app/components/mockups/MockupBar.vue")['default']
  MockupsPresidioMockup: typeof import("../../app/components/mockups/PresidioMockup.vue")['default']
  MockupsProductMockup: typeof import("../../app/components/mockups/ProductMockup.vue")['default']
  MockupsProductScreen: typeof import("../../app/components/mockups/ProductScreen.vue")['default']
  MockupsSmartJuanMockup: typeof import("../../app/components/mockups/SmartJuanMockup.vue")['default']
  NavigationAppFooter: typeof import("../../app/components/navigation/AppFooter.vue")['default']
  NavigationAppHeader: typeof import("../../app/components/navigation/AppHeader.vue")['default']
  NavigationThemeToggle: typeof import("../../app/components/navigation/ThemeToggle.vue")['default']
  SectionsAboutSection: typeof import("../../app/components/sections/AboutSection.vue")['default']
  SectionsContactSection: typeof import("../../app/components/sections/ContactSection.vue")['default']
  SectionsCredibilitySection: typeof import("../../app/components/sections/CredibilitySection.vue")['default']
  SectionsDemoCtaSection: typeof import("../../app/components/sections/DemoCtaSection.vue")['default']
  SectionsEcosystemShowcase: typeof import("../../app/components/sections/EcosystemShowcase.vue")['default']
  SectionsFeaturesSection: typeof import("../../app/components/sections/FeaturesSection.vue")['default']
  SectionsHeroSection: typeof import("../../app/components/sections/HeroSection.vue")['default']
  SectionsProcessSection: typeof import("../../app/components/sections/ProcessSection.vue")['default']
  SectionsProductsSection: typeof import("../../app/components/sections/ProductsSection.vue")['default']
  SectionsStoriesSection: typeof import("../../app/components/sections/StoriesSection.vue")['default']
  UiArrowNudge: typeof import("../../app/components/ui/UiArrowNudge.vue")['default']
  UiButton: typeof import("../../app/components/ui/UiButton.vue")['default']
  UiContainer: typeof import("../../app/components/ui/UiContainer.vue")['default']
  UiEyebrow: typeof import("../../app/components/ui/UiEyebrow.vue")['default']
  UiLogo: typeof import("../../app/components/ui/UiLogo.vue")['default']
  UiPlaceholderTag: typeof import("../../app/components/ui/UiPlaceholderTag.vue")['default']
  UiReveal: typeof import("../../app/components/ui/UiReveal.vue")['default']
  UiSectionHeader: typeof import("../../app/components/ui/UiSectionHeader.vue")['default']
  UiSelectField: typeof import("../../app/components/ui/UiSelectField.vue")['default']
  UiSocialIcon: typeof import("../../app/components/ui/UiSocialIcon.vue")['default']
  UiTextAreaField: typeof import("../../app/components/ui/UiTextAreaField.vue")['default']
  UiTextField: typeof import("../../app/components/ui/UiTextField.vue")['default']
  /**
   * Displays the welcome screen used by new Nuxt projects.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-welcome
   */
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  /**
   * Renders the selected layout around pages or error content.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-layout
   */
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  /**
   * Catches client-side errors from its default slot and renders an error slot.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-error-boundary
   */
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  /**
   * Renders its default slot only on the client, with an optional server fallback.
   *
   * @see https://nuxt.com/docs/4.x/api/components/client-only
   */
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  /**
   * Renders its content only during development.
   *
   * @see https://nuxt.com/docs/4.x/api/components/dev-only
   */
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  /**
   * A drop-in replacement for Vue Router's `<RouterLink>` and the HTML `<a>` element.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-link
   */
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  /**
   * Displays a progress bar during page navigation.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-loading-indicator
   */
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  /**
   * Formats dates and times consistently across server and client using the user's locale.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-time
   */
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  /**
   * Announces route changes to assistive technologies using the current page title.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-route-announcer
   */
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  /**
   * Announces dynamic content changes to assistive technologies.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-announcer
   */
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  /**
   * Renders an optimized image through the Nuxt Image module.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-img
   */
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  /**
   * Renders responsive optimized images through the Nuxt Image module.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-picture
   */
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  /**
   * Renders the current page from the `pages/` directory.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-page
   */
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  /**
   * Renders a non-interactive server component without shipping client-side JavaScript.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-island
   */
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyCardsPillarCard: LazyComponent<typeof import("../../app/components/cards/PillarCard.vue")['default']>
  LazyCardsProductCard: LazyComponent<typeof import("../../app/components/cards/ProductCard.vue")['default']>
  LazyCardsServiceCard: LazyComponent<typeof import("../../app/components/cards/ServiceCard.vue")['default']>
  LazyCardsStoryCard: LazyComponent<typeof import("../../app/components/cards/StoryCard.vue")['default']>
  LazyFormsContactForm: LazyComponent<typeof import("../../app/components/forms/ContactForm.vue")['default']>
  LazyFormsDemoDialog: LazyComponent<typeof import("../../app/components/forms/DemoDialog.vue")['default']>
  LazyFormsFormNotice: LazyComponent<typeof import("../../app/components/forms/FormNotice.vue")['default']>
  LazyFormsSubmitButton: LazyComponent<typeof import("../../app/components/forms/SubmitButton.vue")['default']>
  LazyMockupsAcumenMockup: LazyComponent<typeof import("../../app/components/mockups/AcumenMockup.vue")['default']>
  LazyMockupsAppWindow: LazyComponent<typeof import("../../app/components/mockups/AppWindow.vue")['default']>
  LazyMockupsChismisMockup: LazyComponent<typeof import("../../app/components/mockups/ChismisMockup.vue")['default']>
  LazyMockupsMockupAvatar: LazyComponent<typeof import("../../app/components/mockups/MockupAvatar.vue")['default']>
  LazyMockupsMockupBar: LazyComponent<typeof import("../../app/components/mockups/MockupBar.vue")['default']>
  LazyMockupsPresidioMockup: LazyComponent<typeof import("../../app/components/mockups/PresidioMockup.vue")['default']>
  LazyMockupsProductMockup: LazyComponent<typeof import("../../app/components/mockups/ProductMockup.vue")['default']>
  LazyMockupsProductScreen: LazyComponent<typeof import("../../app/components/mockups/ProductScreen.vue")['default']>
  LazyMockupsSmartJuanMockup: LazyComponent<typeof import("../../app/components/mockups/SmartJuanMockup.vue")['default']>
  LazyNavigationAppFooter: LazyComponent<typeof import("../../app/components/navigation/AppFooter.vue")['default']>
  LazyNavigationAppHeader: LazyComponent<typeof import("../../app/components/navigation/AppHeader.vue")['default']>
  LazyNavigationThemeToggle: LazyComponent<typeof import("../../app/components/navigation/ThemeToggle.vue")['default']>
  LazySectionsAboutSection: LazyComponent<typeof import("../../app/components/sections/AboutSection.vue")['default']>
  LazySectionsContactSection: LazyComponent<typeof import("../../app/components/sections/ContactSection.vue")['default']>
  LazySectionsCredibilitySection: LazyComponent<typeof import("../../app/components/sections/CredibilitySection.vue")['default']>
  LazySectionsDemoCtaSection: LazyComponent<typeof import("../../app/components/sections/DemoCtaSection.vue")['default']>
  LazySectionsEcosystemShowcase: LazyComponent<typeof import("../../app/components/sections/EcosystemShowcase.vue")['default']>
  LazySectionsFeaturesSection: LazyComponent<typeof import("../../app/components/sections/FeaturesSection.vue")['default']>
  LazySectionsHeroSection: LazyComponent<typeof import("../../app/components/sections/HeroSection.vue")['default']>
  LazySectionsProcessSection: LazyComponent<typeof import("../../app/components/sections/ProcessSection.vue")['default']>
  LazySectionsProductsSection: LazyComponent<typeof import("../../app/components/sections/ProductsSection.vue")['default']>
  LazySectionsStoriesSection: LazyComponent<typeof import("../../app/components/sections/StoriesSection.vue")['default']>
  LazyUiArrowNudge: LazyComponent<typeof import("../../app/components/ui/UiArrowNudge.vue")['default']>
  LazyUiButton: LazyComponent<typeof import("../../app/components/ui/UiButton.vue")['default']>
  LazyUiContainer: LazyComponent<typeof import("../../app/components/ui/UiContainer.vue")['default']>
  LazyUiEyebrow: LazyComponent<typeof import("../../app/components/ui/UiEyebrow.vue")['default']>
  LazyUiLogo: LazyComponent<typeof import("../../app/components/ui/UiLogo.vue")['default']>
  LazyUiPlaceholderTag: LazyComponent<typeof import("../../app/components/ui/UiPlaceholderTag.vue")['default']>
  LazyUiReveal: LazyComponent<typeof import("../../app/components/ui/UiReveal.vue")['default']>
  LazyUiSectionHeader: LazyComponent<typeof import("../../app/components/ui/UiSectionHeader.vue")['default']>
  LazyUiSelectField: LazyComponent<typeof import("../../app/components/ui/UiSelectField.vue")['default']>
  LazyUiSocialIcon: LazyComponent<typeof import("../../app/components/ui/UiSocialIcon.vue")['default']>
  LazyUiTextAreaField: LazyComponent<typeof import("../../app/components/ui/UiTextAreaField.vue")['default']>
  LazyUiTextField: LazyComponent<typeof import("../../app/components/ui/UiTextField.vue")['default']>
  /**
   * Lazy-loaded version of `<NuxtWelcome>`.
   *
   * Displays the welcome screen used by new Nuxt projects.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-welcome
   */
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  /**
   * Lazy-loaded version of `<NuxtLayout>`.
   *
   * Renders the selected layout around pages or error content.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-layout
   */
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  /**
   * Lazy-loaded version of `<NuxtErrorBoundary>`.
   *
   * Catches client-side errors from its default slot and renders an error slot.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-error-boundary
   */
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  /**
   * Lazy-loaded version of `<ClientOnly>`.
   *
   * Renders its default slot only on the client, with an optional server fallback.
   *
   * @see https://nuxt.com/docs/4.x/api/components/client-only
   */
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  /**
   * Lazy-loaded version of `<DevOnly>`.
   *
   * Renders its content only during development.
   *
   * @see https://nuxt.com/docs/4.x/api/components/dev-only
   */
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  /**
   * Lazy-loaded version of `<NuxtLink>`.
   *
   * A drop-in replacement for Vue Router's `<RouterLink>` and the HTML `<a>` element.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-link
   */
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  /**
   * Lazy-loaded version of `<NuxtLoadingIndicator>`.
   *
   * Displays a progress bar during page navigation.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-loading-indicator
   */
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  /**
   * Lazy-loaded version of `<NuxtTime>`.
   *
   * Formats dates and times consistently across server and client using the user's locale.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-time
   */
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  /**
   * Lazy-loaded version of `<NuxtRouteAnnouncer>`.
   *
   * Announces route changes to assistive technologies using the current page title.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-route-announcer
   */
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  /**
   * Lazy-loaded version of `<NuxtAnnouncer>`.
   *
   * Announces dynamic content changes to assistive technologies.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-announcer
   */
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  /**
   * Lazy-loaded version of `<NuxtImg>`.
   *
   * Renders an optimized image through the Nuxt Image module.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-img
   */
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  /**
   * Lazy-loaded version of `<NuxtPicture>`.
   *
   * Renders responsive optimized images through the Nuxt Image module.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-picture
   */
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  /**
   * Lazy-loaded version of `<NuxtPage>`.
   *
   * Renders the current page from the `pages/` directory.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-page
   */
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  /**
   * Lazy-loaded version of `<NuxtIsland>`.
   *
   * Renders a non-interactive server component without shipping client-side JavaScript.
   *
   * @see https://nuxt.com/docs/4.x/api/components/nuxt-island
   */
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
