import { state } from './states';//初始状态
import { mutations } from './mutations';//变更状态
//得到我们所需要的数据
export default new Vuex.Store({
  state,
  mutations
});
