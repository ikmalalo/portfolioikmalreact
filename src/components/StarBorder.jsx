import React from 'react';
import './StarBorder.css';

const StarBorder = ({
  as: Component = 'div',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
      {...rest}
    >
      <div 
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          padding: `${thickness}px`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      >
        <div
          className="border-gradient-bottom"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 20%)`,
            animationDuration: speed
          }}
        ></div>
        <div
          className="border-gradient-top"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 20%)`,
            animationDuration: speed
          }}
        ></div>
      </div>
      <div className="inner-content-wrapper">{children}</div>
    </Component>
  );
};

export default StarBorder;
