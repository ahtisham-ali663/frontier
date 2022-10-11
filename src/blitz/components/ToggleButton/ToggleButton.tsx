import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import css from './ToggleButton.module.scss'

const ToggleButton = ({ ...props }) => {
  // const { toggle_type, isDisabled, size, checked: checkedProp } = props
  const [checked, setChecked] = useState(false)
  // const onToggle = () => setIsToggled(!isToggled)
  useEffect(() => {
    props.data(checked)
  }, [checked])

  return (
    <div className={css.ToggleButton}>
      {/* <h1>Full Toggle Switch Button</h1> */}
      <div className="FullToggle">
        {/* <div className={toggle_type}> */}
        <label className={`${css.buttonSwitch} ${css.large}`}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            // disabled={isDisabled}
          />
          <span className={`${css.switch} ${css.large}`} />
          {/* <span className={`switch ${size}`} /> */}
        </label>
      </div>
    </div>
  )
}

ToggleButton.propTypes = {
  toggle_type: PropTypes.oneOf(['FullToggle']),
  size: PropTypes.oneOf(['large', 'small']),
  checked: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

export default ToggleButton
