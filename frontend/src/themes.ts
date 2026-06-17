import { Theme, ThemeName, HexType } from './types';

export const THEMES: Record<ThemeName, Theme> = {
  forest: {
    name: 'forest',
    displayName: '森林主题',
    icon: '🌲',
    colors: {
      empty: { fill: '#2d4a3e', stroke: '#3d5a4e' },
      nutrient: { fill: '#8b6914', stroke: '#6b4914' },
      polluted: { fill: '#5c1a1a', stroke: '#3c0a0a' },
      mycelium: { fill: '#7cb342', stroke: '#9ccc65' },
      start: { fill: '#2e7d32', stroke: '#4caf50' },
      myceliumConnection: '#9ccc65',
      pathPreview: '#ffd54f',
      reachableStroke: '#aed581',
      myceliumDot: '#c5e1a5',
      background: {
        start: '#1a2f1a',
        mid: '#0d3d0d',
        end: '#072207',
      },
      panel: {
        bg: 'rgba(255, 255, 255, 0.05)',
        border: 'rgba(255, 255, 255, 0.1)',
      },
      statCard: {
        bg: 'rgba(255, 255, 255, 0.03)',
        border: 'rgba(255, 255, 255, 0.08)',
      },
      text: {
        primary: '#e0e0e0',
        secondary: '#8a9a8a',
      },
      accent: {
        primary: '#7cb342',
        secondary: '#2e7d32',
        warning: '#ffb74d',
        danger: '#ef5350',
        info: '#4fc3f7',
        success: '#66bb6a',
      },
      legend: {
        start: '#2e7d32',
        mycelium: '#7cb342',
        nutrient: '#8b6914',
        polluted: '#5c1a1a',
        empty: '#2d4a3e',
        emptyBorder: '#aed581',
      },
      button: {
        primaryStart: '#7cb342',
        primaryEnd: '#2e7d32',
        secondaryBg: 'rgba(255, 255, 255, 0.08)',
        secondaryBorder: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  nightglow: {
    name: 'nightglow',
    displayName: '夜光主题',
    icon: '🌙',
    colors: {
      empty: { fill: '#1a1a2e', stroke: '#2a2a4e' },
      nutrient: { fill: '#ff6b35', stroke: '#cc5529' },
      polluted: { fill: '#7b2cbf', stroke: '#5a189a' },
      mycelium: { fill: '#00f5d4', stroke: '#00e5c4' },
      start: { fill: '#00bbf9', stroke: '#00a8e0' },
      myceliumConnection: '#00f5d4',
      pathPreview: '#fee440',
      reachableStroke: '#f15bb5',
      myceliumDot: '#9bf6ff',
      background: {
        start: '#0f0f23',
        mid: '#1a1a3e',
        end: '#0d0d1a',
      },
      panel: {
        bg: 'rgba(0, 245, 212, 0.05)',
        border: 'rgba(0, 245, 212, 0.15)',
      },
      statCard: {
        bg: 'rgba(0, 187, 249, 0.05)',
        border: 'rgba(0, 187, 249, 0.1)',
      },
      text: {
        primary: '#e0e0ff',
        secondary: '#8a8aaa',
      },
      accent: {
        primary: '#00f5d4',
        secondary: '#00bbf9',
        warning: '#fee440',
        danger: '#f15bb5',
        info: '#00bbf9',
        success: '#00f5d4',
      },
      legend: {
        start: '#00bbf9',
        mycelium: '#00f5d4',
        nutrient: '#ff6b35',
        polluted: '#7b2cbf',
        empty: '#1a1a2e',
        emptyBorder: '#f15bb5',
      },
      button: {
        primaryStart: '#00f5d4',
        primaryEnd: '#00bbf9',
        secondaryBg: 'rgba(0, 245, 212, 0.08)',
        secondaryBorder: 'rgba(0, 245, 212, 0.15)',
      },
    },
  },
  colorblind: {
    name: 'colorblind',
    displayName: '色弱友好',
    icon: '♿',
    colors: {
      empty: { fill: '#e8e8e8', stroke: '#d0d0d0' },
      nutrient: { fill: '#e69f00', stroke: '#cc8800' },
      polluted: { fill: '#d55e00', stroke: '#b04c00' },
      mycelium: { fill: '#0072b2', stroke: '#005f99' },
      start: { fill: '#009e73', stroke: '#008060' },
      myceliumConnection: '#0072b2',
      pathPreview: '#cc79a7',
      reachableStroke: '#56b4e9',
      myceliumDot: '#56b4e9',
      background: {
        start: '#f5f5f5',
        mid: '#ececec',
        end: '#e0e0e0',
      },
      panel: {
        bg: 'rgba(0, 0, 0, 0.03)',
        border: 'rgba(0, 0, 0, 0.1)',
      },
      statCard: {
        bg: 'rgba(0, 0, 0, 0.02)',
        border: 'rgba(0, 0, 0, 0.08)',
      },
      text: {
        primary: '#222222',
        secondary: '#666666',
      },
      accent: {
        primary: '#0072b2',
        secondary: '#009e73',
        warning: '#e69f00',
        danger: '#d55e00',
        info: '#0072b2',
        success: '#009e73',
      },
      legend: {
        start: '#009e73',
        mycelium: '#0072b2',
        nutrient: '#e69f00',
        polluted: '#d55e00',
        empty: '#e8e8e8',
        emptyBorder: '#56b4e9',
      },
      button: {
        primaryStart: '#009e73',
        primaryEnd: '#0072b2',
        secondaryBg: 'rgba(0, 0, 0, 0.05)',
        secondaryBorder: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
};

export function getThemeColorsForHexType(theme: Theme, type: HexType): { fill: string; stroke: string } {
  switch (type) {
    case HexType.EMPTY:
      return theme.colors.empty;
    case HexType.NUTRIENT:
      return theme.colors.nutrient;
    case HexType.POLLUTED:
      return theme.colors.polluted;
    case HexType.MYCELIUM:
      return theme.colors.mycelium;
    case HexType.START:
      return theme.colors.start;
    default:
      return theme.colors.empty;
  }
}
