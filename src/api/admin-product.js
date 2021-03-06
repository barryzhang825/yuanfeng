import request from '@/utils/request'

export function getProductList(data) {
  return request({
    url: '/background-product/queryByPage',
    method: 'get',
    params: data
  })
}
export function getProduct(data) {
  return request({
    url: '/background-product/queryById',
    method: 'get',
    params: data
  })
}
export function updateProduct(data) {
  return request({
    url: '/background-product/update',
    method: 'post',
    data
  })
}
export function deleteProduct(data) {
  return request({
    url: '/background-product/delete',
    method: 'post',
    data
  })
}
export function addProduct(data) {
  return request({
    url: '/background-product/add',
    method: 'post',
    data
  })
}
export function getAllClass(data) {
  return request({
    url: '/background-product/queryGroupByPage',
    method: 'get',
    params: data
  })
}
export function deleteClass(data) {
  return request({
    url: '/background-product/deleteGroup',
    method: 'post',
    data
  })
}
export function addClass(data) {
  return request({
    url: '/background-product/addGroup',
    method: 'post',
    data
  })
}
export function updateClass(data) {
  return request({
    url: '/background-product/updateGroup',
    method: 'post',
    data
  })
}
