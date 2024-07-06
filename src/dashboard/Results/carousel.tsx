import React from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className="carousel">
      {children}
    </div>
  );
};


interface CarouselContentProps {
  children: React.ReactNode;
}

export const CarouselContent: React.FC<CarouselContentProps> = ({ children }) => {
  return (
    <div className="carousel-content">
      {children}
    </div>
  );
};


interface CarouselItemProps {
  children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return (
    <div className="carousel-item">
      {children}
    </div>
  );
};

interface CarouselPreviousProps {
  onClick: () => void;
}

export const CarouselPrevious: React.FC<CarouselPreviousProps> = ({ onClick }) => {
  return (
    <button className="carousel-previous" onClick={onClick}>
      Previous
    </button>
  );
};


interface CarouselNextProps {
  onClick: () => void;
}

export const CarouselNext: React.FC<CarouselNextProps> = ({ onClick }) => {
  return (
    <button className="carousel-next" onClick={onClick}>
      Next
    </button>
  );
};


