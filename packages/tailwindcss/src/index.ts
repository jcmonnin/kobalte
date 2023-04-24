/*!
 * Portions of this file are based on code from headlessui.
 * MIT Licensed, Copyright (c) 2020 Tailwind Labs.
 *
 * Credits to the Tailwind Labs team:
 * https://github.com/tailwindlabs/headlessui/blob/8e1e19f94c28af68c05becc80bf89575e1fa1d36/packages/@headlessui-tailwindcss/src/index.ts
 */

import plugin from "tailwindcss/plugin";

const STATES = [
  "valid",
  "invalid",
  "required",
  "disabled",
  "readonly",
  "checked",
  "indeterminate",
  "selected",
  "pressed",
  "expanded",
  "closed",
  "highlighted",
  "current",
];

const ORIENTATIONS = ["horizontal", "vertical"];

export interface KobalteTailwindPluginOptions {
  /** The prefix of generated classes. */
  prefix?: string;
}

export default plugin.withOptions<KobalteTailwindPluginOptions>(({ prefix = "ui" } = {}) => {
  return ({ addVariant }) => {
    for (const state of STATES) {
      addVariant(`${prefix}-${state}`, [`&[data-${state}]`]);
      addVariant(`${prefix}-not-${state}`, [`&:not([data-${state}])`]);
      addVariant(`${prefix}-group-${state}`, `:merge(.group)[data-${state}] &`);
      addVariant(`${prefix}-peer-${state}`, `:merge(.peer)[data-${state}] ~ &`);
    }

    for (const orientation of ORIENTATIONS) {
      addVariant(`${prefix}-${orientation}`, [`&[data-orientation='${orientation}']`]);
      addVariant(`${prefix}-not-${orientation}`, [`&:not([data-orientation='${orientation}'])`]);
      addVariant(
        `${prefix}-group-${orientation}`,
        `:merge(.group)[data-orientation='${orientation}'] &`
      );
      addVariant(
        `${prefix}-peer-${orientation}`,
        `:merge(.peer)[data-orientation='${orientation}'] ~ &`
      );
    }
  };
});