// функция проверят успешно ли отправился запрос
export const checkResponse = (response, errText) => {
  if (response.status > 400) throw new Error(errText)
  return response.json()
}
// функция вытаскивает из объекта ошибки строку
export const errorHandler = (error) => (error.response ? error.response.data : error.message)