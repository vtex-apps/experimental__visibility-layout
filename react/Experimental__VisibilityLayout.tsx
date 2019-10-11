import React, { Fragment } from 'react'

const Experimental__VisibilityLayout: StorefrontFunctionComponent<VisibilityLayoutProps> = ({
  visible,
  children
}) => {
  if (visible === false) {
    return null
  }

  return <Fragment>{children}</Fragment>
}

interface VisibilityLayoutProps {
  visible: boolean
}

Experimental__VisibilityLayout.schema = {
  title: 'admin/editor.visibilityLayout.title'
}

export default Experimental__VisibilityLayout
