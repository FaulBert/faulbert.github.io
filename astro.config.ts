import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'
import solidJs from '@astrojs/solid-js'
import { presetUno, presetAttributify } from 'unocss'

// https://astro.build/config
export default defineConfig({
  site: 'https://nazhard.github.io',
  integrations: [
    icon(),
    mdx(),
    solidJs(),
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
