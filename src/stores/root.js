import { defineStore } from 'pinia'
import axios from 'axios'

import { INGREDIENTS_URL } from '../constants'

console.log(INGREDIENTS_URL)

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: []
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL)
      this.ingredients = data?.data?.drinks
    }
  }
})