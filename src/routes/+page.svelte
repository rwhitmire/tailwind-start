<section class="mx-auto max-w-4xl px-6 py-24 text-center">
  <h1 class="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
    A minimal component system for modern web development
  </h1>
  <p class="mb-8 text-xl leading-relaxed opacity-80 sm:text-2xl">
    Tailwind Start is a minimal component system inspired by shadcn that can be used with any
    frontend library or server-generated pages. It's a perfect starting point for modernizing legacy
    applications.
  </p>
  <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
    <a href="/components" class="btn btn-primary">Browse Components</a>
    <a href="/docs" class="btn btn-secondary">View Documentation</a>
  </div>
</section>

<div class="m-12">
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div class="flex-1">
      <div class="card">
        <div class="form-group">
          <div class="mb-2 text-lg font-medium">Payment Method</div>
          <div class="opacity-60">All transactions are secure and encrypted</div>
        </div>
        <div class="form-group">
          <label for="" class="form-label">Name on Card</label>
          <input type="text" placeholder="John Doe" class="form-control" />
        </div>
        <div class="form-group">
          <div class="mb-2 flex gap-4">
            <div class="flex-2">
              <label for="" class="form-label">Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" class="form-control" />
            </div>
            <div class="flex-1">
              <label for="" class="form-label">CVV</label>
              <input type="text" placeholder="123" class="form-control" />
            </div>
          </div>
          <div class="opacity-60">Enter your 16-digit number</div>
        </div>
        <div class="form-group">
          <div class="flex gap-4">
            <div class="flex-1">
              <label for="" class="form-label">Month</label>
              <select name="" id="" class="form-control"></select>
            </div>
            <div class="flex-1">
              <label for="" class="form-label">Year</label>
              <select name="" id="" class="form-control"></select>
            </div>
          </div>
        </div>
        <div>divider</div>
        <div class="form-group">
          <div>Billing Address</div>
          <div>ksdlfksjdf</div>
          <div>checkbox Same as shipping address</div>
        </div>
        <div>divider</div>
        <div class="form-group">
          <label class="form-label">Comments</label>
          <textarea name="" id="" class="form-control" placeholder="Add any additional comments"
          ></textarea>
        </div>
        <div class="flex gap-2">
          <button class="btn btn-primary">Submit</button>
          <button class="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="card">2</div>
    </div>
    <div class="flex-1">
      <div class="card">3</div>
    </div>
    <div class="flex-1">
      <div class="card">4</div>
    </div>
  </div>
</div>
