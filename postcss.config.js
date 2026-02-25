// postcss.config.js or similar
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

function removeBackdropSelector() {
  return {
    postcssPlugin: 'remove-backdrop-selector',
    Once(root) {
      root.walkRules(rule => {
        if (rule.selector.includes('::backdrop')) {
          rule.remove();
        }
      });
    }
  };
}
removeBackdropSelector.postcss = true;

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    removeBackdropSelector,
  ],
};
