import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import animatedSplash from '../assets/animations/animatedSplash.json';

export const SplashScreen: React.FC<any> = () => {
  const [isSplashScreenVisible, setIsSplashScreenVisible] =
    useState<boolean>(true);

  const closeSplashScreen = () => setIsSplashScreenVisible(false);

  return (
    <Modal visible={isSplashScreenVisible} animationType="fade">
      <LottieView
        source={animatedSplash}
        loop={false}
        autoPlay
        onAnimationFinish={closeSplashScreen}
      />
    </Modal>
  );
};
