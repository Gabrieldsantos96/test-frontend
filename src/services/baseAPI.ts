import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { ItemProps } from 'components/types'

const API_URL = 'http://18.230.22.49:3333/api/'

function axiosCreate(): AxiosInstance {
  const baseApi = axios.create({
    baseURL: API_URL
  })

  return baseApi
}

export class Api {
  axios: AxiosInstance

  constructor() {
    this.axios = axiosCreate()
  }

  async getArticleByID(articleId: string): Promise<AxiosResponse> {
    const response = await this.axios.get(`/getArticle/${articleId}`)
    return response
  }

  async getArticles(): Promise<AxiosResponse> {
    const response = await this.axios.get('/')
    return response
  }

  async putArticleByID(articleId: string, data: ItemProps[]) {
    const response = await this.axios.put(`/updateArticle/${articleId}`, data)
    return response
  }
}

export const baseApi = new Api()