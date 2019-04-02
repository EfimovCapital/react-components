/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> { }

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent }
}

declare module "react-element-to-jsx-string";
declare module "react-syntax-highlighter/dist/prism-light";
declare module "react-syntax-highlighter/dist/esm/styles/prism";
declare module "react-syntax-highlighter/dist/esm/languages/prism/jsx";