<!--
  ProductDetailMockup.vue
  Purpose: High-fidelity visual simulated UI mockups for each product's specific feature sections
  matching the Figma design reference (Acumen dashboard/notes/assessment/path/tools/chat/checkins,
  SmartJuan services/permits/renewals/property/tracking/portal, and Chismis discover/sharing/aliases/communities/chizcoins/chizmart).
-->
<template>
  <div
    class="overflow-hidden rounded-2xl border border-line-strong bg-elev text-[11.5px] text-ink shadow-lift"
    aria-hidden="true"
  >
    <!-- Window Titlebar with Traffic Light controls & breadcrumbs -->
    <div class="flex h-9 items-center justify-between border-b border-line bg-sunken/75 px-3.5">
      <div class="flex items-center gap-1.5">
        <span class="size-2.5 rounded-full bg-red-400/80" />
        <span class="size-2.5 rounded-full bg-amber-400/80" />
        <span class="size-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <div class="rounded-md bg-ink/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-ink-3">
        {{ breadcrumbPath }}
      </div>
      <span class="font-mono text-[9px] text-ink-3">preview</span>
    </div>

    <!-- Inner Simulated Content Area -->
    <div class="min-h-[260px] p-4 sm:p-5">
      <!-- ==================== ACUMEN MOCKUPS ==================== -->

      <!-- Acumen Hero: Dashboard -->
      <div v-if="kind === 'acumen-hero'" class="flex flex-col gap-4">
        <div class="flex items-center justify-between border-b border-line pb-3">
          <div>
            <p class="font-mono text-[10px] uppercase tracking-wider text-ink-3">Your next breakthrough starts here.</p>
            <h4 class="text-[14px] font-semibold text-ink">A little progress, every day.</h4>
          </div>
          <span
            class="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium"
            :style="{ background: accentSoft, color: accentHex }"
          >
            Live synced
          </span>
        </div>
        <div class="grid grid-cols-3 gap-2.5">
          <div class="rounded-xl border border-line bg-sunken/60 p-3">
            <span class="text-[20px] font-bold text-ink">24</span>
            <p class="text-[10px] text-ink-3">Concepts mapped</p>
            <span class="mt-1 block font-mono text-[9px] text-emerald-600 dark:text-emerald-400">From your materials</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/60 p-3">
            <span class="text-[20px] font-bold" :style="{ color: accentHex }">06</span>
            <p class="text-[10px] text-ink-3">To revisit</p>
            <span class="mt-1 block font-mono text-[9px] text-amber-600">Find your focus</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/60 p-3">
            <span class="text-[20px] font-bold text-ink">03</span>
            <p class="text-[10px] text-ink-3">Study modes</p>
            <span class="mt-1 block font-mono text-[9px] text-ink-3">Learn your way</span>
          </div>
        </div>
        <div class="rounded-xl border border-line bg-elev p-3">
          <div class="mb-2 flex items-center justify-between">
            <span class="font-medium text-ink">Your learning priorities</span>
            <span class="text-[10px] text-ink-3">View all</span>
          </div>
          <div class="space-y-1.5">
            <div class="flex items-center justify-between rounded-lg bg-sunken/70 px-2.5 py-1.5">
              <span class="font-medium">Cellular respiration</span>
              <span class="rounded bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-medium text-amber-600">Review</span>
            </div>
            <div class="flex items-center justify-between rounded-lg bg-sunken/70 px-2.5 py-1.5">
              <span class="font-medium">Chemical bonding</span>
              <span class="rounded bg-blue-500/10 px-1.5 py-0.5 text-[9px] font-medium text-blue-600">Practice</span>
            </div>
            <div class="flex items-center justify-between rounded-lg bg-sunken/70 px-2.5 py-1.5">
              <span class="font-medium">Linear equations</span>
              <span class="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-medium text-emerald-600">Explore</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Acumen Deep Dive 1: Materials Upload -->
      <div v-else-if="kind === 'acumen-materials'" class="flex flex-col gap-3">
        <div class="flex items-center justify-between border-b border-line pb-2.5">
          <div>
            <h4 class="font-semibold text-ink">Your study materials</h4>
            <p class="text-[10px] text-ink-3">One starting point for your learning.</p>
          </div>
          <span class="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-600">3 processed</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center gap-3 rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="grid size-7 place-items-center rounded bg-red-500/10 font-mono text-[10px] font-bold text-red-500">PDF</span>
            <div class="min-w-0 flex-1">
              <p class="truncate font-medium text-ink">Biology · Lecture notes</p>
              <p class="text-[9.5px] text-ink-3">18 pages · 14 concepts mapped</p>
            </div>
            <span class="size-2 rounded-full" :style="{ background: accentHex }" />
          </div>
          <div class="flex items-center gap-3 rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="grid size-7 place-items-center rounded bg-blue-500/10 font-mono text-[10px] font-bold text-blue-500">DOCX</span>
            <div class="min-w-0 flex-1">
              <p class="truncate font-medium text-ink">Chemistry · Course outline</p>
              <p class="text-[9.5px] text-ink-3">6 pages · 8 concepts mapped</p>
            </div>
            <span class="size-2 rounded-full" :style="{ background: accentHex }" />
          </div>
          <div class="flex items-center gap-3 rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="grid size-7 place-items-center rounded bg-emerald-500/10 font-mono text-[10px] font-bold text-emerald-500">TXT</span>
            <div class="min-w-0 flex-1">
              <p class="truncate font-medium text-ink">Mathematics · Revision notes</p>
              <p class="text-[9.5px] text-ink-3">Direct text input · 6 concepts mapped</p>
            </div>
            <span class="size-2 rounded-full" :style="{ background: accentHex }" />
          </div>
        </div>
        <div class="rounded-xl border border-dashed border-line-strong p-3 text-center text-ink-3">
          <p class="text-[10px]">Your notes become your next step.</p>
        </div>
      </div>

      <!-- Acumen Deep Dive 2: Confidence Assessment -->
      <div v-else-if="kind === 'acumen-assessment'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">How well do you know it?</h4>
          <p class="text-[10px] text-ink-3">Let your confidence guide your focus.</p>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <span class="font-medium">Cell membrane transport</span>
            <span class="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9.5px] font-semibold text-emerald-600 dark:text-emerald-400">
              Confident
            </span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5" :style="{ borderColor: accentHex }">
            <span class="font-medium">Cellular respiration</span>
            <span class="rounded-full bg-amber-500/15 px-2 py-0.5 text-[9.5px] font-semibold text-amber-600">
              Needs practice
            </span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <span class="font-medium">Photosynthesis light reaction</span>
            <span class="rounded-full bg-blue-500/15 px-2 py-0.5 text-[9.5px] font-semibold text-blue-600">
              Getting there
            </span>
          </div>
        </div>
        <div class="rounded-xl border border-line p-3" :style="{ background: accentSoft }">
          <div class="flex items-center gap-2">
            <span class="size-2 rounded-full" :style="{ background: accentHex }" />
            <span class="font-semibold" :style="{ color: accentHex }">A clear place to start</span>
          </div>
          <p class="mt-1 text-[10.5px] text-ink-2">
            Revisit cellular respiration in your next lesson. We'll break down the Krebs cycle first.
          </p>
        </div>
      </div>

      <!-- Acumen Deep Dive 3: Learning Path -->
      <div v-else-if="kind === 'acumen-path'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <span class="font-mono text-[9.5px] text-ink-3">Biology · Cellular respiration</span>
          <h4 class="font-semibold text-ink">Your path to understanding</h4>
        </div>
        <div class="space-y-2.5">
          <div class="flex items-center gap-3 rounded-xl border border-line bg-sunken/30 p-2.5">
            <span class="grid size-6 place-items-center rounded-full text-white" :style="{ background: accentHex }">✓</span>
            <div class="min-w-0 flex-1">
              <p class="font-medium">Start with the big picture</p>
              <p class="text-[9.5px] text-ink-3">Where cells get their energy</p>
            </div>
            <span class="font-mono text-[9.5px] text-emerald-600">Complete</span>
          </div>
          <div class="flex items-center gap-3 rounded-xl border p-2.5 shadow-sm" :style="{ borderColor: accentHex, background: accentSoft }">
            <span class="grid size-6 place-items-center rounded-full border-2 font-mono text-[10px] font-bold" :style="{ borderColor: accentHex, color: accentHex }">2</span>
            <div class="min-w-0 flex-1">
              <p class="font-medium text-ink">Follow the energy</p>
              <p class="text-[9.5px] text-ink-2">Glycolysis and the role of ATP</p>
            </div>
            <span class="font-mono text-[9.5px] font-semibold" :style="{ color: accentHex }">Up next</span>
          </div>
          <div class="flex items-center gap-3 rounded-xl border border-line bg-sunken/20 p-2.5 opacity-60">
            <span class="grid size-6 place-items-center rounded-full border border-line font-mono text-[10px] text-ink-3">3</span>
            <div class="min-w-0 flex-1">
              <p class="font-medium text-ink-3">Put it into practice</p>
              <p class="text-[9.5px] text-ink-3">Check your understanding</p>
            </div>
            <span class="font-mono text-[9.5px] text-ink-3">Locked</span>
          </div>
        </div>
      </div>

      <!-- Acumen Deep Dive 4: Study Tools -->
      <div v-else-if="kind === 'acumen-tools'" class="flex flex-col gap-3">
        <div class="flex items-center justify-between border-b border-line pb-2">
          <div>
            <h4 class="font-semibold text-ink">Find your "aha!" moment</h4>
            <p class="text-[10px] text-ink-3">Choose a way to work through the concept.</p>
          </div>
          <div class="flex gap-1">
            <span class="rounded bg-elev px-2 py-0.5 text-[9.5px] font-medium shadow-sm">Lesson</span>
            <span class="rounded px-2 py-0.5 text-[9.5px] text-ink-3">Quiz</span>
            <span class="rounded px-2 py-0.5 text-[9.5px] text-ink-3">Flashcard</span>
          </div>
        </div>
        <div class="rounded-xl border border-line bg-elev p-4 shadow-soft">
          <span class="font-mono text-[9.5px] uppercase tracking-wider" :style="{ color: accentHex }">THE BUILDING BLOCKS</span>
          <h5 class="mt-1 text-[13px] font-semibold text-ink">Meet your cell's power source.</h5>
          <p class="mt-2 text-[11px] leading-relaxed text-ink-2">
            Mitochondria convert energy from nutrients into ATP to help power the cell's activities. Think of them as tiny cellular generators.
          </p>
          <div class="mt-3 flex items-center justify-between border-t border-line pt-2 text-[10px] text-ink-3">
            <span>Concept 2 of 5</span>
            <span class="font-medium" :style="{ color: accentHex }">Next concept →</span>
          </div>
        </div>
      </div>

      <!-- Acumen Deep Dive 5: AI Chat -->
      <div v-else-if="kind === 'acumen-chat'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">Talk it through</h4>
          <p class="text-[10px] text-ink-3">Your materials. A more helpful conversation.</p>
        </div>
        <div class="space-y-2">
          <div class="flex justify-end">
            <div class="max-w-[80%] rounded-2xl rounded-br-sm bg-ink px-3 py-2 text-[11px] text-bg">
              Can you explain ATP in simpler terms?
            </div>
          </div>
          <div class="flex gap-2">
            <span class="grid size-6 shrink-0 place-items-center rounded-full text-white" :style="{ background: accentHex }">
              ✳
            </span>
            <div class="max-w-[85%] rounded-2xl rounded-tl-sm border border-line bg-sunken/60 p-3 text-[11px] leading-relaxed text-ink-2">
              <span class="font-semibold text-ink">Acumen:</span> Think of ATP as a rechargeable battery or small energy currency. Cells use it to transfer energy anywhere it's needed right now.
            </div>
          </div>
        </div>
        <div class="mt-auto flex items-center rounded-xl border border-line bg-sunken/40 px-3 py-2 text-ink-3">
          <span class="text-[10.5px]">Ask a follow-up question...</span>
        </div>
      </div>

      <!-- Acumen Deep Dive 6: Checkins -->
      <div v-else-if="kind === 'acumen-checkins'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">Keep your learning moving</h4>
          <p class="text-[10px] text-ink-3">Small prompts for your next study session.</p>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5 text-center">
            <span class="block font-semibold text-ink">Review</span>
            <span class="mt-1 block text-[9px] text-ink-3">Revisit low confidence topic</span>
          </div>
          <div class="rounded-xl border p-2.5 text-center shadow-sm" :style="{ borderColor: accentHex, background: accentSoft }">
            <span class="block font-semibold" :style="{ color: accentHex }">Practice</span>
            <span class="mt-1 block text-[9px] text-ink-2">Check understanding</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5 text-center">
            <span class="block font-semibold text-ink">Reflect</span>
            <span class="mt-1 block text-[9px] text-ink-3">Rate confidence again</span>
          </div>
        </div>
        <div class="rounded-xl border border-line bg-elev p-3">
          <span class="font-semibold text-ink">Keep the next step in sight</span>
          <p class="mt-1 text-[10px] text-ink-3">Stay connected to your study routine with smart reminders.</p>
        </div>
      </div>

      <!-- ==================== SMARTJUAN MOCKUPS ==================== -->

      <!-- SmartJuan Hero: Services Overview -->
      <div v-else-if="kind === 'smartjuan-hero'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">What can we help you with today?</h4>
          <p class="text-[10px] text-ink-3">Your local government services, connected.</p>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="rounded-xl border border-line p-2.5" :style="{ background: accentSoft }">
            <span class="font-mono text-[9px] font-bold uppercase" :style="{ color: accentHex }">BPLO</span>
            <p class="mt-1 font-semibold text-ink">Business permit</p>
            <span class="text-[9px] text-ink-3">New & renewal</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="font-mono text-[9px] font-bold uppercase text-ink-3">RPT</span>
            <p class="mt-1 font-semibold text-ink">Property tax</p>
            <span class="text-[9px] text-ink-3">Real property assessments</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="font-mono text-[9px] font-bold uppercase text-ink-3">TRACK</span>
            <p class="mt-1 font-semibold text-ink">Clearances</p>
            <span class="text-[9px] text-ink-3">Status tracking</span>
          </div>
        </div>
        <div class="rounded-xl border border-line bg-elev p-3">
          <span class="font-semibold text-ink">Start your next business chapter</span>
          <p class="mt-0.5 text-[10px] text-ink-2">Apply for a new business permit or renew an existing one online.</p>
          <span class="mt-2 inline-block font-medium" :style="{ color: accentHex }">Start a business application →</span>
        </div>
      </div>

      <!-- SmartJuan Deep Dive 1: New Business Permit -->
      <div v-else-if="kind === 'smartjuan-new-business'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <span class="font-mono text-[9.5px] uppercase tracking-wider" :style="{ color: accentHex }">Step 1 of 3</span>
          <h4 class="font-semibold text-ink">Your business starts here</h4>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <p class="font-medium text-ink">1. Bring your business details together</p>
              <p class="text-[9.5px] text-ink-3">DTI/SEC, line of business, address</p>
            </div>
            <span class="text-[10px] font-medium text-emerald-600">Ready</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div>
              <p class="font-medium text-ink">2. Follow the application process</p>
              <p class="text-[9.5px] text-ink-2">Guided document upload & inspection check</p>
            </div>
            <span class="font-mono text-[9.5px] font-semibold" :style="{ color: accentHex }">Active</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/20 p-2.5 opacity-60">
            <div>
              <p class="font-medium text-ink-3">3. Track your application</p>
              <p class="text-[9.5px] text-ink-3">Stay informed as your request moves forward</p>
            </div>
            <span class="text-[10px] text-ink-3">Next</span>
          </div>
        </div>
      </div>

      <!-- SmartJuan Deep Dive 2: Renewals -->
      <div v-else-if="kind === 'smartjuan-renewals'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">Business permit renewals</h4>
          <p class="text-[10px] text-ink-3">Keep your business moving without the physical queues.</p>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="rounded-xl border border-line p-3" :style="{ background: accentSoft }">
            <span class="font-mono text-[9px] uppercase tracking-wider" :style="{ color: accentHex }">RENEW</span>
            <p class="mt-1 font-semibold text-ink">Existing permit</p>
            <p class="text-[9.5px] text-ink-2">Annual renewal with online payment</p>
            <span class="mt-2 block font-medium" :style="{ color: accentHex }">Available →</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/50 p-3">
            <span class="font-mono text-[9px] uppercase tracking-wider text-ink-3">UPDATE</span>
            <p class="mt-1 font-semibold text-ink">Amendments</p>
            <p class="text-[9.5px] text-ink-3">Change line of business or address</p>
            <span class="mt-2 block font-medium text-ink-3">Available →</span>
          </div>
        </div>
        <div class="rounded-xl border border-line bg-elev p-2.5 text-center">
          <span class="text-[10.5px] text-ink-2">Ready for your next renewal? Continue through SmartJuan.</span>
        </div>
      </div>

      <!-- SmartJuan Deep Dive 3: Real Property Tax -->
      <div v-else-if="kind === 'smartjuan-property'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">Your property, in one place</h4>
          <p class="text-[10px] text-ink-3">Real property tax declaration and online assessments.</p>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="font-mono text-[14px] font-bold text-ink">01</span>
            <p class="mt-1 font-semibold text-ink">Declare</p>
            <span class="text-[9px] text-ink-3">Add property</span>
          </div>
          <div class="rounded-xl border p-2.5 shadow-sm" :style="{ borderColor: accentHex, background: accentSoft }">
            <span class="font-mono text-[14px] font-bold" :style="{ color: accentHex }">02</span>
            <p class="mt-1 font-semibold text-ink">Assess</p>
            <span class="text-[9px] text-ink-2">View tax due</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="font-mono text-[14px] font-bold text-ink">03</span>
            <p class="mt-1 font-semibold text-ink">Pay</p>
            <span class="text-[9px] text-ink-3">Get receipts</span>
          </div>
        </div>
        <div class="rounded-xl border border-line bg-elev p-3">
          <div class="flex items-center justify-between">
            <div>
              <span class="font-semibold text-ink">PIN 002-14-089-02-001</span>
              <p class="text-[9.5px] text-ink-3">Residential Lot · Brgy. San Juan</p>
            </div>
            <span class="rounded bg-emerald-500/10 px-2 py-0.5 text-[9.5px] font-medium text-emerald-600">Updated</span>
          </div>
        </div>
      </div>

      <!-- SmartJuan Deep Dive 4: Permits & Clearances -->
      <div v-else-if="kind === 'smartjuan-permits'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">The documents you need</h4>
          <p class="text-[10px] text-ink-3">Permits and clearances across municipal offices.</p>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/50 p-2.5">
            <div class="flex items-center gap-2.5">
              <span class="grid size-6 place-items-center rounded bg-amber-500/10 text-[11px] text-amber-600">📄</span>
              <span class="font-medium text-ink">Community Tax Certificate (Cedula)</span>
            </div>
            <span class="font-mono text-[9.5px]" :style="{ color: accentHex }">Apply →</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/50 p-2.5">
            <div class="flex items-center gap-2.5">
              <span class="grid size-6 place-items-center rounded bg-blue-500/10 text-[11px] text-blue-600">🏛</span>
              <span class="font-medium text-ink">Barangay Clearance</span>
            </div>
            <span class="font-mono text-[9.5px]" :style="{ color: accentHex }">Apply →</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/50 p-2.5">
            <div class="flex items-center gap-2.5">
              <span class="grid size-6 place-items-center rounded bg-purple-500/10 text-[11px] text-purple-600">🛡</span>
              <span class="font-medium text-ink">Police Clearance</span>
            </div>
            <span class="font-mono text-[9.5px]" :style="{ color: accentHex }">Apply →</span>
          </div>
        </div>
      </div>

      <!-- SmartJuan Deep Dive 5: Application Tracking -->
      <div v-else-if="kind === 'smartjuan-tracking'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <span class="font-mono text-[9.5px] uppercase tracking-wider text-ink-3">Ref: SJ-2026-9042</span>
          <h4 class="font-semibold text-ink">See where things stand</h4>
        </div>
        <div class="rounded-xl border border-line bg-sunken/40 p-3">
          <div class="flex items-center justify-between">
            <span class="font-semibold text-ink">Business permit application</span>
            <span class="rounded-full bg-blue-500/15 px-2 py-0.5 text-[9.5px] font-medium text-blue-600">Under review</span>
          </div>
          <div class="mt-3 flex items-center justify-between text-[10px]">
            <div class="flex items-center gap-1.5">
              <span class="grid size-4 place-items-center rounded-full bg-emerald-500 text-[8px] text-white">✓</span>
              <span>Submitted</span>
            </div>
            <div class="h-px flex-1 bg-line-strong mx-2" />
            <div class="flex items-center gap-1.5" :style="{ color: accentHex }">
              <span class="grid size-4 place-items-center rounded-full text-[8px] text-white" :style="{ background: accentHex }">2</span>
              <span class="font-medium">Under review</span>
            </div>
            <div class="h-px flex-1 bg-line mx-2" />
            <div class="flex items-center gap-1.5 text-ink-3">
              <span class="grid size-4 place-items-center rounded-full border border-line text-[8px]">3</span>
              <span>Release</span>
            </div>
          </div>
        </div>
        <div class="rounded-xl border border-dashed border-line-strong p-2.5 text-center text-[10px] text-ink-3">
          Keep your reference number handy to check your live status anytime.
        </div>
      </div>

      <!-- SmartJuan Deep Dive 6: Citizen Account -->
      <div v-else-if="kind === 'smartjuan-account'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">Your SmartJuan account</h4>
          <p class="text-[10px] text-ink-3">A unified starting point for online government services.</p>
        </div>
        <div class="rounded-xl border border-line bg-elev p-3.5 shadow-soft">
          <div class="flex items-center gap-3">
            <div class="grid size-9 place-items-center rounded-full text-white font-bold" :style="{ background: accentHex }">
              SJ
            </div>
            <div>
              <p class="font-semibold text-ink">Welcome to SmartJuan</p>
              <p class="text-[10px] text-ink-3">Verified Resident Account</p>
            </div>
          </div>
          <div class="mt-3 grid grid-cols-2 gap-2 pt-2 border-t border-line text-[10px]">
            <span class="rounded bg-sunken/80 px-2 py-1.5 text-center font-medium">Create account →</span>
            <span class="rounded border border-line px-2 py-1.5 text-center text-ink-2">Log in to portal →</span>
          </div>
        </div>
      </div>

      <!-- ==================== CHISMIS MOCKUPS ==================== -->

      <!-- Chismis Hero: Feed Preview -->
      <div v-else-if="kind === 'chismis-hero'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2 flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-ink">A little chizmis. A lot of connection.</h4>
            <p class="text-[10px] text-ink-3">Stories worth sharing start with your people.</p>
          </div>
          <span class="rounded-full px-2 py-0.5 text-[9px] font-medium" :style="{ background: accentSoft, color: accentHex }">
            Trending 🔥
          </span>
        </div>
        <div class="rounded-xl border border-line bg-elev p-3 shadow-soft">
          <div class="flex items-center gap-2">
            <span class="grid size-6 place-items-center rounded-full bg-purple-500/20 text-[9px] font-bold text-purple-600">KC</span>
            <div>
              <span class="font-medium text-ink">Kapitbahay Corner</span>
              <span class="ml-1.5 text-[9px] text-ink-3">· 8m ago</span>
            </div>
          </div>
          <p class="mt-2 text-[11px] text-ink-2">
            Good food. Familiar faces. A weekend worth sharing. ☀🌿 Any food recommendations near the plaza?
          </p>
          <div class="mt-2.5 flex items-center gap-4 text-[10px] text-ink-3 border-t border-line pt-2">
            <span class="flex items-center gap-1 font-medium" :style="{ color: accentHex }">♡ 48 React</span>
            <span>💬 16 Comments</span>
            <span>↗ Share</span>
          </div>
        </div>
      </div>

      <!-- Chismis Deep Dive 1: Discover / Hottest -->
      <div v-else-if="kind === 'chismis-discover'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">Find your next conversation</h4>
          <p class="text-[10px] text-ink-3">From the latest buzz to what’s happening nearby.</p>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="rounded-xl border p-2.5 text-center shadow-sm" :style="{ borderColor: accentHex, background: accentSoft }">
            <span class="font-semibold text-ink">Hottest</span>
            <span class="mt-0.5 block text-[9px] text-ink-2">News & trending</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5 text-center">
            <span class="font-semibold text-ink">Home</span>
            <span class="mt-0.5 block text-[9px] text-ink-3">Local circle</span>
          </div>
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5 text-center">
            <span class="font-semibold text-ink">Reels</span>
            <span class="mt-0.5 block text-[9px] text-ink-3">Short stories</span>
          </div>
        </div>
        <div class="rounded-xl border border-line bg-elev p-2.5 text-[10.5px]">
          <span class="font-medium" :style="{ color: accentHex }">#ManilaCoffeeMeetup</span>
          <p class="text-[9.5px] text-ink-3">2.4k people talking about this right now</p>
        </div>
      </div>

      <!-- Chismis Deep Dive 2: Sharing & Circles -->
      <div v-else-if="kind === 'chismis-sharing'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">The right story. The right people.</h4>
          <p class="text-[10px] text-ink-3">Choose the community for your conversation.</p>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div class="flex items-center gap-2">
              <span class="grid size-6 place-items-center rounded bg-amber-500/10 text-[10px]">🏠</span>
              <div>
                <span class="font-medium text-ink">Friends & family</span>
                <p class="text-[9px] text-ink-3">Keep familiar conversations together</p>
              </div>
            </div>
            <span class="rounded bg-elev px-2 py-0.5 text-[9px] font-medium shadow-sm">Circle</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div class="flex items-center gap-2">
              <span class="grid size-6 place-items-center rounded bg-blue-500/10 text-[10px]">💼</span>
              <div>
                <span class="font-medium text-ink">Work group</span>
                <p class="text-[9px] text-ink-2">Share within your professional community</p>
              </div>
            </div>
            <span class="rounded px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Active</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div class="flex items-center gap-2">
              <span class="grid size-6 place-items-center rounded bg-purple-500/10 text-[10px]">🎨</span>
              <div>
                <span class="font-medium text-ink">Interest community</span>
                <p class="text-[9px] text-ink-3">Connect around what you love</p>
              </div>
            </div>
            <span class="rounded bg-elev px-2 py-0.5 text-[9px] font-medium shadow-sm">Public</span>
          </div>
        </div>
      </div>

      <!-- Chismis Deep Dive 3: Aliases -->
      <div v-else-if="kind === 'chismis-aliases'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">A different side of you</h4>
          <p class="text-[10px] text-ink-3">Room for your interests and creative identities.</p>
        </div>
        <div class="space-y-2">
          <div class="flex items-center gap-3 rounded-xl border border-line bg-sunken/40 p-2.5">
            <div class="grid size-7 place-items-center rounded-full bg-pink-500 text-[10px] font-bold text-white">SS</div>
            <div class="min-w-0 flex-1">
              <span class="font-semibold text-ink">Story Seeker</span>
              <p class="text-[9.5px] text-ink-3">Your everyday conversations</p>
            </div>
            <span class="rounded-full bg-elev px-2 py-0.5 text-[9px] font-medium text-ink-2 shadow-sm">Alias #1</span>
          </div>
          <div class="flex items-center gap-3 rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div class="grid size-7 place-items-center rounded-full text-[10px] font-bold text-white" :style="{ background: accentHex }">MM</div>
            <div class="min-w-0 flex-1">
              <span class="font-semibold text-ink">Midnight Maker</span>
              <p class="text-[9.5px] text-ink-2">Your creative side & design WIPs</p>
            </div>
            <span class="rounded-full px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Active</span>
          </div>
        </div>
        <p class="text-center text-[10px] text-ink-3">Express yourself in your own way across circles.</p>
      </div>

      <!-- Chismis Deep Dive 4: Communities -->
      <div v-else-if="kind === 'chismis-communities'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">Find a place that feels like you</h4>
          <p class="text-[10px] text-ink-3">Choose how your community connects.</p>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="rounded-xl border border-line bg-sunken/50 p-3">
            <span class="font-semibold text-ink">Public community</span>
            <p class="mt-1 text-[9.5px] text-ink-3">Open conversations and discoverable topics.</p>
            <span class="mt-2 block font-medium" :style="{ color: accentHex }">Explore public →</span>
          </div>
          <div class="rounded-xl border p-3" :style="{ borderColor: accentHex, background: accentSoft }">
            <span class="font-semibold text-ink">Private community</span>
            <p class="mt-1 text-[9.5px] text-ink-2">Focused invite-only space for your chosen circle.</p>
            <span class="mt-2 block font-medium" :style="{ color: accentHex }">Create space →</span>
          </div>
        </div>
      </div>

      <!-- Chismis Deep Dive 5: ChizCoins -->
      <div v-else-if="kind === 'chismis-coins'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <span class="font-mono text-[9.5px] uppercase tracking-wider" :style="{ color: accentHex }">COMMUNITY REWARDS</span>
          <h4 class="font-semibold text-ink">Good conversations have a little extra</h4>
        </div>
        <div class="rounded-xl border border-line p-3 text-center" :style="{ background: accentSoft }">
          <span class="font-mono text-[22px] font-bold" :style="{ color: accentHex }">1,450 ✧</span>
          <p class="text-[10px] text-ink-2">ChizCoins earned through community activity</p>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center text-[10px]">
          <div class="rounded-lg bg-sunken/60 p-2">
            <span class="font-medium text-ink">Interact</span>
            <p class="text-[8.5px] text-ink-3">React & comment</p>
          </div>
          <div class="rounded-lg bg-sunken/60 p-2">
            <span class="font-medium text-ink">Share</span>
            <p class="text-[8.5px] text-ink-3">Publish a story</p>
          </div>
          <div class="rounded-lg bg-sunken/60 p-2">
            <span class="font-medium text-ink">Connect</span>
            <p class="text-[8.5px] text-ink-3">Join spaces</p>
          </div>
        </div>
      </div>

      <!-- Chismis Deep Dive 6: Chizmart & Badges -->
      <div v-else-if="kind === 'chismis-chizmart'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2">
          <h4 class="font-semibold text-ink">More to discover, together</h4>
          <p class="text-[10px] text-ink-3">Social experiences meet curated e-stores.</p>
        </div>
        <div class="rounded-xl border border-line bg-elev p-3 shadow-soft">
          <div class="flex items-center gap-2">
            <span class="text-amber-500 font-bold">✦</span>
            <span class="font-semibold text-ink">Badge Owner Perks</span>
          </div>
          <p class="mt-1 text-[10.5px] text-ink-2">
            Early adopter recognition, selected discounts, multiple e-stores, and post boosting benefits.
          </p>
          <div class="mt-3 flex gap-2 pt-2 border-t border-line text-[9.5px]">
            <span class="rounded bg-sunken px-2 py-1">Explore brands</span>
            <span class="rounded bg-sunken px-2 py-1">Find products</span>
            <span class="ml-auto font-medium" :style="{ color: accentHex }">Learn more →</span>
          </div>
        </div>
      </div>

      <!-- ==================== PRESIDIO MOCKUPS ==================== -->

      <!-- Presidio Hero: Front Desk Overview -->
      <div v-else-if="kind === 'presidio-hero'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2 flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-ink">Front Desk Overview</h4>
            <p class="text-[10px] text-ink-3">Today · Morning shift</p>
          </div>
          <span class="rounded-full px-2.5 py-0.5 text-[9px] font-medium" :style="{ background: accentSoft, color: accentHex }">
            12 vacant rooms
          </span>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="font-mono text-[18px] font-bold text-ink">18</span>
            <p class="text-[9.5px] text-ink-3">In-house</p>
          </div>
          <div class="rounded-xl border p-2.5 shadow-sm" :style="{ borderColor: accentHex, background: accentSoft }">
            <span class="font-mono text-[18px] font-bold" :style="{ color: accentHex }">07</span>
            <p class="text-[9.5px] text-ink-2">Arrivals</p>
          </div>
          <div class="rounded-xl border border-line bg-sunken/50 p-2.5">
            <span class="font-mono text-[18px] font-bold text-ink">05</span>
            <p class="text-[9.5px] text-ink-3">Departures</p>
          </div>
        </div>
        <div class="space-y-1.5">
          <div class="flex items-center justify-between rounded-lg border border-line bg-elev px-3 py-2">
            <div>
              <span class="font-medium text-ink">Elena Rostova</span>
              <span class="ml-2 text-[9.5px] text-ink-3">Room 112 · Standard Queen</span>
            </div>
            <span class="rounded px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Check in</span>
          </div>
          <div class="flex items-center justify-between rounded-lg border border-line bg-elev px-3 py-2">
            <div>
              <span class="font-medium text-ink">Sophia Chen</span>
              <span class="ml-2 text-[9.5px] text-ink-3">Room 213 · Executive King</span>
            </div>
            <span class="rounded bg-sunken px-2 py-0.5 text-[9px] font-medium text-ink-3">In-house</span>
          </div>
          <div class="flex items-center justify-between rounded-lg border border-line bg-elev px-3 py-2">
            <div>
              <span class="font-medium text-ink">David Miller</span>
              <span class="ml-2 text-[9.5px] text-ink-3">Room 304 · Deluxe Suite</span>
            </div>
            <span class="rounded border border-line px-2 py-0.5 text-[9px] font-medium text-ink-2">Check out</span>
          </div>
        </div>
      </div>

      <!-- Presidio Deep Dive 1: Front Desk Overview -->
      <div v-else-if="kind === 'presidio-frontdesk'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2 flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-ink">Front Desk Overview</h4>
            <p class="text-[10px] text-ink-3">Live command center</p>
          </div>
          <span class="rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-600">30 active stays</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Elena Rostova</span>
              <p class="text-[9.5px] text-ink-3">Arrival · Room 112</p>
            </div>
            <span class="rounded px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Check in</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div>
              <span class="font-medium text-ink">Sophia Chen</span>
              <p class="text-[9.5px] text-ink-2">In-house · Room 213</p>
            </div>
            <span class="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-medium text-emerald-600">Active</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">David Miller</span>
              <p class="text-[9.5px] text-ink-3">Departure · Room 304</p>
            </div>
            <span class="rounded border border-line px-2 py-0.5 text-[9px] font-medium text-ink-2">Check out</span>
          </div>
        </div>
        <div class="mt-auto flex items-center justify-between pt-1 text-[10px] text-ink-3">
          <span>Updated moments ago</span>
          <span class="font-medium" :style="{ color: accentHex }">Open workspace →</span>
        </div>
      </div>

      <!-- Presidio Deep Dive 2: Guest & Reservation Search -->
      <div v-else-if="kind === 'presidio-search'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2 flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-ink">Guest & Reservation Search</h4>
            <p class="text-[10px] text-ink-3">Instant guest match</p>
          </div>
          <span class="font-mono text-[9.5px] font-semibold" :style="{ color: accentHex }">1.2s avg lookup</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Arthur Morgan</span>
              <p class="text-[9.5px] text-ink-3">RES-1001 · Room 101</p>
            </div>
            <span class="rounded bg-sunken px-2 py-0.5 text-[9px] font-medium text-ink-3">In house</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div>
              <span class="font-medium text-ink">Claire Redfield</span>
              <p class="text-[9.5px] text-ink-2">PRS-1001 · Room 103</p>
            </div>
            <span class="rounded px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Confirmed</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Sarah Jenkins</span>
              <p class="text-[9.5px] text-ink-3">RES-1007 · Room 304</p>
            </div>
            <span class="rounded bg-sunken px-2 py-0.5 text-[9px] font-medium text-ink-3">In house</span>
          </div>
        </div>
        <div class="mt-auto flex items-center justify-between pt-1 text-[10px] text-ink-3">
          <span>Search without duplicate entry</span>
          <span class="font-medium" :style="{ color: accentHex }">Open guest profile →</span>
        </div>
      </div>

      <!-- Presidio Deep Dive 3: Reservations -->
      <div v-else-if="kind === 'presidio-reservations'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2 flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-ink">Reservations</h4>
            <p class="text-[10px] text-ink-3">Guided booking flow</p>
          </div>
          <span class="rounded bg-blue-500/10 px-2 py-0.5 font-mono text-[9px] text-blue-600">07 arrivals ready</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Standard Queen</span>
              <p class="text-[9.5px] text-ink-3">Sep 13–17 · 1 guest</p>
            </div>
            <span class="text-[9.5px] font-medium text-emerald-600">Available</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div>
              <span class="font-medium text-ink">Executive King</span>
              <p class="text-[9.5px] text-ink-2">Sep 15–18 · 2 guests</p>
            </div>
            <span class="text-[9.5px] font-medium text-emerald-600">Available</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Deluxe Suite</span>
              <p class="text-[9.5px] text-ink-3">Sep 16–20 · 2 guests</p>
            </div>
            <span class="text-[9.5px] font-medium text-amber-600">Limited</span>
          </div>
        </div>
      </div>

      <!-- Presidio Deep Dive 4: Room Operations -->
      <div v-else-if="kind === 'presidio-roomops'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2 flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-ink">Room Operations</h4>
            <p class="text-[10px] text-ink-3">Room moves & housekeeping readiness</p>
          </div>
          <span class="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] text-emerald-600">08 clean & ready</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Room 102</span>
              <p class="text-[9.5px] text-ink-3">Standard Queen · Floor 1</p>
            </div>
            <span class="rounded bg-emerald-500/15 px-2 py-0.5 text-[9px] font-medium text-emerald-600">Vacant</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div>
              <span class="font-medium text-ink">Room 202</span>
              <p class="text-[9.5px] text-ink-2">Executive King · Floor 2</p>
            </div>
            <span class="rounded bg-emerald-500/15 px-2 py-0.5 text-[9px] font-medium text-emerald-600">Vacant</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Room 302</span>
              <p class="text-[9.5px] text-ink-3">Deluxe Suite · Floor 3</p>
            </div>
            <span class="rounded bg-emerald-500/15 px-2 py-0.5 text-[9px] font-medium text-emerald-600">Vacant</span>
          </div>
        </div>
      </div>

      <!-- Presidio Deep Dive 5: Stay Extensions -->
      <div v-else-if="kind === 'presidio-extensions'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2 flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-ink">Stay Extensions</h4>
            <p class="text-[10px] text-ink-3">Flexible departure updates</p>
          </div>
          <span class="font-mono text-[9px] font-medium" :style="{ color: accentHex }">03 requests</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Claire Redfield</span>
              <p class="text-[9.5px] text-ink-3">Room 103 · +1 night</p>
            </div>
            <span class="rounded bg-amber-500/15 px-2 py-0.5 text-[9px] font-medium text-amber-600">Review</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div>
              <span class="font-medium text-ink">Marcus Vance</span>
              <p class="text-[9.5px] text-ink-2">Room 401 · +2 nights</p>
            </div>
            <span class="rounded px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Ready</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Sophia Chen</span>
              <p class="text-[9.5px] text-ink-3">Room 213 · +1 night</p>
            </div>
            <span class="rounded px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Ready</span>
          </div>
        </div>
      </div>

      <!-- Presidio Deep Dive 6: Guest Directory -->
      <div v-else-if="kind === 'presidio-directory'" class="flex flex-col gap-3">
        <div class="border-b border-line pb-2 flex items-center justify-between">
          <div>
            <h4 class="font-semibold text-ink">Guest Directory</h4>
            <p class="text-[10px] text-ink-3">Unified guest context</p>
          </div>
          <span class="font-mono text-[9px] text-ink-3">846 profiles</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Lord Harrison Sterling</span>
              <p class="text-[9.5px] text-ink-3">Returning guest · Room 501</p>
            </div>
            <span class="rounded bg-sunken px-2 py-0.5 text-[9px] font-medium text-ink-3">In house</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border p-2.5" :style="{ borderColor: accentHex, background: accentSoft }">
            <div>
              <span class="font-medium text-ink">Jennifer Taylor</span>
              <p class="text-[9.5px] text-ink-2">Returning guest · Room 105</p>
            </div>
            <span class="rounded px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Confirmed</span>
          </div>
          <div class="flex items-center justify-between rounded-xl border border-line bg-sunken/40 p-2.5">
            <div>
              <span class="font-medium text-ink">Dr. Alejandro Gomez</span>
              <p class="text-[9.5px] text-ink-3">First stay · Room 301</p>
            </div>
            <span class="rounded px-2 py-0.5 text-[9px] font-medium text-white" :style="{ background: accentHex }">Confirmed</span>
          </div>
        </div>
      </div>

      <!-- Fallback generic preview -->
      <div v-else class="flex min-h-[200px] items-center justify-center text-center text-ink-3">
        <span>{{ kind }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  kind: string
  accentHex: string
  accentSoft: string
}

const props = defineProps<Props>()

const breadcrumbPath = computed(() => {
  if (props.kind.startsWith('acumen')) {
    return 'acumen / ' + props.kind.replace('acumen-', '')
  }
  if (props.kind.startsWith('smartjuan')) {
    return 'smartjuan / ' + props.kind.replace('smartjuan-', '')
  }
  if (props.kind.startsWith('chismis')) {
    return 'chizmis / ' + props.kind.replace('chismis-', '')
  }
  if (props.kind.startsWith('presidio')) {
    return 'presidio / ' + props.kind.replace('presidio-', '')
  }
  return 'app / preview'
})
</script>

