// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
    site: 'https://beta.nextftc.dev',
    integrations: [
       starlight({
          title: 'NextFTC',
          logo: {
             light: './src/assets/nextftc-banner-light.png',
             dark: './src/assets/nextftc-banner-dark.png',
             replacesTitle: true,
          },
          favicon: '/favicon.svg',
          customCss: ['./src/styles/custom.css'],
          social: [
             { icon: 'github', label: 'GitHub', href: 'https://github.com/NextFTC/NextFTCSuite' },
             { icon: 'discord', label: 'Discord', href: 'https://nextftc.dev/discord' },
          ],
          sidebar: [
             {
                label: 'Guides',
                items: [
                   // Each item here is one entry in the navigation menu.
                   { label: 'Example Guide', slug: 'guides/example' },
                ],
             },
             {
                label: 'Hardware',
                items: [
                   {
                      label: 'Actuators',
                      items: [{ autogenerate: { directory: 'hardware/actuators' } }],
                   },
                   {
                      label: 'Sensors',
                      items: [{ autogenerate: { directory: 'hardware/sensors' } }],
                   },
                   {
                      label: 'Miscellaneous',
                      items: [{ autogenerate: { directory: 'hardware/miscellaneous' } }],
                   },
                ],
             },

             {
                 label: 'Robot',
                 items: [{ autogenerate: { directory: 'robot' } }],
             },
             {
                 label: 'Control',
                 items: [{ autogenerate: { directory: 'control' } }],
             },
          ],
          plugins: [starlightThemeGalaxy()]
       }),
    ],
});
