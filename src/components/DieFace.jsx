import React from 'react';

function DieContainer({ children }) {
  return (
    <div className="relative h-full text-[9px] ml:text-[10px] 2xl:text-[12px]">{children}</div>
  );
}

function PipCenter() {
  return (
    <div className="absolute top-[calc(50%-0.5em)] left-[calc(50%-0.5em)] h-[1em] w-[1em] rounded-full bg-dmdark1" />
  );
}

function PipTwoTop() {
  return <div className="absolute top-[25%] left-[25%] h-[1em] w-[1em] rounded-full bg-dmdark1" />;
}

function PipTwoBottom() {
  return (
    <div className="absolute bottom-[25%] right-[25%] h-[1em] w-[1em] rounded-full bg-dmdark1" />
  );
}

function PipTopLeft() {
  return (
    <div className="absolute top-[calc(26%-0.5em)] left-[calc(26%-0.5em)] h-[1em] w-[1em] rounded-full bg-dmdark1" />
  );
}

function PipTopRight() {
  return (
    <div className="absolute top-[calc(26%-0.5em)] right-[calc(26%-0.5em)] h-[1em] w-[1em] rounded-full bg-dmdark1" />
  );
}

function PipBottomLeft() {
  return (
    <div className="absolute bottom-[calc(26%-0.5em)] left-[calc(26%-0.5em)] h-[1em] w-[1em] rounded-full bg-dmdark1" />
  );
}

function PipBottomRight() {
  return (
    <div className="absolute bottom-[calc(26%-0.5em)] right-[calc(26%-0.5em)] h-[1em] w-[1em] rounded-full bg-dmdark1" />
  );
}

function PipCenterLeft() {
  return (
    <div className="absolute top-[calc(50%-0.5em)] left-[calc(26%-0.5em)] h-[1em] w-[1em] rounded-full bg-dmdark1" />
  );
}

function PipCenterRight() {
  return (
    <div className="absolute top-[calc(50%-0.5em)] right-[calc(26%-0.5em)] h-[1em] w-[1em] rounded-full bg-dmdark1" />
  );
}

export default function DieFace({ number }) {
  if (number === 2) {
    return (
      <DieContainer>
        <PipTwoTop />
        <PipTwoBottom />
      </DieContainer>
    );
  }

  if (number === 3) {
    return (
      <DieContainer>
        <PipTopLeft />
        <PipCenter />
        <PipBottomRight />
      </DieContainer>
    );
  }

  if (number === 4) {
    return (
      <DieContainer>
        <PipTopLeft />
        <PipTopRight />
        <PipBottomLeft />
        <PipBottomRight />
      </DieContainer>
    );
  }

  if (number === 5) {
    return (
      <DieContainer>
        <PipTopLeft />
        <PipTopRight />
        <PipCenter />
        <PipBottomLeft />
        <PipBottomRight />
      </DieContainer>
    );
  }

  if (number === 6) {
    return (
      <DieContainer>
        <PipTopLeft />
        <PipCenterLeft />
        <PipBottomLeft />
        <PipTopRight />
        <PipCenterRight />
        <PipBottomRight />
      </DieContainer>
    );
  }

  return (
    <DieContainer>
      <PipCenter />
    </DieContainer>
  );
}
