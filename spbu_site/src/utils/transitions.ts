export type TransitionType = 'fade' | 'slide' | 'zoom' | 'flip';
export type LoaderType = 'spinner' | 'dots' | 'progress';

interface AnimationConfig {
  duration: number;
  delay?: number;
  easing: string;
}

interface TransitionConfig extends AnimationConfig {
  type: TransitionType;
  direction?: 'left' | 'right' | 'up' | 'down';
}

interface LoaderConfig extends AnimationConfig {
  type: LoaderType;
  color: string;
  size?: number;
}

export class TransitionManager {
  private static instance: TransitionManager;
  private activeTransitions: Map<string, boolean>;
  private defaultConfig: TransitionConfig = {
    type: 'fade',
    duration: 300,
    easing: 'ease-in-out'
  };

  private constructor() {
    this.activeTransitions = new Map();
  }

  public static getInstance(): TransitionManager {
    if (!TransitionManager.instance) {
      TransitionManager.instance = new TransitionManager();
    }
    return TransitionManager.instance;
  }

  public createTransitionStyles(elementId: string, config?: Partial<TransitionConfig>): string {
    const finalConfig = { ...this.defaultConfig, ...config };
    const { type, duration, easing, direction } = finalConfig;

    let transform = '';
    let opacity = '';

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
    }

    return `
      .${elementId}-enter {
        ${transform}
        ${opacity}
        transition: all ${duration}ms ${easing};
      }
      .${elementId}-enter-active {
        transform: none;
        opacity: 1;
      }
      .${elementId}-exit {
        transform: none;
        opacity: 1;
        transition: all ${duration}ms ${easing};
      }
      .${elementId}-exit-active {
        ${transform}
        ${opacity}
      }
    `;
  }

  public createLoader(config: LoaderConfig): string {
    const { type, color, size = 40 } = config;

    switch (type) {
      case 'spinner':
        return `
          <div class="spinner" style="
            width: ${size}px;
            height: ${size}px;
            border: 4px solid ${color};
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          "></div>
        `;
      case 'dots':
        return `
          <div class="dots" style="display: flex; gap: 8px;">
            ${Array(3).fill(0).map((_, i) => `
              <div style="
                width: ${size / 3}px;
                height: ${size / 3}px;
                background-color: ${color};
                border-radius: 50%;
                animation: bounce 0.6s ease-in-out ${i * 0.1}s infinite;
              "></div>
            `).join('')}
          </div>
        `;
      case 'progress':
        return `
          <div class="progress" style="
            width: ${size * 3}px;
            height: ${size / 4}px;
            background-color: rgba(0,0,0,0.1);
            border-radius: ${size / 8}px;
            overflow: hidden;
          ">
            <div style="
              width: 30%;
              height: 100%;
              background-color: ${color};
              animation: progress 1s ease-in-out infinite;
            "></div>
          </div>
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

