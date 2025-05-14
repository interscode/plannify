// images.d.ts

declare module '*.png' {
    const content: any;
    export default content;
  }
  
  declare module '*.jpg' {
    const content: any;
    export default content;
  }
  
  declare module '*.jpeg' {
    const content: any;
    export default content;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
    export default content;
  }
  