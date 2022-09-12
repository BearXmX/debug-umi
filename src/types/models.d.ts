declare namespace testModel {
  interface model {
    namespace: 'testModel'
    //数据
    state: {
      name: string
    }
    //异步修改数据
    effects: {
      [x: string]: any
    }
    //同步修改数据
    reducers: {
      saveName(state: model['state'], { payload }: { type: string; payload: any }): any
      [x: string]: any
    }
  }
}

declare type modelType = {
  testModel: testModel.model['state']
}
