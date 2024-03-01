import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import icon from 'astro-icon'
import {
  presetUno,
  presetAttributify
} from 'unocss'

// https://astro.build/config
export default defineConfig({
  site: 'https://nazhard.github.io',
  integrations: [
    icon(),
    unocss({
      injectReset: true,
      presets: [
        presetUno(),
        presetAttributify()
      ],
    }),
  ]
});
