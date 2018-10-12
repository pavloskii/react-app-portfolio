import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    0% {
        opacity: .2;
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0.2;
    }
`;

export const Animation = styled.div`
    text-align: center;

    span {
        color: ${({ theme }) => theme.textSecondary};
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
        font-size: 80px;
        line-height: 0.1;
        animation-name: ${blink};
        animation-duration: 1s;
        animation-iteration-count:infinite;
        animation-fill-mode: both;
    }

    span:nth-child(2) {
        animation-delay: .2s;
    }

    span:nth-child(3) {
        animation-delay: .4s;
    }
`;