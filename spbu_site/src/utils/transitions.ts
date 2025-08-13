export type TransitionType = 'fade' | 'slide' | 'zoom' | 'flip' | 'scale' | 'blur';
export type LoaderType = 'spinner' | 'dots' | 'progress' | 'pulse';

interface AnimationConfig {
  duration: number;
  delay?: number;
  easing: string;
}

interface TransitionConfig extends AnimationConfig {
  type: TransitionType;
  direction?: 'left' | 'right' | 'up' | 'down';
  scale?: number;
  blur?: number;
}

interface LoaderConfig extends AnimationConfig {
  type: LoaderType;
  color: string;
  size?: number;
}

export class TransitionManager {
  private static instance: TransitionManager;
  private defaultConfig: TransitionConfig = {
    type: 'fade',
    duration: 300,
    easing: 'ease-in-out'
  };

  private constructor() {
  }

  public static getInstance(): TransitionManager {
    if (!TransitionManager.instance) {
      TransitionManager.instance = new TransitionManager();
    }
    return TransitionManager.instance;
  }

  public createTransitionStyles(elementId: string, config?: Partial<TransitionConfig>): string {
    const finalConfig = { ...this.defaultConfig, ...config };
    const { type, duration, easing, direction, scale = 0.95, blur = 5 } = finalConfig;

    let transform = '';
    let opacity = '';
    let filter = '';

    switch (type) {
      case 'fade':
        opacity = 'opacity: 0;';
        break;
      case 'slide':
        transform = `transform: translate${direction === 'left' || direction === 'right' ? 'X' : 'Y'}(${
          direction === 'right' || direction === 'down' ? '' : '-'
        }100%);`;
        break;
      case 'zoom':
        transform = 'transform: scale(0.5);';
        opacity = 'opacity: 0;';
        break;
      case 'flip':
        transform = 'transform: perspective(400px) rotateX(-90deg);';
        break;
      case 'scale':
        transform = `transform: scale(${scale});`;
        opacity = 'opacity: 0;';
        break;
      case 'blur':
        filter = `filter: blur(${blur}px);`;
        opacity = 'opacity: 0;';
        break;
    }

    return `
      .${elementId}-enter {
        ${transform}
        ${opacity}
        ${filter}
        transition: all ${duration}ms ${easing};
        will-change: transform, opacity, filter;
      }
      .${elementId}-enter-active {
        transform: none;
        opacity: 1;
        filter: none;
      }
      .${elementId}-exit {
        transform: none;
        opacity: 1;
        filter: none;
        transition: all ${duration}ms ${easing};
        will-change: transform, opacity, filter;
      }
      .${elementId}-exit-active {
        ${transform}
        ${opacity}
        ${filter}
      }
    `;
  }

  public createLoader(config: LoaderConfig): string {
    const { type, color, size = 40, duration = 1000 } = config;

    switch (type) {
      case 'spinner':
        return `
          <div class="loader-spinner" style="
            width: ${size}px;
            height: ${size}px;
            border: 4px solid ${color}40;
            border-top-color: ${color};
            border-radius: 50%;
            animation: spin ${duration}ms linear infinite;
          "></div>
          <style>
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          </style>
        `;
      case 'dots':
        return `
          <div class="loader-dots" style="display: flex; gap: 8px;">
            ${[0, 1, 2].map(i => `
              <div style="
                width: ${size / 3}px;
                height: ${size / 3}px;
                background-color: ${color};
                border-radius: 50%;
                animation: dots ${duration}ms ease-in-out ${i * (duration / 4)}ms infinite;
              "></div>
            `).join('')}
          </div>
          <style>
            @keyframes dots {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(0.5); opacity: 0.5; }
            }
          </style>
        `;
      case 'progress':
        return `
          <div class="loader-progress" style="
            width: ${size * 2}px;
            height: ${size / 4}px;
            background-color: ${color}40;
            border-radius: ${size / 8}px;
            overflow: hidden;
          ">
            <div style="
              width: 50%;
              height: 100%;
              background-color: ${color};
              animation: progress ${duration}ms ease-in-out infinite;
            "></div>
          </div>
          <style>
            @keyframes progress {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
          </style>
        `;
      case 'pulse':
        return `
          <div class="loader-pulse" style="
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            border-radius: 50%;
            animation: pulse ${duration}ms ease-in-out infinite;
          "></div>
          <style>
            @keyframes pulse {
              0% { transform: scale(0.8); opacity: 0.5; }
              50% { transform: scale(1); opacity: 1; }
              100% { transform: scale(0.8); opacity: 0.5; }
            }
          </style>
        `;
      default:
        return '';
    }
  }

  public async animateElement(
    element: HTMLElement,
    config?: Partial<TransitionConfig>
  ): Promise<void> {
    const elementId = `transition-${Math.random().toString(36).substr(2, 9)}`;
    const finalConfig = { ...this.defaultConfig, ...config };

    const styleElement = document.createElement('style');
    styleElement.textContent = this.createTransitionStyles(elementId, finalConfig);
    document.head.appendChild(styleElement);

    return new Promise((resolve) => {
      element.classList.add(`${elementId}-enter`);
      
      requestAnimationFrame(() => {
        element.classList.add(`${elementId}-enter-active`);
        
        setTimeout(() => {
          element.classList.remove(`${elementId}-enter`, `${elementId}-enter-active`);
          styleElement.remove();
          resolve();
        }, finalConfig.duration);
      });
    });
  }

  public showLoader(container: HTMLElement, config: LoaderConfig): void {
    const loaderHtml = this.createLoader(config);
    container.innerHTML = loaderHtml;
  }

  public hideLoader(container: HTMLElement): void {
    container.innerHTML = '';
  }
}
