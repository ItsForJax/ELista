import React from 'react';
import { Snackbar } from 'react-native-paper';

const SnackBarComponent = ({ visible, onDismiss, message }) => {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      action={{
        label: 'Dismiss',
        onPress: onDismiss,
      }}
    >
      {message}
    </Snackbar>
  );
};

export default SnackBarComponent;