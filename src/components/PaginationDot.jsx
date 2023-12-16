import { Animated } from 'react-native';

export const PaginationDot = ({ animatedValues, selected, index }) => {
  const scale = animatedValues[index];

  return (
    <Animated.View
      style={{
        transform: [{scale}],
        height: 12,
        width: selected ? 20 : 15,
        borderRadius: 10,
        backgroundColor: selected ? '#FFD600' : 'black',
        marginHorizontal: 5,
        borderColor: selected ? 'black' : '#FFD600',
        borderStyle: selected ? 'solid' : '',
        borderWidth: selected ? 1.5 : 0
      }}
    />
  );
};