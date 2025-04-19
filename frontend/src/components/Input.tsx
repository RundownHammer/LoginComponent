// A input component
// takes its type, placeholder, labelProperties (currently only visible property),
// and an error msg to show inside the label

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
    label = { visible: false }, // if this is true the color of error inside the label changes from background color to red
                                // this is done so that some message is there but not visible otherwise when label is empty and some text enters it it pushes everything below it downwords
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