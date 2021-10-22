import { createRef, useState } from 'react';
import { usePopper } from 'react-popper';
import './App.css';

function App() {
  const [boundaryRef,setBoundaryRef] = useState(null);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  console.log(boundaryRef)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement:"auto",
    modifiers: [{ name: 'arrow', options: { element: arrowElement } },{ name: 'offset', options: { offset: [ 0, 15 ] } }, {
      name:"preventOverflow",
      enabled:true,
      options: {
        rootBoundary:boundaryRef,
      },
    },],
  });

  return (
    <div className = "container" ref = {setBoundaryRef} >
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <div ref={setPopperElement} className = "fixed-width-popper" style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </div>
  );
}

export default App;
