import { Motion, spring } from 'react-motion'

import React from 'react'
import Content from './Content'
import ContentText from './ContentText'

const ThreePointPerspective = () => (
  <Content>
    <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
      {value => <div>{value.x}</div>}
    </Motion>
    <ContentText>
      <h3>Two Point Perspective </h3>
      <p>
        A drawing has one-point perspective when it contains only one vanishing point on the horizon line. This type of perspective is typically used for images of roads, railway tracks, hallways, or buildings viewed so that the front is directly facing the viewer. Any objects that are made up of lines either directly parallel with the viewer's line of sight or directly perpendicular (the railroad slats) can be represented with one-point perspective. These parallel lines converge at the vanishing point.
      </p>
      <p>
        One-point perspective exists when the picture plane is parallel to two axes of a rectilinear (or Cartesian) scene – a scene which is composed entirely of linear elements that intersect only at right angles. If one axis is parallel with the picture plane, then all elements are either parallel to the picture plane (either horizontally or vertically) or perpendicular to it. All elements that are parallel to the picture plane are drawn as parallel lines. All elements that are perpendicular to the picture plane converge at a single point (a vanishing point) on the horizon.
      </p>
    </ContentText>

  </Content>
)

export default ThreePointPerspective
