export default class Logs {
  constructor (client) {
    this.client = client
  }

  list = async (params, opts) => this.client.get(`/users/${this.client.userSlug}/bots/${this.client.botSlug}/versions/${this.client.botVersion}/dataset/logs`, params, opts)

  getById = async (id, params, opts) => this.client.get(`/users/${this.client.userSlug}/bots/${this.client.botSlug}/versions/${this.client.botVersion}/dataset/logs/${id}`, params, opts)

  deleteById = async (id, params, opts) => this.client.del(`/users/${this.client.userSlug}/bots/${this.client.botSlug}/versions/${this.client.botVersion}/dataset/logs/${id}`, params, opts)

  deleteBulk = async (data, opts) => this.client.post(`/users/${this.client.userSlug}/bots/${this.client.botSlug}/versions/${this.client.botVersion}/dataset/logs/bulk_destroy`, data, opts)

  archiveBulk = async (data, opts) => this.client.put(`/users/${this.client.userSlug}/bots/${this.client.botSlug}/versions/${this.client.botVersion}/dataset/logs/bulk_archive`, data, opts)
}
