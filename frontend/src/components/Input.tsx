type labelProperties = {
    visible: boolean;
  };
  
type inputProps = {
    placeholder: string;
    label: labelProperties;
    type?: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
  
export function Input({
    placeholder,
    label = {  visible: false },
    type = "text",
    error = "e",
    ...rest
    }: inputProps) {
    return (
    <>
        <input
            type={type}
            placeholder={placeholder}
            style={{
            padding: "12px",
            display: "block",
            borderRadius:"0.5em",
            border:"1px solid grey"
            }}
            {...rest}
        />
        <label>
            {error && <span style={{zIndex:2, color: label.visible ? "red" : "#ffffff" }}>{error}</span>}
        </label>
    </>
    );
}