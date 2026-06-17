import React from 'react';
import { View, ViewProps } from 'react-native';

export default React.forwardRef(function PagerViewStub(
  props: ViewProps & { children?: React.ReactNode },
  ref: any
) {
  return <View {...props} />;
});
