const initialState = {
  token: null,
  status: "idle",
};

export default function authReduducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
