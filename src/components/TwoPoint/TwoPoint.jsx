import React from 'react'
import Content from '../Content'
import ContentText from '../ContentText'
import ContentImage from '../ContentImage'
import './TwoPoint.css'

const TwoPointPerspective = () => (
  <Content>
    <ContentImage>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="two-point"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="1"
          strokeMiterlimit="10"
          d="M79.35,16.45c-39.15,7.85 -71.85,14.5 -72.65,14.85c-0.8,0.3 -1.95,0.05 -2.5,-0.5c-1.4,-1.4 -4.2,-0.25 -4.2,1.7c0,2 2.8,3.1 4.25,1.65c0.75,-0.75 5.7,-1.15 13.7,-1.15c15.25,0 26.05,-0.95 26.05,-2.25c0,-0.6 -5.35,-0.75 -14.25,-0.4c-7.85,0.3 -13.35,0.3 -12.25,0.05c4.2,-1.05 82.2,-16.4 83.35,-16.4c0.75,0 1.15,2.15 1.15,6.3l0,6.3l-27,1.25c-14.85,0.65 -27.6,1.45 -28.35,1.75c-1.1,0.4 -1.3,3.55 -1.1,15.5c0.2,13.85 0.1,14.9 -1.4,13.6c-2.1,-1.85 -33.85,-22 -37.15,-23.65c-1.5,-0.7 -0.45,0.65 2.5,3.35c2.75,2.5 5.55,4.35 6.2,4.1c0.7,-0.2 1.55,0.1 1.9,0.7c0.45,0.75 0.2,0.85 -0.7,0.3c-4.6,-2.6 21.4,18.6 27.4,22.35l2.2,1.4l-2.15,-1.9c-1.15,-1 -6.9,-5.65 -12.75,-10.25c-5.85,-4.6 -10.45,-8.6 -10.2,-8.8c0.4,-0.45 56.25,35.1 110.1,70.2c6.05,3.9 13.05,8.3 15.5,9.7l4.5,2.6l8.55,-5.65c4.7,-3.1 11.7,-7.65 15.5,-10.1c3.85,-2.45 14.6,-9.5 23.95,-15.6c9.35,-6.15 25.25,-16.5 35.35,-23.05c10.1,-6.55 25.2,-16.35 33.5,-21.75c8.35,-5.4 14.7,-9.4 14.15,-8.85c-0.55,0.55 -8.2,6.8 -17.05,13.85c-8.85,7.05 -36.2,29.05 -60.85,48.85c-24.65,19.8 -46.75,37.5 -49.15,39.3l-4.35,3.3l-15.3,-12.15c-8.4,-6.7 -16.85,-13.35 -18.7,-14.8c-1.9,-1.45 -4.85,-3.8 -6.5,-5.2c-7.95,-6.6 -62.85,-49.05 -63.1,-48.75c-0.15,0.15 9.65,8.15 21.75,17.8c47.25,37.5 68.3,54.1 75.5,59.5c6.05,4.5 6.1,4.7 2.65,6.95c-1.4,0.95 -2.35,1.95 -2.05,2.25c0.3,0.3 1.9,-0.45 3.6,-1.65l3.05,-2.2l3.75,3.1c2.05,1.65 4.15,3.05 4.65,3.05c0.55,0 -0.9,-1.4 -3.2,-3.1c-5.4,-3.95 -6,-2.9 8.1,-14c6.7,-5.3 18.3,-14.55 25.7,-20.55c7.45,-6 29.7,-23.9 49.5,-39.85c19.8,-15.9 40.3,-32.4 45.6,-36.7c5.25,-4.3 10.3,-7.8 11.25,-7.8c2.15,0 3.3,-2.75 1.8,-4.25c-0.9,-0.9 -2,-0.3 -4.4,2.2c-1.8,1.85 -11.55,8.65 -21.75,15.1l-18.5,11.75l-0.3,-14.85l-0.25,-14.85l-3.25,-0.55c-6.25,-1.05 -31.3,-2.3 -41.45,-2.05l-10.25,0.25l0,-7.45c0,-6.6 0.2,-7.4 1.75,-6.9c2.3,0.7 23.55,5.05 39.75,8.15c7.15,1.4 14.8,2.95 17,3.45c2.2,0.55 9.85,2.1 17,3.45c17,3.2 18.3,3.6 10.5,3c-21.45,-1.6 -30.5,-1.7 -29.2,-0.35c1.55,1.65 36.6,2.65 37.6,1.1c0.8,-1.3 -22.95,-6.3 -140.9,-29.6c-1.1,-0.25 -34,6 -73.15,13.85Zm70.65,0.15l0,12.55l-21.25,-0.45c-11.7,-0.2 -18.1,-0.15 -14.25,0.15l7,0.55l-8,0.65c-4.4,0.3 2,0.4 14.2,0.1l22.25,-0.45l0.25,47.9c0.15,26.35 0.2,48.05 0.1,48.3c-0.15,0.2 -4.5,-2.4 -9.7,-5.8c-5.2,-3.35 -15.2,-9.75 -22.3,-14.2c-7.05,-4.45 -13.1,-8.55 -13.45,-9.1c-0.35,-0.55 -0.7,-19.65 -0.8,-42.35l-0.15,-41.35l3.8,-0.7c2.1,-0.35 12.15,-2.4 22.3,-4.45c10.2,-2.1 18.85,-3.8 19.25,-3.85c0.4,-0.05 0.75,5.55 0.75,12.5Zm11,-10.7c2.5,0.5 11.8,2.35 20.75,4.15l16.25,3.25l0,23.15l0,23.15l-14.75,3.85c-8.1,2.15 -17.2,4.7 -20.25,5.6c-3,0.95 -6.75,2 -8.25,2.35l-2.75,0.65l0,-68.1l2.25,0.55c1.25,0.3 4.3,0.9 6.75,1.4Zm-70.8,52.1c-0.15,15.95 -0.6,29 -1,29c-0.4,-0.05 -9.9,-6.05 -21.2,-13.35l-20.5,-13.3l-0.3,-14.75l-0.25,-14.8l4.05,0.6c2.45,0.3 3.85,0.2 3.5,-0.4c-0.55,-0.85 4,-1.15 28,-1.8l8,-0.2l-0.3,29Zm11.85,-23.25c0,3.15 0.3,16 0.6,28.5c0.55,21.7 0.5,22.75 -1.3,22.8c-1,0 -3.55,0.65 -5.6,1.4l-3.75,1.3l0,-59.75l10,0l0.05,5.75Zm111.8,22.65l0.35,28.45l-4.85,-1.35c-2.65,-0.75 -6.1,-1.6 -7.6,-1.95l-2.75,-0.6l0,-21.85l3.45,-0.65c4.55,-0.85 11.5,-3.35 9.45,-3.4c-0.85,-0.05 -3.8,0.6 -6.5,1.45c-2.7,0.8 -5.25,1.5 -5.65,1.5c-0.4,0 -0.75,-6.75 -0.75,-15l0,-15l14.5,0l0.35,28.4Zm30.8,-26.8l7.2,0.55l0.3,6.85l0.35,6.9l-3.5,0.6c-4.05,0.7 -19,4.95 -27,7.65c-12.15,4.05 3.05,0.45 22.3,-5.3c8.15,-2.4 7.35,-3 8,5.85l0.55,7.2l-17.7,11.4c-9.7,6.3 -18.2,11.75 -18.9,12.1c-1,0.55 -1.25,-5.2 -1.25,-27.45l0,-28.1l11.25,0.6c6.2,0.35 14.5,0.85 18.4,1.15Zm-46.65,48.15l0,17.75l-5.75,3.65c-3.15,2.05 -12.95,8.35 -21.75,14.05c-8.8,5.75 -16.55,10.75 -17.25,11.15c-1,0.6 -1.25,-4.8 -1.25,-25.65c0,-30.65 -0.9,-28.6 11.1,-25.5c26.1,6.7 31.15,7.9 31.5,7.5c0.4,-0.35 -13.95,-4.35 -28.95,-8.1c-3.2,-0.8 -6,-1.6 -6.2,-1.8c-0.35,-0.35 34.95,-10.45 37.3,-10.7c0.95,-0.05 1.25,4.05 1.25,17.65Zm8.3,6.55c5.9,1.5 5.75,2.2 -1.55,6.95l-5.75,3.7l0,-5.95c0,-6.7 -0.1,-6.65 7.3,-4.7Zm-103.3,6.25l0,4.55l-4.25,-2.5c-5.95,-3.55 -5.2,-5 3.5,-6.45c0.4,-0.1 0.75,1.9 0.75,4.4Z M137.95,24.65c-0.9,0.25 -8.3,0.85 -16.5,1.3l-14.95,0.9l16.5,-0.45c9.1,-0.25 18.1,-0.85 20,-1.35l3.5,-0.85l-3.5,0c-1.9,0.05 -4.2,0.2 -5.05,0.45Z M109,60.1c2.85,1.15 36.75,9.9 38.3,9.9c2.45,0 -0.5,-1.05 -9.85,-3.55c-26.1,-6.85 -34.55,-8.75 -28.45,-6.35Z M133,77.15c-5.75,1.7 -13.75,4 -17.75,5.15c-3.95,1.15 -7.05,2.25 -6.8,2.45c0.4,0.45 37.65,-9.55 38.45,-10.3c1.1,-1.15 -4.25,-0.1 -13.9,2.7Z M158.5,25c1.65,0.55 10.45,1.15 19.5,1.4c16.15,0.45 16.25,0.45 3.5,-0.35c-7.15,-0.4 -15.9,-1.05 -19.5,-1.4c-4.9,-0.45 -5.75,-0.35 -3.5,0.35Z M166.5,29l-12,0.6l11.1,0.2c6.1,0.1 15.1,0.35 20,0.6c6.85,0.25 7.5,0.2 2.9,-0.3l-6,-0.7l6.5,-0.5c9.75,-0.75 -6.65,-0.7 -22.5,0.1Z M50,44.85c0.85,0.55 8.95,2.8 18,5.05c21.1,5.3 20.45,5.15 19.4,4.15c-0.5,-0.45 -8.55,-2.7 -17.9,-5c-22.4,-5.6 -21.3,-5.35 -19.5,-4.2Z M16.5,36.45c14.35,4.05 24.8,6.6 25.25,6.15c0.25,-0.3 -0.8,-0.8 -2.4,-1.15c-1.55,-0.4 -6.65,-1.7 -11.35,-3c-4.65,-1.25 -10.3,-2.55 -12.5,-2.85c-3.65,-0.5 -3.55,-0.4 1,0.85Z M269.95,39.45c-6.35,1.75 -12.4,3.75 -13.5,4.45c-1.9,1.2 -1.9,1.2 0.05,0.7c6.5,-1.6 28.05,-7.8 28.4,-8.15c1.05,-1.05 -4.2,0 -14.95,3Z"
        />
      </svg>
    </ContentImage>
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

export default TwoPointPerspective
