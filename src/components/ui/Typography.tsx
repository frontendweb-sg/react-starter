import classNames from "classnames";
import type { ElementType } from "react";
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p",
};

type TypographyProps = React.HtmlHTMLAttributes<HTMLHeadingElement> & {
  variant?: keyof typeof defaultVariantMapping;
  component?: ElementType;
  paragraph?: string;
  variantMapping?: object;
  gutterBottom?: boolean;
};

export default function Typography({
  variant = "body2",
  children,
  component,
  paragraph,
  variantMapping = defaultVariantMapping,
  className,
  gutterBottom,
  ...rest
}: TypographyProps) {
  const Component =
    component ||
    (paragraph
      ? "p"
      : variantMapping[variant as keyof typeof variantMapping] ||
        defaultVariantMapping[variant]);

  const classes = classNames(gutterBottom && "mb-3", className);
  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
