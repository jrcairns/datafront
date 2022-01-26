import styled from 'styled-components'

const ModifierMap = {
  default: {
    color: 'var(--color-white)',
    background: 'var(--color-green-500)'
  }
}

export const StyledButton = styled.button`
  width: 100%;
  border: none;
  padding: .825rem 0.5rem;
  font-size: 1rem;
  font-weight: var(--font-semibold);
  text-align: center;
  color: ${props => ModifierMap[props?.modifier]?.color || ModifierMap.default.color };
  background-color: ${props => ModifierMap[props?.modifier]?.background || ModifierMap.default.background };
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`