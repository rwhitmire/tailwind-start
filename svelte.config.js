import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    // If deploying to a project page (not user/organization page), uncomment and set your repo name:
    // paths: {
    //   base: process.env.NODE_ENV === "production" ? "/your-repo-name" : "",
    // },
  },
};

export default config;
