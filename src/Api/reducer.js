export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQByOTkpu4NvPOX7Tcw0Wc9w3Ntn_VI--U7-Wz5xnWFKn4IuVEgECwuk5zqh4riwCMFn6KpMi4F-NwwrjtdsZfG-46JBERMWXhMmNancfBF8B78II3g_aQVKK3yRlgMy3TSwLXb-V3s2vXAjkeKKnbSnB1ALZtCdP6i1Kb2xeclwuyEiafjZ",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
     case "SET_DISCOVER_WEEKLY":
       return {
         ...state,
         discover_weekly: action.discover_weekly,
       }
    default:
      return state;
  }
};

export default reducer;
