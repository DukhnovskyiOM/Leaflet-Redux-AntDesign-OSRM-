import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: [
    {
        name: 'Маршрут №1',
        id: 1,
        active: false,
        point: [
        {geocode: [59.84660399, 30.29496392],
        popUp: "Начальная точка"},
        {geocode: [59.82934196, 30.42423701],
        popUp: "Промежуточная точка"},
        {geocode: [59.83567701, 30.38064206],
        popUp: "Конечная точка"},
        ]
    },
    {
        name: 'Маршрут №2',
        id: 2,
        active: false,
        point: [
        {geocode: [59.82934196, 30.42423701],
        popUp: "Начальная точка"},
        {geocode: [59.82761295, 30.41705607],
        popUp: "Промежуточная точка"},
        {geocode: [59.84660399, 30.29496392],
        popUp: "Конечная точка"},
    ]
    },
    {
        name: 'Маршрут №3',
        id: 3,
        active: false,
        point: [
        {geocode: [59.83567701, 30.38064206],
        popUp: "Начальная точка"},
        {geocode: [59.84660399, 30.29496392],
        popUp: "Промежуточная точка"},
        {geocode: [59.82761295, 30.41705607],
        popUp: "Конечная точка"},
    ]
},
  ]
};

export const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    addCoordinates: (state, { payload }) => {
      const index = state.points.findIndex(e => e.active === true)
      const polyline = payload
      state.points[index] = {...state.points[index], polyline}
    },
    checkActive: (state, { payload }) => {
      state.points.forEach(e => {
        if(e.active === true){
          e.active = false
        }
      })
      state.points[payload.id].active = true
    },
  },
});

export const { addCoordinates, checkActive } = pointSlice.actions;

export default pointSlice.reducer;