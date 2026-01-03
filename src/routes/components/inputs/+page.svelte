<div>
  <h1 class="mb-6 text-3xl font-bold">Inputs</h1>
  <p class="mb-8 text-neutral-600 dark:text-neutral-400">
    A collection of input components and form controls.
  </p>

  <div class="space-y-8">
    <section>
      <h2 class="mb-4 text-xl font-semibold">Text Input</h2>
      <div class="max-w-md space-y-4">
        <div class="form-group">
          <label for="text-input" class="form-label">Text Input</label>
          <input
            type="text"
            id="text-input"
            placeholder="Enter text..."
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="text-input-disabled" class="form-label">Disabled</label>
          <input
            type="text"
            id="text-input-disabled"
            placeholder="Disabled input"
            class="form-control"
            disabled
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-xl font-semibold">Textarea</h2>
      <div class="max-w-md">
        <div class="form-group">
          <label for="textarea" class="form-label">Textarea</label>
          <textarea
            id="textarea"
            placeholder="Enter your message..."
            class="form-control"
            rows="4"
          ></textarea>
        </div>
      </div>
    </section>

    <section>
      <h2 class="mb-4 text-xl font-semibold">Select</h2>
      <div class="max-w-md">
        <div class="form-group">
          <label for="select" class="form-label">Select</label>
          <select id="select" class="form-control">
            <option value="">Choose an option...</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
    </section>
  </div>
</div>
