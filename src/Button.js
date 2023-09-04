import className from 'classnames';



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
    const classes = className('px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-grey-900 bg-gray-900 text-white': secondary,
        'border-grey-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'border-blue-500 bg-white text-blue-500': outline && primary,
        'border-gray-500 bg-white text-gray-900': outline && secondary,
        'border-green-500 bg-white text-green-500': outline && success,
        'border-yellow-500 bg-yellow-500 text-yellow-400': outline && warning,
        'border-red-500 bg-white text-red-500': outline && danger,
        'rounded-full': rounded
    });

    return (
        <button className={classes}>{children}</button>
    )
}
