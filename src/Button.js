import propTypes from "prop-types"

export default function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    return (
        <button className>{children}</button>
    )
}

Button.propTypes = {
    checkVariation: (props) => {
        const { primary, secondary, success, warning, danger, outline } = props
        const count = [primary, secondary, success, warning, danger, outline].filter(item => item).length
        
        if (count > 1) {
            return new Error(`Only one variation can be used at a time`)
        }
    }
}