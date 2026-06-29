declare module 'isomorphic-dompurify' {
    import DOMPurify from 'dompurify';
    export default DOMPurify;
    export * from 'dompurify';
}

declare module 'three/addons/misc/Timer.js' {
    import { Timer } from 'three/examples/jsm/misc/Timer.js';
    export default Timer;
}
