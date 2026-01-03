<script lang="ts">
  let basicDialog: HTMLDialogElement;
  let formDialog: HTMLDialogElement;
  let largeDialog: HTMLDialogElement;

  function openModal(dialog: HTMLDialogElement | undefined) {
    dialog?.showModal();
  }

  function closeModal(dialog: HTMLDialogElement | undefined) {
    dialog?.close();
  }
</script>

<div>
  <h1 class="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl">Modal</h1>
  <p class="mb-6 text-sm text-neutral-600 dark:text-neutral-400 sm:mb-8 sm:text-base">
    A modal component using the native HTML <code
      class="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-900">&lt;dialog&gt;</code
    > element with minimal JavaScript.
  </p>

  <div class="space-y-6 sm:space-y-8">
    <section>
      <h2 class="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">Basic Modal</h2>
      <button onclick={() => openModal(basicDialog)} class="btn btn-primary"> Open Modal </button>

      <dialog
        bind:this={basicDialog}
        class="top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-neutral-200 bg-white p-0 shadow-xl backdrop:bg-black/50 dark:border-neutral-800 dark:bg-neutral-950 sm:w-full"
      >
        <div class="p-4 sm:p-6">
          <h3 class="mb-4 text-xl font-semibold">Modal Title</h3>
          <p class="mb-6 text-neutral-600 dark:text-neutral-400">
            This is a modal dialog using the native HTML <code
              class="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-900"
              >&lt;dialog&gt;</code
            > element. It requires minimal JavaScript to open and close.
          </p>
          <div class="flex flex-col-reverse justify-end gap-3 sm:flex-row">
            <button onclick={() => closeModal(basicDialog)} class="btn btn-secondary">
              Cancel
            </button>
            <button onclick={() => closeModal(basicDialog)} class="btn btn-primary">
              Confirm
            </button>
          </div>
        </div>
      </dialog>
    </section>

    <section>
      <h2 class="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">Modal with Form</h2>
      <button onclick={() => openModal(formDialog)} class="btn btn-primary">
        Open Form Modal
      </button>

      <dialog
        bind:this={formDialog}
        class="top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-neutral-200 bg-white p-0 shadow-xl backdrop:bg-black/50 dark:border-neutral-800 dark:bg-neutral-950 sm:w-full"
      >
        <form method="dialog" class="p-4 sm:p-6">
          <h3 class="mb-4 text-xl font-semibold">Contact Form</h3>
          <div class="mb-4 space-y-4">
            <div>
              <label
                for="name"
                class="mb-1 block text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                class="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                for="email"
                class="mb-1 block text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                for="message"
                class="mb-1 block text-sm font-medium text-neutral-900 dark:text-neutral-100"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                rows="4"
                class="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          <div class="flex flex-col-reverse justify-end gap-3 sm:flex-row">
            <button type="button" onclick={() => closeModal(formDialog)} class="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </dialog>
    </section>

    <section>
      <h2 class="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">Large Modal</h2>
      <button onclick={() => openModal(largeDialog)} class="btn btn-primary">
        Open Large Modal
      </button>

      <dialog
        bind:this={largeDialog}
        class="top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-neutral-200 bg-white p-0 shadow-xl backdrop:bg-black/50 dark:border-neutral-800 dark:bg-neutral-950 sm:w-full"
      >
        <div class="p-4 sm:p-6">
          <h3 class="mb-4 text-2xl font-semibold">Large Modal Content</h3>
          <div class="mb-6 space-y-4 text-neutral-600 dark:text-neutral-400">
            <p>
              This modal has a larger maximum width to accommodate more content. The native
              <code class="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-900"
                >&lt;dialog&gt;</code
              >
              element handles the backdrop, focus management, and closing behavior automatically.
            </p>
            <p>
              You can close this modal by clicking the backdrop, pressing Escape, or clicking the
              close button.
            </p>
            <ul class="list-inside list-disc space-y-2">
              <li>Native browser support</li>
              <li>Automatic focus management</li>
              <li>Backdrop click to close</li>
              <li>Escape key support</li>
              <li>Accessible by default</li>
            </ul>
          </div>
          <div class="flex justify-end">
            <button onclick={() => closeModal(largeDialog)} class="btn btn-primary"> Close </button>
          </div>
        </div>
      </dialog>
    </section>
  </div>
</div>

<style>
  dialog {
    margin: 0;
    max-width: calc(100vw - 1rem);
    max-height: calc(100vh - 1rem);
  }

  @media (min-width: 640px) {
    dialog {
      max-width: calc(100vw - 2rem);
      max-height: calc(100vh - 2rem);
    }
  }

  dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
</style>
