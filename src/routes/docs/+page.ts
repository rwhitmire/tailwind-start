import { createHighlighter } from "shiki";
import layoutCss from "../layout.css?raw";

export async function load() {
  const highlighter = await createHighlighter({
    themes: ["vitesse-light", "vitesse-dark"],
    langs: ["css"],
  });

  const highlightedLight = highlighter.codeToHtml(layoutCss, {
    lang: "css",
    theme: "vitesse-light",
  });

  const highlightedDark = highlighter.codeToHtml(layoutCss, {
    lang: "css",
    theme: "vitesse-dark",
  });

  return {
    highlightedLight,
    highlightedDark,
  };
}
