function gameReducer(state = { players: [] }, { type, payload }) {
    switch (type) {
      case 'ADD_PLAYER':
        return {
          ...state,
          players: [...state.players, {
            id: payload.id,
            color: payload.color,
            ore: 0,
            wheat: 0,
            brick: 0,
            wood: 0,
            sheep: 0
          }]
        }
      case 'CHANGE_RESOURCE_AMOUNT':
        return {
          ...state,
          players: state.players.map((p) =>
            payload.playerId === p.id
              ? resolvePlayerGain(p, payload)
              : p
        )
        }
      default:
        return {
          ...state
        }
    }
  }
  
  function resolvePlayerGain(player, { resource, amount }) {
    return {
      ...player,
      [resource]: player[resource] + amount
    }
  }
  
  export default gameReducer;