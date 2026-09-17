// WordPress / Salient / Elementor Pro caliber motion presets
// Featuring smooth custom cubic-bezier deceleration curves and cascading ground-to-above reveals

export const WP_EASE = [0.16, 1, 0.3, 1] as const;

export const springSmooth = {
  duration: 0.7,
  ease: WP_EASE
};

// Main Title Reveal - Slides up from below with authority
export const titleReveal = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: WP_EASE }
  }
};

// Eyebrow / Tag Reveal
export const eyebrowReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: WP_EASE }
  }
};

// Subhead Description Reveal
export const subheadReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.1, ease: WP_EASE }
  }
};

// Card Slide In From Ground (Deep vertical rise)
export const cardSlideUp = {
  hidden: { opacity: 0, y: 52 },
  visible: (customIndex: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: customIndex * 0.1,
      ease: WP_EASE
    }
  })
};

// Horizontal Slide in from Left/Right
export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: WP_EASE }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: WP_EASE }
  }
};

// Stagger parent containers
export const staggerParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const defaultViewport = {
  once: true,
  margin: "-60px"
};
