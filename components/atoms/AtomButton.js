import React from "react";
import PropTypes from "prop-types";
import { Button } from "rsuite";

export default function AtomButtonRsuite({
    styles, 
    color, 
    className, 
    text, 
    isDisabled, 
    onClick, 
    appearance,
    size,
    type
}) {
    return (
        <>
            <Button
                className={className}
                onClick={onClick}
                color={color}
                style={styles}
                disabled={isDisabled}
                appearance={appearance}
                size={size}
                type={type}

            >
                { text }

            </Button>
        </>
    )
}

AtomButtonRsuite.defaultProps = {

    isDisabled: false,
    appearance:"primary"

}

AtomButtonRsuite.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    styles: PropTypes.object,
    isDisabled: PropTypes.bool,
    appearance: PropTypes.string,
    size: PropTypes.string

}