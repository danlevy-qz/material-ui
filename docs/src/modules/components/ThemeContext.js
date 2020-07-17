import React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme as createLegacyModeTheme,
  unstable_createMuiStrictModeTheme as createStrictModeTheme,
  darken,
} from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { enUS, zhCN, faIR, ruRU, ptBR, esES, frFR, deDE, jaJP } from '@material-ui/core/locale';
import { blue, pink } from '@material-ui/core/colors';
import { getCookie } from 'docs/src/modules/utils/helpers';
import useLazyCSS from 'docs/src/modules/utils/useLazyCSS';
import { FONT_FACES } from '../constants';

const languageMap = {
  en: enUS,
  zh: zhCN,
  fa: faIR,
  ru: ruRU,
  pt: ptBR,
  es: esES,
  fr: frFR,
  de: deDE,
  ja: jaJP,
};

export const themeColor = blue[700];

const themeInitialOptions = {
  dense: false,
  direction: 'ltr',
  paletteColors: {},
  spacing: 8, // spacing unit
};

const highDensity = {
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiFilledInput: {
      margin: 'dense',
    },
    MuiFormControl: {
      margin: 'dense',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiListItem: {
      dense: true,
    },
    MuiOutlinedInput: {
      margin: 'dense',
    },
    MuiFab: {
      size: 'small',
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
    },
    MuiToolbar: {
      variant: 'dense',
    },
  },
  overrides: {
    MuiIconButton: {
      sizeSmall: {
        // minimal touch target hit spacing
        marginLeft: 4,
        marginRight: 4,
        padding: 12,
      },
    },
  },
};

export const DispatchContext = React.createContext(() => {
  throw new Error('Forgot to wrap component in `ThemeProvider`');
});

if (process.env.NODE_ENV !== 'production') {
  DispatchContext.displayName = 'ThemeDispatchContext';
}

const useEnhancedEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

let createMuiTheme;
if (process.env.REACT_MODE === 'legacy') {
  createMuiTheme = createLegacyModeTheme;
} else {
  createMuiTheme = createStrictModeTheme;
}

export function ThemeProvider(props) {
  const { children } = props;

  const [themeOptions, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'SET_SPACING':
        return {
          ...state,
          spacing: action.payload,
        };
      case 'INCREASE_SPACING': {
        return {
          ...state,
          spacing: state.spacing + 1,
        };
      }
      case 'DECREASE_SPACING': {
        return {
          ...state,
          spacing: state.spacing - 1,
        };
      }
      case 'SET_DENSE':
        return {
          ...state,
          dense: action.payload,
        };
      case 'RESET_DENSITY':
        return {
          ...state,
          dense: themeInitialOptions.dense,
          spacing: themeInitialOptions.spacing,
        };
      case 'RESET_COLORS':
        return {
          ...state,
          paletteColors: themeInitialOptions.paletteColors,
        };
      case 'CHANGE':
        return {
          ...state,
          paletteType: action.payload.paletteType || state.paletteType,
          direction: action.payload.direction || state.direction,
          paletteColors: action.payload.paletteColors || state.paletteColors,
        };
      default:
        throw new Error(`Unrecognized type ${action.type}`);
    }
  }, themeInitialOptions);

  const userLanguage = useSelector((state) => state.options.userLanguage);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredType = prefersDarkMode ? 'dark' : 'light';
  const { dense, direction, paletteColors, paletteType = preferredType, spacing } = themeOptions;

  useLazyCSS('/static/styles/prism-okaidia.css', '#prismjs');
  useLazyCSS('/static/styles/typography.css', '#typography');

  React.useEffect(() => {
    if (process.browser) {
      const nextPaletteColors = JSON.parse(getCookie('paletteColors') || 'null');
      const nextPaletteType = getCookie('paletteType');

      dispatch({
        type: 'CHANGE',
        payload: { paletteColors: nextPaletteColors, paletteType: nextPaletteType },
      });
    }
  }, []);

  // persist paletteType
  React.useEffect(() => {
    document.cookie = `paletteType=${paletteType};path=/;max-age=31536000`;
  }, [paletteType]);

  useEnhancedEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  const theme = React.useMemo(() => {
    const nextTheme = createMuiTheme(
      {
        typography: {
          fontFamily: [
            'hurme_no2-webfont',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
        direction,
        nprogress: {
          color: paletteType === 'light' ? '#000' : '#fff',
        },
        pallette: {
          common: {
            black: '#000',
            white: '#fff',
          },
          type: 'light',
          primary: {
            main: '#4257B2',
            light: 'rgb(71, 145, 219)',
            dark: 'rgb(17, 82, 147)',
            contrastText: '#fff',
          },
          secondary: {
            main: 'rgb(220, 0, 78)',
            light: 'rgb(227, 51, 113)',
            dark: 'rgb(154, 0, 54)',
            contrastText: '#fff',
          },
          error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
          },
          warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
          },
          info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff',
          },
          success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)',
          },
          grey: {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '200': '#eeeeee',
            '300': '#e0e0e0',
            '400': '#bdbdbd',
            '500': '#9e9e9e',
            '600': '#757575',
            '700': '#616161',
            '800': '#424242',
            '900': '#212121',
            A100: '#d5d5d5',
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161',
          },
          contrastThreshold: 3,
          tonalOffset: 0.2,
          text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
          },
          divider: 'rgba(0, 0, 0, 0.12)',
          background: {
            paper: '#fff',
            default: '#fff',
            level2: '#f5f5f5',
            level1: '#fff',
          },
          action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
          },
        },
        // palette: {

        //   primary: {
        //     main: paletteType === 'light' ? `#4257B2` : blue[200],
        //   },
        //   secondary: {
        //     main: paletteType === 'light' ? `#3CCFCF` : pink[200],
        //   },
        //   type: paletteType,
        //   background: {
        //     default: paletteType === 'light' ? '#fff' : '#121212',
        //   },
        //   ...paletteColors,
        // },
        spacing,
        overrides: {
          MuiCssBaseline: {
            '@global': {
              '@font-face': FONT_FACES,
            },
          },
        },
      },
      dense ? highDensity : null,
      languageMap[userLanguage],
    );

    nextTheme.palette.background.level2 =
      paletteType === 'light' ? nextTheme.palette.grey[100] : '#333';

    nextTheme.palette.background.level1 =
      paletteType === 'light' ? '#fff' : nextTheme.palette.grey[900];

    return nextTheme;
  }, [dense, direction, paletteType, spacing, userLanguage]);

  React.useEffect(() => {
    // Expose the theme as a global variable so people can play with it.
    if (process.browser) {
      window.theme = theme;
    }
  }, [theme]);

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

/**
 * @returns {(nextOptions: Partial<typeof themeInitialOptions>) => void}
 */
export function useChangeTheme() {
  const dispatch = React.useContext(DispatchContext);
  return React.useCallback((options) => dispatch({ type: 'CHANGE', payload: options }), [dispatch]);
}
