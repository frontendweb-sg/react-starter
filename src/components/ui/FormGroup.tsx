import classNames from "classnames";

export type FormGroupProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  label?: string;
  error?: string;
};
export default function FormGroup({
  label,
  children,
  className,
  ...rest
}: FormGroupProps) {
  return (
    <div className={classNames("mb-2", className)} {...rest}>
      {label && <label>{label}</label>}
      {children}
    </div>
  );
}
