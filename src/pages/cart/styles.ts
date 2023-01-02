import { keyframes, styled } from '../../styles'

const anime = keyframes({
  from: {
    left: '0px',
  },
  to: {
    left: 'calc(100% - 100px)',
  },
})

export const Test = styled('div', {
  width: 100,
  height: 100,
  backgroundColor: '$danger',
  position: 'relative',

  animation: `${anime} 2s 1s`,
  animationFillMode: 'forwards',
})
