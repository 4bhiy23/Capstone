import React from 'react';
import styled from 'styled-components';

const AgentCard = ({ name, designation, image, tagline }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image">
          <img src={image} alt={name} className="profile overflow-hidden" />
        </div>

        <span className="title">{name}</span>
        <span className="price">{designation}</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 12em;
    height: 17em;
    background: #ffffff;
    border-radius: 14px;
    border: 1px solid rgba(212, 175, 55, 0.35); /* Gold border */
    box-shadow: 0px 6px 20px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: all 180ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5em;
    padding-bottom: 3.4em;
  }

  .card:hover {
    box-shadow: 0px 10px 28px rgba(0,0,0,0.12);
    transform: translateY(-4px);
  }

  .card::after {
    content: "Contact";
    padding-top: .75em;
    // padding-left: 1.25em;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -60px;
    background: linear-gradient(135deg, #d4af37, #f7e9b0); /* Gold gradient */
    color: #2b2b2b;
    height: 3.25em;
    width: 100%;
    transition: all 160ms ease;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    opacity: 0;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
  }

  .card:hover::after {
    bottom: 0;
    opacity: 1;
  }

  .card:active {
    transform: scale(0.97);
  }

  .card:active::after {
    content: "+91 98XX XXX XXX";
    height: 3.2em;
  }

  .card .title {
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    position: absolute;
    left: 0.75em;
    bottom: 2.1em;
    font-weight: 500;
    color: #1a1a1a;
  }

  .card .price {
    font-family: 'Poppins', sans-serif;
    font-size: 0.95em;
    position: absolute;
    left: 0.75em;
    bottom: 0.75em;
    color: #d4af37; /* Gold price */
    font-weight: 600;
  }

  .image {
    background: #fbfbfb;
    width: 100%;
    height: 100%;
    display: grid;
    border-radius: 10px;
    border: 1px solid rgba(212, 175, 55, 0.25);
    place-items: center;
  }

  .text {
    max-width: 60px;
    color: #777;
    font-family: 'Poppins', sans-serif;
    font-size: 0.85em;
  }
`;

export default AgentCard;
