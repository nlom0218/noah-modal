import styled, { css } from 'styled-components';

import {
  MiddleModalContentsAppear,
  MiddleModalContentsDisAppear,
  ModalContentsAppear,
  ModalContentsDisAppear,
  ModalLayoutAppear,
  ModalLayoutDisAppear,
} from '../animations';

import { AnimationType, BackdropStyleProps } from './type';
import ANIMATION from '../constants';

export const ModalLayout = styled.div<AnimationType>`
  z-index: 10;
  position: fixed;
  top: 0;
  border: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  margin: 0 auto;
  animation: ${(props) =>
      props.animation === ANIMATION.appear
        ? ModalLayoutAppear
        : ModalLayoutDisAppear}
    ${(props) => `${props.delayMsTime / 1000}s`} forwards;
`;

export const Backdrop = styled.div<BackdropStyleProps>`
  height: 100vh;
  cursor: ${(props) => props.isAbleBackdropClick && 'pointer'};
`;

type ModelContents = AnimationType & { position: 'bottom' | 'middle' };

export const ModalContents = styled.div<ModelContents>`
  z-index: 10;
  overflow: auto;
  max-height: ${(props) => (props.position === 'bottom' ? '90%' : '80%')};
  position: absolute;
  bottom: ${(props) => props.position === 'bottom' && '0'};
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #ffffff;
  border-radius: ${(props) =>
    props.position === 'bottom' ? '5px 5px 0px 0px' : '4px'};
  animation: ${(props) =>
      props.position === 'middle'
        ? props.animation === ANIMATION.appear
          ? MiddleModalContentsAppear
          : MiddleModalContentsDisAppear
        : props.animation === ANIMATION.appear
        ? ModalContentsAppear
        : ModalContentsDisAppear}
    ${(props) => `${props.delayMsTime / 1000}s`} forwards;

  ${(props) => props.position === 'middle' && flexCSS}
`;

const flexCSS = css`
  min-width: 500px;
  max-width: 500px;
  margin: 0 auto;
  top: 5%;

  @media only screen and (max-width: 768px) {
    // 모바일
    min-width: 90%;
    max-width: 90%;
  }
`;

export const TopSheet = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  font-size: 18px;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
`;
