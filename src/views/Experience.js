import React from 'react'
import styled from 'styled-components'

const Experience = styled.section ``

export default ({ page }) => (
  <Experience className="section cascade bg-cream">
    <div className="container">
      <p className="black">
        {page.title} <span className="orange">{page.orange}</span>.
      </p>
    </div>
  </Experience>
)
