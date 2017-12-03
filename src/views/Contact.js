import React from 'react'
import styled from 'styled-components'

import Content from '../components/Content.js'
import StyledForm from '../components/NetlifyForm'

const Contact = styled.section `
  a {
    color: #e74769
  }
  a:hover {
    color: #e7461c
  }
`

export default ({ page }) => (
  <Contact className="section cascade">
    <div className="container">
      <p className="white">
        {page.title}
        <Content source={page.content} />
      </p>
    </div>
    <StyledForm />
  </Contact>
)
