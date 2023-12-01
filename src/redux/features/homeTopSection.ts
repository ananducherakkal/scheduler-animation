import { ITargetPosition } from "@/hooks/useTargetPosition";
import { createSlice } from "@reduxjs/toolkit";
import { MotionValue } from "framer-motion";

type InitialState = {
  scrollYProgress: MotionValue<number> | null;
  targetPosition: ITargetPosition;
};

const initialState: InitialState = {
  scrollYProgress: null,
  targetPosition: {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    containerWidth: 0,
    size: 0,
  },
};

export const homeTopSectionSlice = createSlice({
  name: "homeTopSection",
  initialState,
  reducers: {
    reset: () => initialState,
    setScrollYProgress: (state, action) => {
      state.scrollYProgress = action.payload;
    },
    setTargetPosition: (state, action) => {
      state.targetPosition = action.payload;
    },
  },
});

export const { reset, setScrollYProgress, setTargetPosition } =
  homeTopSectionSlice.actions;

export default homeTopSectionSlice.reducer;
