import Vue from 'vue'
import Vuex from 'vuex'
import { reqAddress, reqFoodCategorys, reqShops, reqShopGoods, reqShopInfo, reqShopRatings } from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latitude: 40.10038,
    longitude: 116.36867,
    address: {},
    categorys: [],
    shops: [],
    goods: [],
    ratings: [],
    info: {},
  },
  mutations: {
    receive_address(state, { address }) {
      state.address = address
    },
    receive_categorys(state, { categorys }) {
      state.categorys = categorys
    },
    receive_shops(state, { shops }) {
      state.shops = shops
    },
    receive_shopgoods(state, { goods }) {
      state.goods = goods
    },
    receive_shopinfo(state, { info }) {
      state.info = info
    },
    receive_shopratings(state, { ratings }) {
      state.ratings = ratings
    }
  },
  actions: {
    /*
    1.创建异步函数，传入commit与state
    2.创建api函数需要的参数
    3.传入参数获取结果
    4.获取具体data结果
    5.提交commit
    */
    async getAddress({ commit, state }) {
      const geohash = state.latitude + ',' + state.longitude
      const result = await reqAddress(geohash)
      //提交mutation
      if (result.code === 0) {
        const address = result.data
        commit('receive_address', { address })
      }
    },
    async getCategorys({ commit }) {
      const result = await reqFoodCategorys()
      if (result.code === 0) {
        const categorys = result.data
        commit('receive_categorys', { categorys })
      }
    },
    async getShops({ commit, state }) {
      const { latitude, longitude } = state
      const result = await reqShops(latitude, longitude)
      if (result.code === 0) {
        const shops = result.data
        commit('receive_shops', { shops })
      }
    },
    async getShopGoods({ commit }) {
      const result = await reqShopGoods()
      if (result.code === 0) {
        const goods = result.data
        commit('receive_shopgoods', { goods })
      }
    },
    async getShopInfo({ commit }) {
      const result = await reqShopInfo()
      if (result.code === 0) {
        const info = result.data
        commit('receive_shopinfo', { info })
      }
    },
    async getShopRatings({ commit }) {
      const result = await reqShopRatings()
      if (result.code === 0) {
        const ratings = result.data
        commit('receive_shopratings', { ratings })
      }
    }
  },
  getters: {

  }
})