const model: testModel.model = {
  namespace: 'testModel',
  //数据
  state: {
    name: 'jack',
  },
  //异步修改数据
  effects: {},
  //同步修改数据
  reducers: {
    saveName(state = { name: '' }, { payload }) {
      // state是当前状态的值，如果未被修改过，那么state为空，默认值为{ name: '' }。  payload 是调用dispatch时传过来的值。
      return {
        ...state,
        name: payload, //请求到的数据
      }
    },
  },
}

export default model
