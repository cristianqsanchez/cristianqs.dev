import ReactJsIcon from '@icons/reactjs-icon.astro'
import NextJsIcon from '@icons/nextjs-icon.astro'
import CssIcon from '@icons/css-icon.astro'
import HtmlIcon from '@icons/html-icon.astro'
import JavascriptIcon from '@icons/javascript-icon.astro'
import TypescriptIcon from '@icons/typescript-icon.astro'
import TailwindIcon from '@icons/tailwind-icon.astro'
import ViteJsIcon from '@icons/vitejs-icon.astro'
import AstroIcon from '@icons/astro-icon.astro'

export type TechStackItem = {
  name: string
  class?: string
  icon: (_props: Record<string, any>) => any
}

enum TechStack {
  Astro = 'Astro',
  NEXT = 'NextJS',
  REACT = 'ReactJS',
  TYPESCRIPT = 'TypeScript',
  JAVASCRIPT = 'JavaScript',
  VITE = 'ViteJS',
  HTML = 'HTML',
  CSS = 'CSS',
  TAILWIND = 'TailwindCSS',
}

type TechStackItems = {
  [techStackItem in TechStack]: TechStackItem
}

export const TECH_STACK: TechStackItems = {
  [TechStack.REACT]: {
    name: 'ReactJS',
    class: 'bg-neutral-900',
    icon: ReactJsIcon,
  },
  [TechStack.NEXT]: {
    name: 'NextJS',
    class: 'bg-neutral-900',
    icon: NextJsIcon,
  },
  [TechStack.TYPESCRIPT]: {
    name: 'TypeScript',
    class: 'bg-neutral-900',
    icon: TypescriptIcon,
  },
  [TechStack.JAVASCRIPT]: {
    name: 'JavaScript',
    class: 'bg-neutral-900',
    icon: JavascriptIcon,
  },
  [TechStack.VITE]: {
    name: 'ViteJS',
    class: 'bg-neutral-900',
    icon: ViteJsIcon,
  },
  [TechStack.HTML]: {
    name: 'HTML',
    class: 'bg-neutral-900',
    icon: HtmlIcon,
  },
  [TechStack.CSS]: {
    name: 'CSS',
    class: 'bg-neutral-900',
    icon: CssIcon,
  },
  [TechStack.TAILWIND]: {
    name: 'TailwindCSS',
    class: 'bg-neutral-900',
    icon: TailwindIcon,
  },
  [TechStack.Astro]: {
    name: 'Astro',
    class: 'bg-neutral-900',
    icon: AstroIcon,
  },
}
