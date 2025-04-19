type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
};

// A button that takes its text (the text written inside the buton border) and its type (button, submit, reset) as props

export function Button({ text, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      style={{
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        fontWeight: "500",
        color: "#ffffff",
        backgroundColor: "#273469",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}
