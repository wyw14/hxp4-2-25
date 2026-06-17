export interface HexCoord {
  q: number;
  r: number;
}

export enum HexType {
  EMPTY = 'empty',
  NUTRIENT = 'nutrient',
  POLLUTED = 'polluted',
  MYCELIUM = 'mycelium',
  START = 'start',
}

export interface HexCell {
  coord: HexCoord;
  type: HexType;
  nutrientId?: string;
}

export interface GameState {
  id: string;
  level: number;
  gridRadius: number;
  cells: Record<string, HexCell>;
  nutrients: string[];
  connectedNutrients: string[];
  startCoord: HexCoord;
  myceliumCells: HexCoord[];
  steps: number;
  optimalSteps: number;
  status: 'playing' | 'won' | 'lost';
  createdAt: number;
  updatedAt: number;
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

export type ThemeName = 'forest' | 'nightglow' | 'colorblind';

export interface ThemeCellColors {
  fill: string;
  stroke: string;
}

export interface ThemeColors {
  empty: ThemeCellColors;
  nutrient: ThemeCellColors;
  polluted: ThemeCellColors;
  mycelium: ThemeCellColors;
  start: ThemeCellColors;
  myceliumConnection: string;
  pathPreview: string;
  reachableStroke: string;
  myceliumDot: string;
  hoverHighlight: string;
  background: {
    start: string;
    mid: string;
    end: string;
  };
  panel: {
    bg: string;
    border: string;
  };
  statCard: {
    bg: string;
    border: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  accent: {
    primary: string;
    secondary: string;
    warning: string;
    danger: string;
    info: string;
    success: string;
  };
  legend: {
    start: string;
    mycelium: string;
    nutrient: string;
    polluted: string;
    empty: string;
    emptyBorder: string;
  };
  button: {
    primaryStart: string;
    primaryEnd: string;
    primaryShadow: string;
    secondaryBg: string;
    secondaryBorder: string;
    secondaryHoverBg: string;
    dangerBg: string;
    dangerBorder: string;
    dangerHoverBg: string;
  };
  message: {
    infoBg: string;
    infoBorder: string;
    successBg: string;
    successBorder: string;
    errorBg: string;
    errorBorder: string;
  };
  header: {
    gradientStart: string;
    gradientMid: string;
    gradientEnd: string;
  };
  winModal: {
    bgStart: string;
    bgEnd: string;
    titleGradientStart: string;
    titleGradientEnd: string;
    statBg: string;
  };
}

export interface Theme {
  name: ThemeName;
  displayName: string;
  icon: string;
  colors: ThemeColors;
}
