interface buttonStyle {
    backgroundColor: string;
    paddingX: string;
    paddingY: string;
    shadow: string;
    borderRadius: string;
    width: string;
}

const buttonStyle: buttonStyle = {
    backgroundColor: "bg-white",
    paddingX: "px-3",
    paddingY: "py-2",
    shadow: "shadow-sm",
    borderRadius: "rounded-sm",
    width: "w-48"
}


const styleInitialButton = ` ${buttonStyle.width} ${buttonStyle.backgroundColor} ${buttonStyle.borderRadius} ${buttonStyle.paddingX} ${buttonStyle.paddingY} ${buttonStyle.shadow}`

export { buttonStyle, styleInitialButton}