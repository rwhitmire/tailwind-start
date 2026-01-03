<section class="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 md:py-24">
  <h1 class="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
    A minimal component system for modern web development
  </h1>
  <p class="mb-6 text-base leading-relaxed opacity-80 sm:mb-8 sm:text-lg md:text-xl lg:text-2xl">
    Tailwind Start is a minimal component system inspired by shadcn that can be used with any
    frontend library or server-generated pages. It's a perfect starting point for modernizing legacy
    applications.
  </p>
  <div class="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
    <a href="/components" class="btn btn-primary w-full sm:w-auto">Browse Components</a>
    <a href="/docs" class="btn btn-secondary w-full sm:w-auto">View Documentation</a>
  </div>
</section>

<div class="mx-4 mb-12 sm:mx-6 lg:mx-12">
  <div class="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div class="flex-1">
      <div class="card">
        <div class="form-group">
          <div class="mb-2 text-base font-medium sm:text-lg">Payment Method</div>
          <div class="text-sm opacity-60 sm:text-base">All transactions are secure and encrypted</div>
        </div>
        <div class="form-group">
          <label for="" class="form-label">Name on Card</label>
          <input type="text" placeholder="John Doe" class="form-control" />
        </div>
        <div class="form-group">
          <div class="mb-2 flex flex-col gap-4 sm:flex-row">
            <div class="flex-1 sm:flex-[2]">
              <label for="" class="form-label">Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" class="form-control" />
            </div>
            <div class="flex-1">
              <label for="" class="form-label">CVV</label>
              <input type="text" placeholder="123" class="form-control" />
            </div>
          </div>
          <div class="text-sm opacity-60 sm:text-base">Enter your 16-digit number</div>
        </div>
        <div class="form-group">
          <div class="flex flex-col gap-4 sm:flex-row">
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
        <div class="my-4 border-t"></div>
        <div class="form-group">
          <div class="mb-2 text-base font-medium">Billing Address</div>
          <div class="text-sm opacity-60">ksdlfksjdf</div>
          <div class="mt-2 text-sm">checkbox Same as shipping address</div>
        </div>
        <div class="my-4 border-t"></div>
        <div class="form-group">
          <label class="form-label">Comments</label>
          <textarea name="" id="" class="form-control" placeholder="Add any additional comments"
          ></textarea>
        </div>
        <div class="flex flex-col gap-2 sm:flex-row">
          <button class="btn btn-primary flex-1">Submit</button>
          <button class="btn btn-secondary flex-1">Cancel</button>
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
