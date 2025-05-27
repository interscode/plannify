import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
  PanResponder,
} from "react-native";
import dayjs from "dayjs";
import "dayjs/locale/es";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 6;

dayjs.locale("es");

const generateDays = (centerDate: dayjs.Dayjs) => {
  return [-2, -1, 0, 1, 2].map((offset) => centerDate.add(offset, "day"));
};

const DaySelector = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [days, setDays] = useState(generateDays(selectedDate));
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setDays(generateDays(selectedDate));
  }, [selectedDate]);

  const animate = (direction: "left" | "right") => {
    animation.setValue(direction === "left" ? -1 : 1);
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.out(Easing.exp),
    }).start();
  };

  const moveSelection = (direction: "left" | "right") => {
    const newDate = selectedDate.add(direction === "left" ? -1 : 1, "day");
    animate(direction);
    setSelectedDate(newDate);
  };

  const handleTap = (index: number) => {
    if (index === 2) return;
    const direction = index < 2 ? "left" : "right";
    moveSelection(direction);
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 20,
        onPanResponderRelease: (_, gesture) => {
          if (gesture.dx > 30) {
            moveSelection("left");
          } else if (gesture.dx < -30) {
            moveSelection("right");
          }
        },
      }),
    [selectedDate],
  );

  const translateX = animation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-ITEM_WIDTH, 0, ITEM_WIDTH],
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Animated.View style={[styles.carousel, { transform: [{ translateX }] }]}>
        {days.map((day, index) => {
          const isSelected = index === 2;
          return (
            <TouchableOpacity
              key={day.format("YYYY-MM-DD")}
              style={[styles.dayContainer, isSelected && styles.selectedDay]}
              onPress={() => handleTap(index)}
              activeOpacity={0.8}
            >
              <Text style={[styles.dayText, isSelected && styles.selectedText]}>
                {day.format("ddd").toUpperCase()}
              </Text>
              <Text
                style={[styles.dateText, isSelected && styles.selectedText]}
              >
                {day.format("D")}
              </Text>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  carousel: {
    flexDirection: "row",
    width,
    justifyContent: "space-around",
  },
  dayContainer: {
    width: ITEM_WIDTH * 0.95,
    height: 80,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  selectedDay: {
    backgroundColor: "#00008B",
  },
  dayText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  dateText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  selectedText: {
    color: "#fff",
  },
});

export default DaySelector;
