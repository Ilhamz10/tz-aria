/* eslint-disable react/prop-types */
import { createElement } from "react"

const DynamicTypography = ({tag, children, className, ...props}) => {
  return createElement(tag, {...props, className}, children)
}

export default DynamicTypography