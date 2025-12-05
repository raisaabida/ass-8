export const INSTALLED_KEY = 'installed_apps_v1'

export function getInstalled(){
  try{ return JSON.parse(localStorage.getItem(INSTALLED_KEY)) || [] }catch(e){return []}
}
export function setInstalled(list){
  localStorage.setItem(INSTALLED_KEY, JSON.stringify(list))
}
export function addInstalled(app){
  const list = getInstalled();
  if(!list.find(a=>a.id===app.id)){
    list.push(app)
    setInstalled(list)
  }
}
export function removeInstalled(id){
  const list = getInstalled().filter(a=>a.id!==id)
  setInstalled(list)
}
export function isInstalled(id){
  return getInstalled().some(a=>a.id===id)
}