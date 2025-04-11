import React, { useEffect, useRef} from 'react';
import { FC, ReactNode, forwardRef, ForwardRefRenderFunction } from 'react';

// Types
export interface AvatarProps {
  name?: string;
  value?: string;
  title?: string | boolean;
  className?: string;
  unstyled?: boolean;
  fgColor?: string;
  textSizeRatio?: number;
  textMarginRatio?: number;
  round?: boolean | string | number;
  size?: number | string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

interface AvatarData {
  value: string;
  color: string;
  src?: string;
  sourceName?: string;
}

interface WrapperProps extends AvatarProps {
  avatar: AvatarData;
  children: ReactNode;
}

interface TextProps extends AvatarProps {
  avatar: AvatarData;
}

// Utils
const parseSize = (size: number | string): { str: string; value: number } => {
  if (typeof size === 'number') {
    return {
      str: `${size}px`,
      value: size
    };
  }
  
  return {
    str: size,
    value: parseInt(size, 10) || 0
  };
};

const calculateBorderRadius = (round?: boolean | string | number): string => {
  if (round === true) {
    return '100%';
  }
  if (typeof round === 'number') {
    return `${round}px`;
  }
  if (typeof round === 'string') {
    return round;
  }
  return '0';
};

const getNullableText = (
  title: string | boolean | undefined, 
  fallback: string | undefined
): string | null => {
  if (title === false) {
    return null;
  }
  return (typeof title === 'string' ? title : fallback) || null;
};

const setGroupedTimeout = (callback: () => void, ttl: number): NodeJS.Timeout => {
  return setTimeout(callback, ttl);
};

const stringToColor = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    const colors = [
      '#F44336', '#E91E63', '#9C27B0', '#673AB7',
      '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
      '#009688', '#4CAF50', '#8BC34A', '#CDDC39',
      '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'
    ];
  
    return colors[Math.abs(hash) % colors.length];
  };
  
// Cache implementation
export class Cache {
  private static cache: { [key: string]: any } = {};

  static get(key: string): any {
    return this.cache[key];
  }

  static set(key: string, value: any): void {
    this.cache[key] = value;
  }

  static remove(key: string): void {
    delete this.cache[key];
  }

  static clear(): void {
    this.cache = {};
  }
}

// Context for configuration
const ConfigContext = React.createContext<any>({});

export const ConfigProvider: FC<{ value: any, children: ReactNode }> = ({ value, children }) => (
  <ConfigContext.Provider value={value}>
    {children}
  </ConfigContext.Provider>
);


// Wrapper component
const Wrapper: FC<WrapperProps> = ({
  className = '',
  unstyled = false,
  round = false,
  style,
  avatar,
  onClick,
  children,
  size = 100
}) => {
  const parsedSize = parseSize(size);
  
  const hostStyle: React.CSSProperties = unstyled ? {} : {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: parsedSize.str,
    height: parsedSize.str,
    borderRadius: calculateBorderRadius(round),
    fontFamily: 'Helvetica, Arial, sans-serif',
    ...style
  };
  
  const classNames = [className, 'sb-avatar'];
  
  if (avatar.sourceName) {
    const source = avatar.sourceName.toLowerCase()
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    classNames.push('sb-avatar--' + source);
  }
  
  return (
    <div 
      className={classNames.join(' ')}
      onClick={onClick}
      style={hostStyle}
    >
      {children}
    </div>
  );
};

// Text component for displaying initials
const AvatarText: FC<TextProps> = ({
  className = '',
  round = false,
  unstyled = false,
  title,
  name,
  value,
  avatar,
  fgColor = '#FFF',
  size = 100,
  textSizeRatio = 3,
  textMarginRatio = 0.15,
  ...rest
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    
    if (spanRef.current) {
      scaleTextNode(spanRef.current);
    }
    
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (spanRef.current) {
      scaleTextNode(spanRef.current);
    }
  }, [avatar.value, size]);

  const scaleTextNode = (node: HTMLSpanElement, retryTTL = 16) => {
    if (!node || !node.parentNode || unstyled || avatar.src || !mounted.current) {
      return;
    }

    const spanNode = node.parentNode as HTMLElement;
    const tableNode = spanNode.parentNode as HTMLElement;

    const { width: containerWidth, height: containerHeight } = spanNode.getBoundingClientRect();

    if (containerWidth === 0 && containerHeight === 0) {
      const ttl = Math.min(retryTTL * 1.5, 500);
      setGroupedTimeout(() => scaleTextNode(node, ttl), ttl);
      return;
    }

    if (!tableNode.style.fontSize) {
      const baseFontSize = containerHeight / textSizeRatio;
      tableNode.style.fontSize = `${baseFontSize}px`;
    }

    spanNode.style.fontSize = '';

    const { width: textWidth } = node.getBoundingClientRect();

    if (textWidth < 0) {
      return;
    }

    const maxTextWidth = containerWidth * (1 - (2 * textMarginRatio));

    if (textWidth > maxTextWidth) {
      spanNode.style.fontSize = `calc(1em * ${maxTextWidth / textWidth})`;
    }
  };

  const parsedSize = parseSize(size);

  const initialsStyle: React.CSSProperties = unstyled ? {} : {
    width: parsedSize.str,
    height: parsedSize.str,
    lineHeight: 'initial',
    textAlign: 'center',
    color: fgColor,
    background: avatar.color,
    borderRadius: calculateBorderRadius(round),
  };

  const tableStyle: React.CSSProperties = unstyled ? {} : {
    display: 'table',
    tableLayout: 'fixed',
    width: '100%',
    height: '100%'
  };

  const spanStyle: React.CSSProperties = unstyled ? {} : {
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '100%',
    whiteSpace: 'nowrap'
  };

  return (
    <Wrapper className={className} round={round} unstyled={unstyled} size={size} avatar={avatar} {...rest}>
      <div 
        className={`${className} sb-avatar__text`}
        style={initialsStyle}
        title={getNullableText(title, name || value)}
      >
        <div style={tableStyle}>
          <span style={spanStyle}>
            <span ref={spanRef}>
              {avatar.value}
            </span>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};



const createAvatarDataProvider = (options: any) => {
    const DataProvider: FC<{ children: (avatar: AvatarData) => ReactNode, propertyName: string } & AvatarProps> = 
      ({ name, value, children, propertyName, ...rest }) => {
        const getInitials = (name?: string): string => {
          if (!name) return '';
          return name
            .split(' ')
            .map(part => part.charAt(0))
            .join('')
            .toUpperCase()
            .substring(0, 2);
        };
        
        const avatarValue = value || getInitials(name);
        const avatarColor = stringToColor(avatarValue); // Use deterministic color
  
        const avatar: AvatarData = {
          value: avatarValue,
          color: avatarColor,
          sourceName: 'text'
        };
  
        return <>{children(avatar)}</>;
      };
    
    return DataProvider;
  };
  

  
// Main component creator
export function createAvatarComponent(options = {}) {
  const DataProvider = createAvatarDataProvider(options);
  
  const AvatarComponent: ForwardRefRenderFunction<unknown, AvatarProps> = (props, ref) => (
    <DataProvider {...props} propertyName="avatar">
      {(avatar) => {
        // Always use Text avatar in this implementation
        return <AvatarText {...props} avatar={avatar} />;
      }}
    </DataProvider>
  );
  
  const Component = forwardRef(AvatarComponent);
  
  return Object.assign(Component, {

    ConfigProvider,
    Cache
  });
}

// Create the default Avatar component
const Avatar = createAvatarComponent({});

export default Avatar;