<div>
  <h1 class="mb-6 text-3xl font-bold">Accordion</h1>
  <p class="mb-8 text-neutral-600 dark:text-neutral-400">
    A collection of accordion components using plain HTML and Tailwind CSS.
  </p>

  <div class="space-y-8">
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Accordion</h2>
      <div class="space-y-2">
        <details
          class="group rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
        >
          <summary
            class="flex cursor-pointer items-center justify-between px-4 py-3 font-medium transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <span>What is an accordion?</span>
            <svg
              class="h-5 w-5 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div class="border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <p class="text-neutral-600 dark:text-neutral-400">
              An accordion is a UI component that allows users to expand and collapse sections of
              content. It's useful for organizing information in a compact space.
            </p>
          </div>
        </details>

        <details
          class="group rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
        >
          <summary
            class="flex cursor-pointer items-center justify-between px-4 py-3 font-medium transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <span>How does it work?</span>
            <svg
              class="h-5 w-5 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div class="border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <p class="text-neutral-600 dark:text-neutral-400">
              This accordion uses native HTML <code
                class="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-900"
                >&lt;details&gt;</code
              >
              and
              <code class="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-900"
                >&lt;summary&gt;</code
              > elements, styled with Tailwind CSS. No JavaScript is required!
            </p>
          </div>
        </details>

        <details
          class="group rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
        >
          <summary
            class="flex cursor-pointer items-center justify-between px-4 py-3 font-medium transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <span>Can I customize it?</span>
            <svg
              class="h-5 w-5 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div class="border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <p class="text-neutral-600 dark:text-neutral-400">
              Yes! You can customize the colors, spacing, borders, and animations using Tailwind
              utility classes. The accordion is fully accessible and works with keyboard navigation.
            </p>
          </div>
        </details>
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-xl font-semibold">Accordion with Multiple Items</h2>
      <div class="space-y-2">
        <details
          class="group rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
        >
          <summary
            class="flex cursor-pointer items-center justify-between px-4 py-3 font-medium transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <span>Section 1</span>
            <svg
              class="h-5 w-5 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div class="border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <p class="mb-2 text-neutral-600 dark:text-neutral-400">
              Content for section 1 goes here.
            </p>
            <ul class="list-inside list-disc space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>Item one</li>
              <li>Item two</li>
              <li>Item three</li>
            </ul>
          </div>
        </details>

        <details
          class="group rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
        >
          <summary
            class="flex cursor-pointer items-center justify-between px-4 py-3 font-medium transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <span>Section 2</span>
            <svg
              class="h-5 w-5 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div class="border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <p class="text-neutral-600 dark:text-neutral-400">Content for section 2 goes here.</p>
          </div>
        </details>

        <details
          class="group rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
        >
          <summary
            class="flex cursor-pointer items-center justify-between px-4 py-3 font-medium transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            <span>Section 3</span>
            <svg
              class="h-5 w-5 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div class="border-t border-neutral-200 px-4 py-3 dark:border-neutral-800">
            <p class="text-neutral-600 dark:text-neutral-400">Content for section 3 goes here.</p>
          </div>
        </details>
      </div>
    </section>
  </div>
</div>
