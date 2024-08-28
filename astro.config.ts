import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import { presetUno, presetAttributify } from 'unocss'

// https://astro.build/config
export default defineConfig({
  site: 'https://faulbert.github.io',
  integrations: [
    icon(),
    mdx(),
    unocss({
      injectReset: true,
      presets: [presetUno(), presetAttributify()]
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha'
    }
  }
})
